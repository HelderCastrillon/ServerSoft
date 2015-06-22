appServersoft.controller('healthprofessionalController', ['$scope','commonvariable', function($scope,commonvariable){
	
	//Data Object
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

	$scope.DataPersonalAdd={
		hpdEstcon:"",
		hpdpaisred:"",
		hpddepred:"",
		hpdmunred:"",
		hpddirecc:"",
		hpdtelef:"",
		hpdtelmov:"",
		hpdcorreo:""
	};

	$scope.Study={
		hpeorigtit:"",
		hpedepin:"",
		hpemunin:"",
		hpepaisin:"",
		hpetipin:"",
		hpecodin:"",
		hpetippr:"",
		hpenompr:"",
		hpefecgrad:"",
		hpenumconv:"",
		hpefecconv:"",
		hpetitequi:"",
		hpegruptit:"",
		hpeactoadm:"",
		hpefecact:""
	};
	$scope.Studies=[];

	$scope.obligService={
		hpsobliga:"",
		hpstiplug:"",
		hpsdeppr:"",
		hpsmunpr:"",
		hpspaispr:"",
		phsfecini:"",
		hpsfecfin:"",
		hpsmodal:"",
		hpsprog:""
	}
	
	$scope.colombiano=true;
	$scope.nacionalidad=function(est){
		$scope.colombiano=est;
		console.log(est);
	}
   // Date datepicker
  $scope.today = function() {
    datetoday = new Date();
    $scope.currentDate=datetoday.getFullYear()+"-"+(datetoday.getMonth()<=9?"0"+datetoday.getMonth():datetoday.getMonth())+"-"+(datetoday.getDate()<=9?"0"+datetoday.getDate():datetoday.getDate());
  	$scope.DataPersonal.hpfecnac=$scope.currentDate;
  };
  $scope.today();

  $scope.clear = function () {
    $scope.DataPersonal.hpfecnac = null;
  };

   $scope.open = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.opendDate = true;
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
   		case 2: 
   			$scope.DataPersonalAdd.hpdEstcon=commonvariable.OptionSetSelected.conyugal.key;
   			break;
  		case 3: break;
  		case 4: break;
  	}


  	console.log($scope.DataPersonalAdd);
  	
  };
    
}]);
