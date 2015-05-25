Dhis2Api.directive('d2Dropdownoptionset', function(){
	return{
		restrict: 'E',
		templateUrl: 'directives/optionSet/optionsetView.html',
		scope: {
		      uidoption: '@'
		    }
	}
	}); 
Dhis2Api.controller("d2DropdownOptionSetController", ['$scope','Optionset',"commonvariable", function ($scope,Optionset,commonvariable) {
	console.log($scope.uidoption);
	$scope.findOptionbyName = function(nameOs) {
			return Optionset.get({uid:$scope.uidoption})
			.$promise.then(function(response){
				return  response.options;
			 })};
	$scope.onSelect = function ($item, $model, $label) {
			commonvariable.Optionset[$scope.uidoption] = $item;
		   };

}]);