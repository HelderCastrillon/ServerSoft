appServersoft.controller('healthprofessionalController', ['$scope','commonvariable', function($scope,commonvariable){
	
 $scope.tabsPersonal = [{"0":[{disabled:false}]},
 						{"1":[{disabled:false}]},
 						{"2":[{disabled:false}]},
 						{"3":[{disabled:false}]},
 						{"4":[{disabled:false}]}
 ];

  $scope.next=function(NumTab){
  	$scope.tabsPersonal[NumTab][NumTab].active = true;

  }
  $scope.alertMe = function() {
    setTimeout(function() {
      $window.alert('You\'ve selected the alert tab!');
    });
  };

  
}]);
