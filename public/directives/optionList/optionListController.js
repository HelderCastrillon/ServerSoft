ServersoftApi.directive('hsOptionlist', function(){
	return{
		restrict: 'E',
		templateUrl: '/directives/optionList/optionListView.html',
		scope: {
		      namelist:'@namelist',
		      preload:'@preload'
		    }
	}
	}); 
ServersoftApi.controller("hsOptionListController", ['$scope','$http', 'enumList',"commonvariable",function ($scope, $http,enumList,commonvariable) {
		

		enumList.get({"nlist":$scope.namelist})
		.$promise.then(function(response){
				$scope.ListData = response;				
			 });

		$scope.selectData = function(opSelected){
			commonvariable.OptionSetSelected[$scope.namelist]=opSelected;
			$scope.OptionName=opSelected.value;
		}

		$scope.$watch(
			function($scope){
				if($scope.preload){
					angular.forEach($scope.ListData, function(value,key){

						if($scope.preload==value.key){
							$scope.selectData(value);
						}

					});
				}
			
			});


}]);