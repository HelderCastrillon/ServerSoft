appServersoft.controller('healthprofessionalController', ['$scope','$filter','commonvariable', function($scope,$filter,commonvariable){
	
	var $translate = $filter('translate');

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

  $scope.agreeinformation=function(){
  	$scope.conditionacepted=!$scope.conditionacepted;
  }
  	$scope.tabsPersonal0 = {tittle:$translate('PROF_TAB_INTRO'),active:true,disabled:false};
	$scope.tabsPersonal1 = {tittle:$translate('PROF_TAB_PERSONAL'),active:false,disabled:true};
	$scope.tabsPersonal2 = {tittle:$translate('PROF_TAB_PERSONALADD'),active:false,disabled:true};
	$scope.tabsPersonal3 = {tittle:$translate('PROF_TAB_STUDY'),active:false,disabled:true};
	$scope.tabsPersonal4 = {tittle:$translate('PROF_TAB_SERVICE'),active:false,disabled:true};
	$scope.tabsPersonal5 = {tittle:$translate('PROF_TAB_RESUME'),active:false,disabled:true};

  $scope.next=function(NumTab){
  	
  	var resp=$scope.validation(NumTab);

  	if(resp==0)
  		return 0; //s sale
  	else
  		return 1

  	switch(NumTab){
  		case 0:
  			$scope.tabsPersonal1.active = true;
  			break;
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

 $scope.alerts = [];

  $scope.addAlert = function(menssage) {
    $scope.alerts.push({msg: menssage});
  };

$scope.closeAlert = function(index) {
    $scope.alerts.splice(index, 1);
  };

 $scope.validation=function(NumTab){
 	var msg;
  	switch(NumTab){
  		case 0:
  			break;
  		case 1:
  			if($scope.conditionacepted==undefined||$scope.conditionacepted==0)
  				msg="Si desea continuar debe aceptar los terminos";		
  			break;
   		case 2: 

   			break;
  		case 3:

  			break;
  		case 4:

  		 	break;
  	}
  	if(msg){
  		addAlert(msg);
  		return 0;
  	}
  	else
  		return 1	



 	
  };

    
}]);
