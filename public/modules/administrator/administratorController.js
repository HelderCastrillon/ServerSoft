appServersoft.controller('administratorController', ['$scope','$filter','HealthProfessional', function($scope,$filter,HealthProfessional){
HealthProfessional.get()
				.$promise.then(function(response){
					$scope.ListProfessional=response;
				});


	$scope.openAditionalInfo=function(id){
		console.log(id);
	}
}]);