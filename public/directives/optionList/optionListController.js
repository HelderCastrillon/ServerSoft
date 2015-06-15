ServersoftApi.directive('hsOptionlist', function(){
	return{
		restrict: 'E',
		templateUrl: '/directives/optionList/optionListView.html',
		scope: {
		      namelist: '@namelist'
		    }
	}
	}); 
ServersoftApi.controller("hsOptionListController", ['$scope','$http', 'enumList',"commonvariable",function ($scope, $http,enumList,commonvariable) {
		$scope.ListData = enumList.get({"nlist":$scope.namelist});
		$scope.selectData = function(opSelected){
			commonvariable.OptionSetSelected[$scope.namelist]=opSelected;
			$scope.OptionName=opSelected.value;
		}
}]);