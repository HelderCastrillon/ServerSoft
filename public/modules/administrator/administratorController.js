appServersoft.controller('administratorController', ['$scope','$filter','$modal','HealthProfessional','HealthProfessionalStudy', function($scope,$filter,$modal,HealthProfessional,HealthProfessionalStudy){
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
	HealthProfessionalStudy.put({pid:$scope.Study.hpesid},$scope.Study)
			.$promise.then(function(responseSt){
				if(responseSt.status=="SUCCESS"){
						
				}
			}

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
    	console.log(DataSave);
    }, function () {
      
    });
  };



}]);

appServersoft.controller('ModalInstanceRegisterActo', function ($scope, $modalInstance, hpid) {
  	$scope.hpid = hpid;
   $scope.ok = function () {
   	$modalInstance.close({numActo:$scope.numActo,fecActo:$scope.fecActo});
  };
  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});