appServersoft.directive('d2Dropdownoptionset', function(){
	return{
		restrict: 'E',
		templateUrl: '/directives/optionSet/optionsetView.html',
		scope: {
		      nameList:'@'
		    }
	}
	}); 
appServersoft.controller("hsDropdownOptionSetController", ['$scope','Optionset',"commonvariable", function ($scope,Optionset,commonvariable) {
	$scope.findOptionbyName = function(nameOs) {
			return Optionset.get({uid:$scope.nameList})
			.$promise.then(function(response){
				return  response.options;
			 })};
	$scope.onSelect = function ($item, $model, $label) {
			commonvariable.Optionset[$scope.nameList] = $item;
		   };

}]);