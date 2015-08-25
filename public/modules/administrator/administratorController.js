appServersoft.controller('administratorController', ['$scope','$filter','$modal','HealthProfessional','HealthProfessionalStudy','HealthProfessionalActo', function($scope,$filter,$modal,HealthProfessional,HealthProfessionalStudy,HealthProfessionalActo){
        
       $scope.loadList=function(){
        HealthProfessional.get()
				.$promise.then(function(response){
					$scope.ListProfessional=response;
				
                    HealthProfessionalStudy.get()
				            .$promise.then(function (responsestudy) {
                        angular.forEach(responsestudy, function (svalue, skey) { 
                            angular.forEach($scope.ListProfessional, function (pvalue, pkey) {
                                if (svalue.hpid == pvalue.hpid) { 
                                    $scope.ListProfessional[pkey]['actAdm'] = { acto: svalue.hpeactoadm, fecha: svalue.hpefecact };
                                }
                            });                
                        });
                        });
            });

        }
    $scope.loadList();
///////////
 ///modal
 
  $scope.animationsEnabled = true;


  //save Data

  $scope.SaveData = function(hpid,DataSave){

  	//data professional study
	HealthProfessionalActo.put(hpid,DataSave)
			.$promise.then(function(responseActo){
				if(responseActo.status=="SUCCESS"){
						
				}
			});

  }

  $scope.openmodalRegisterActo = function (idUserRegistered) {

    var modalInstance = $modal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'ModalRegisterActo.html',
      controller: 'ModalInstanceRegisterActo',
      backdrop:false,
      size:'',
      resolve: {
        hpid: function () {
          return idUserRegistered;
        }

      }
    });

    modalInstance.result.then(function (DataSave) {
                $scope.SaveData({ hpid: idUserRegistered }, DataSave);
                $scope.loadList();
    }, function () {
      
    });
  };



}]);

appServersoft.controller('ModalInstanceRegisterActo', function ($scope, $modalInstance, hpid) {
  	$scope.hpid = hpid;
   $scope.ok = function () {
   	$modalInstance.close({hpeactoadm:$scope.numActo,hpefecact:$scope.fecActo});
  };
  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
    };

    $scope.maskDate = function (value, sep, pat, nums) {
        val = value;
        largo = val.length;
        var preval = val;
        val = val.split(sep)
        
        if (val.length == 2) {
            var value = val[1].substring(0, 2);
            if (value * 1 > 12)
                return preval.substring(0, preval.length - 1);
        }
        if (val.length == 3) {
            var value = val[2].substring(0, 2);
            if (value * 1 > 31)
                return preval.substring(0, preval.length - 1);
        }
        
        val2 = ''
        for (r = 0; r < val.length; r++) {
            val2 += val[r]
        }
        if (nums) {
            for (z = 0; z < val2.length; z++) {
                if (isNaN(val2.charAt(z))) {
                    letra = new RegExp(val2.charAt(z), "g")
                    val2 = val2.replace(letra, "")
                }
            }
        }
        val = ''
        val3 = new Array()
        for (s = 0; s < pat.length; s++) {
            val3[s] = val2.substring(0, pat[s])
            val2 = val2.substr(pat[s])
        }
        
        for (q = 0; q < val3.length; q++) {
            if (q == 0) {
                val = val3[q]
            }
            else {
                if (val3[q] != "") {
                    val += sep + val3[q]
                }
            }
        }
        
        return val;
    }

});