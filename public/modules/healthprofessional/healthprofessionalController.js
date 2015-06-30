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
		hpeorigtit:1,
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
		hpsobliga:1,
		hpstiplug:1,
		hpsdeppr:"",
		hpsmunpr:"",
		hpspaispr:"",
		phsfecini:"",
		hpsfecfin:"",
		hpsmodal:"",
		hpsprog:""
	}
	$scope.colombiano=[];
	$scope.colombiano['nacionalidad']=0;
	$scope.colombiano['residencia']=0;
	$scope.nacionalidad=function(est,name,pdmc){
		var pdm = pdmc.split(',');
		console.log(pdm)
		$scope.colombiano[name]=est;
		if(est==0){
			commonvariable.OptionSetSelected[pdm[0]]='170';

		}else{			
			commonvariable.OptionSetSelected[pdm[1]]='00';
			commonvariable.OptionSetSelected[pdm[2]]='000';
		}
		
	}

	$scope.estudios=function(tip){
		$scope.Study.hpeorigtit=tip;
		if(tip==1){

		}
		else{

		}

	}

	$scope.prestosso=function(tip){
		$scope.obligService.hpsobliga=tip;
		if(tip==1){

		}
		else{
			
		}

	}

	$scope.lugarsso=function(tip){
		$scope.obligService.hpstiplug=tip;
		if(tip==1){

		}
		else{
			
		}

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


  	$scope.tabsPersonal0 = [{active:true,disabled:false}];
	$scope.tabsPersonal1 = [{active:false,disabled:true}];
	$scope.tabsPersonal2 = [{active:false,disabled:true}];
	$scope.tabsPersonal3 = [{active:false,disabled:true}];
	$scope.tabsPersonal4 = [{active:false,disabled:true}];
	$scope.tabsPersonal5 = [{active:false,disabled:true}];

  $scope.next=function(NumTab){
  	$scope.tabsPersonal4[0].disabled=false
  	switch(NumTab){
  		case 1:
  			$scope.tabsPersonal1.active = true;

  			$scope.DataPersonal.hptipdoc=commonvariable.OptionSetSelected.tipdoc.key;
  			$scope.DataPersonal.hpsexo=commonvariable.OptionSetSelected.sexo.key;
  			$scope.DataPersonal.hpetnia=commonvariable.OptionSetSelected.etnia.key;
  			break;
   		case 2: 
   			$scope.tabsPersonal2.active = true;
   			$scope.DataPersonalAdd.hpdEstcon=commonvariable.OptionSetSelected.conyugal.key;
   			break;
  		case 3:
  			$scope.tabsPersonal3.active = true;
  			break;
  		case 4:
  			$scope.tabsPersonal4.active = true;
  		 	break;
  	}

 	
  };
    
}]);
