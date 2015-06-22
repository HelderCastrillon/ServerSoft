appServersoft.directive('d2Dropdownoptionset', function(){
	return{
		restrict: 'E',
		templateUrl: '/directives/optionSet/optionsetView.html',
		scope: {
		     tittleoption:'@'
		    }
	}
	}); 
appServersoft.controller("hsDropdownOptionSetController", ['$scope','CountryList',"commonvariable", function ($scope,CountryList,commonvariable) {
	$scope.findOptionbyName = function(nameOs) {
			return CountryList.get({name:nameOs})
			.$promise.then(function(response){
				return  response;
			 })};
	$scope.onSelect = function ($item, $model, $label) {
			commonvariable.OptionSetSelected[$scope.tittleoption]=$item;
		   };

}]);