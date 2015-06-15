appServersoft.controller('healthprofessionalController', ['$scope','commonvariable', function($scope,commonvariable){
	
	$scope.DataPersonal={
		hptipdoc:"",
		hpnumdoc:"",
		hppriape:"",
		hpsegape:"",
		hpprinom:"",
		hpsegnom:"",
		hpsexo:"",
		hpdepnac:"",
		hpmunnac:"",
		hppais:"",
		hpfecnac:"",
		hpetnia:"",
		hptoken:""
	};

	  $scope.open = function($event) {
	    $event.preventDefault();
	    $event.stopPropagation();
	    $scope.opened = true;
	  };

	$scope.tabsPersonal = [{"0":[{disabled:false}]},
 						{"1":[{disabled:false}]},
 						{"2":[{disabled:false}]},
 						{"3":[{disabled:false}]},
 						{"4":[{disabled:false}]}
 ];

  $scope.next=function(NumTab){
  	$scope.tabsPersonal[NumTab][NumTab].active = true;
  	switch(NumTab){
  		case 1:
  			$scope.DataPersonal.hptipdoc=commonvariable.OptionSetSelected.tipdoc.key;
  			$scope.DataPersonal.hpsexo=commonvariable.OptionSetSelected.sexo.key;
  			$scope.DataPersonal.hpetnia=commonvariable.OptionSetSelected.etnia.key;
  			break;
   		case 2: break;
  		case 3: break;
  		case 4: break;
  	}


  	console.log($scope.DataPersonal);
  	
  };
    
}]);
