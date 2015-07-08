appServersoft.directive('d2Dropdownoptionset', function(){
	return{
		restrict: 'E',
		templateUrl: '/directives/optionSet/optionsetView.html',
		scope: {
		     tittleoption:'@',
		     resource:'@',
		     parent:'@'
		    }
	}
	}); 
appServersoft.controller("hsDropdownOptionSetController", ['$scope','CountryList',"commonvariable", function ($scope,CountryList,commonvariable) {
	$scope.findOptionbyName = function(nameOs) {
			if($scope.parent)
				$scope.level=commonvariable.OptionSetSelected[$scope.parent].code;
			else
				$scope.level=undefined;
			return CountryList.get({name:nameOs,resource:$scope.resource,level:$scope.level})
			.$promise.then(function(response){
				return  response;
			 })};
	$scope.onSelect = function ($item, $model, $label) {
			commonvariable.OptionSetSelected[$scope.tittleoption]=$item;
		   };

}]);