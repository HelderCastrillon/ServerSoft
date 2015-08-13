appServersoft.controller('administratorController', ['$scope','$filter','$modal','HealthProfessional','HealthProfessionalStudy','HealthProfessionalActo', function($scope,$filter,$modal,HealthProfessional,HealthProfessionalStudy,HealthProfessionalActo){
HealthProfessional.get()
				.$promise.then(function(response){
					$scope.ListProfessional=response;
				});


///////////
 ///modal
 
  $scope.animationsEnabled = true;


  //save Data

  $scope.SaveData = function(){

  	//data professional study
	HealthProfessionalActo.put({pid:$scope.Study.hpesid},$scope.Study)
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
    	$scope.SaveData({hpid:idUserRegistered},DataSave);
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
});