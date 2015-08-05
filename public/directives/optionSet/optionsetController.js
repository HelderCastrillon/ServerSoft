appServersoft.directive('d2Dropdownoptionset', function(){
	return{
		restrict: 'E',
		templateUrl: '/directives/optionSet/optionsetView.html',
		scope: {
		     tittleoption:'@',
		     resource:'@',
		     parent:'@',
		     preload:'@'
		    }
	}
	}); 
appServersoft.controller("hsDropdownOptionSetController", ['$scope','CountryList',"commonvariable", function ($scope,CountryList,commonvariable) {
	$scope.preloadEntered=false;
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


	$scope.$watch(
			function($scope){

				if($scope.preload && $scope.preloadEntered==false){
					$scope.preloadEntered=true;
					CountryList.get({name:$scope.preload,resource:$scope.resource+'byid'})
						.$promise.then(function(response){
							angular.forEach(response, function(value,key){
								commonvariable.OptionSetSelected[$scope.tittleoption]=value;
								$scope.optionsetSelected=value.name;
								return 1;
							});
							
				})};

		
			});
				   
}]);