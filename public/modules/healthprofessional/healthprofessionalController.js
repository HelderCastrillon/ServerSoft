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
		hptoken:"1"
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
///////////////////////////////////////////////////////////////////

//Data Object
	$scope.ValidationField={
		hptipdoc:{msg:"Seleccione el tipo un tipo de documento",tipval:"S",active:false},
		hpnumdoc:{msg:"Escriba su numero documento",tipval:"W",active:false},
		hppriape:{msg:"Escriba su primer apellido",tipval:"W",active:false},
		hpsegape:{msg:"Escriba su segundo apellido",tipval:"W",active:false},
		hpprinom:{msg:"Escriba su primer nombre",tipval:"W",active:false},
		hpsegnom:{msg:"Escriba su segundo nombre",tipval:"W",active:false},
		hpsexo:{msg:"seleccione su sexo",tipval:"S",active:false},
		hpdepnac:{msg:"Seleccione su departamento de nacimiento",tipval:"S",active:false},
		hpmunnac:{msg:"Seleccione su municipio de nacimiento",tipval:"S",active:false},
		hppais:{msg:"Seleccione su pais de nacimiento si no es colombiano, de lo contrario seleccione que es colombiano",tipval:"S",active:false},
		hpfecnac:{msg:"Escriba o seleccione la fecha de nacimiento",tipval:"D",active:false},
		hpetnia:{msg:"Debe seleccionar su etnia, o en su defecto la opción que dice 'ninguna de las anteriores'",tipval:"S",active:false},
		hptoken:{msg:"Token aun no asignado",tipval:"W",active:false},
		hpdEstcon:{msg:"Seleccione su estado conyugal",tipval:"S",active:false},
		hpdpaisred:{msg:"Seleccione su pais de residencia si no Colombia, de lo contrario seleccione que vive en Colombia",tipval:"S",active:false},
		hpddepred:{msg:"Seleccione su departamento de residencia",tipval:"S",active:false},
		hpdmunred:{msg:"Seleccione su municipio de residencia",tipval:"S",active:false},
		hpddirecc:{msg:"Escriba la dirección donde usted vive",tipval:"W",active:false},
		hpdtelef:{msg:"Escriba si telefono fijo de contacto",tipval:"N",active:false},
		hpdtelmov:{msg:"Escriba su telefono celular de contacto",tipval:"N",active:false},
		hpdcorreo:{msg:"escriba su correo electronico correctamente",tipval:"M",active:false},
		hpeorigtit:{msg:"Seleccione su titulo d origen",tipval:"M",active:false},
		hpedepin:{msg:"Seleccione el departamento donde se encuentra el instituto donde estudió",tipval:"S",active:false},
		hpemunin:{msg:"Seleccione el municipio donde se encuentra el instituto donde estudió",tipval:"S",active:false},
		hpepaisin:{msg:"Seleccione el Pais donde se encuentra el instituto donde estudió, si estudió en Colombia seleccione que el origen es Colombia",tipval:"S",active:false},
		hpetipin:{msg:"Seleccione el tipo de institución donde vivió",tipval:"S",active:false},
		hpecodin:{msg:"Seleccione la institución donde estudió",tipval:"S",active:false},
		hpetippr:{msg:"Seleccione el tipo de programa",tipval:"S",active:false},
		hpenompr:{msg:"Seleccione el programa que estudió",tipval:"S",active:false},
		hpefecgrad:{msg:"Seleccione o escriba la fecha de grado",tipval:"D",active:false},
		hpenumconv:{msg:"escriba el numero de la convocatoria con la cual hizo la homologación de sus estudios",tipval:"N",active:false},
		hpefecconv:{msg:"Seleccione o escriba la fecha de la convocatoria",tipval:"D",active:false},
		hpetitequi:{msg:"Escriba el titulo equivalente",tipval:"W",active:false},
		hpegruptit:{msg:"Escriba el grupo al que pertenece el titulo",tipval:"W",active:false},
		hpeactoadm:{msg:"Escriba el acto administrativo",tipval:"W",active:false},
		hpefecact:{msg:"Seleccione o escriba la fecha de grado",tipval:"D",active:false},
		hpsobliga:{msg:"Seleccione si realizó su Servicio Social Obligtorio",tipval:"S",active:false},
		hpstiplug:{msg:"Seleccione el tipo de lugar donde realizó su Servicio Social Obligatorio",tipval:"S",active:false},
		hpsdeppr:{msg:"Seleccione el departamento donde realizó su Servicio Social Obligatorio",tipval:"S",active:false},
		hpsmunpr:{msg:"Seleccione el municipio de lugar donde realizó su Servicio Social Obligatorio",tipval:"S",active:false},
		hpspaispr:{msg:"Seleccione el pais donde realizó su Servicio Social Obligatorio, si es en Colombia debe selecciona 'en Colombia'",tipval:"S",active:false},
		phsfecini:{msg:"Seleccione O escriba la fecha en que inició su Servicio Social Obligatorio",tipval:"D",active:false},
		hpsfecfin:{msg:"Seleccione O escriba la fecha en que finalizó su Servicio Social Obligatorio",tipval:"D",active:false},
		hpsmodal:{msg:"Seleccione la modalidad n que realizó su Servicio Social Obligatorio",tipval:"S",active:false},
		hpsprog:{msg:"Seleccione O escriba un programa con el cual realizó su Servicio Social Obligatorio",tipval:"S",active:false}
	};


///////////////////////////////////////////////////////////////////

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
  	$scope.tabsPersonalE = {tittle:$translate('PROF_TAB_ERROR'),active:false,disabled:true};
  	$scope.tabsPersonal0 = {tittle:$translate('PROF_TAB_INTRO'),active:true,disabled:false};
	$scope.tabsPersonal1 = {tittle:$translate('PROF_TAB_PERSONAL'),active:false,disabled:true};
	$scope.tabsPersonal2 = {tittle:$translate('PROF_TAB_PERSONALADD'),active:false,disabled:true};
	$scope.tabsPersonal3 = {tittle:$translate('PROF_TAB_STUDY'),active:false,disabled:true};
	$scope.tabsPersonal4 = {tittle:$translate('PROF_TAB_SERVICE'),active:false,disabled:true};
	$scope.tabsPersonal5 = {tittle:$translate('PROF_TAB_RESUME'),active:false,disabled:true};

  $scope.next=function(NumTab){
  	
   	switch(NumTab){
  		case 0:
  			$scope.nextagree=1;
  			$scope.tabsPersonal1.active = true;
  			break;
  		case 1:
  			$scope.tabsPersonal2.active = true;
  			$scope.DataPersonal.hptipdoc=(commonvariable.OptionSetSelected.tipdoc!=undefined)?commonvariable.OptionSetSelected.tipdoc.key:"";
  			$scope.DataPersonal.hpsexo=(commonvariable.OptionSetSelected.sexo!=undefined)?commonvariable.OptionSetSelected.sexo.key:"";
  			$scope.DataPersonal.hpetnia=(commonvariable.OptionSetSelected.etnia!=undefined)?commonvariable.OptionSetSelected.etnia.key:"";
  			break;
   		case 2: 
   			$scope.tabsPersonal3.active = true;
   			$scope.DataPersonalAdd.hpdEstcon=commonvariable.OptionSetSelected.conyugal.key;
   			break;
  		case 3:
  			$scope.tabsPersonal4.active = true;
  			break;
  		case 4:
  			$scope.tabsPersonal5.active = true;
  		 	break;
  	}
  	console.log($scope.ValidationField);
  	//$scope.validation(NumTab+1);

 	
  };

 $scope.alerts = [];

  $scope.addAlert = function(menssage) {
    $scope.alerts.push({msg: menssage});
  };

$scope.closeAlert = function(index) {
    $scope.alerts.splice(index, 1);
  };


  $scope.returnTab=function(NumTab){
   	switch(NumTab){
  		case 0:
  			$scope.tabsPersonal0.active = true;
  			break;
  		case 1:
  			$scope.tabsPersonal1.active = true; 			
  			break;
   		case 2: 
   			$scope.tabsPersonal2.active = true;
   			break;
  		case 3:
  			$scope.tabsPersonal3.active = true;
  			break;
  		case 4:
  			$scope.tabsPersonal4.active = true;
  		 	break;
  	}

  };

$scope.validationtype=function(type,value, msg){
	var alertini=$scope.alerts.length;
	switch(type){
		case 'S'://seleccion
			if(value==""||value==undefined){
				$scope.addAlert(msg);			
			}
		break;
		case 'W'://texto
			if(value==""||value==undefined){
				$scope.addAlert(msg);
			}
		break;
		case 'N'://numeros
			if(isNaN(value)){
				$scope.addAlert(msg);
			}
		break;
		case 'D'://fecha
			if(value.split("-").length!=3){
				$scope.addAlert(msg);
			}
		break;
		case 'M'://correo
			patron=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
			if(value.search(patron)!=0){
				$scope.addAlert(msg);
			}
		break;

		};

		if($scope.alerts.length>alertini)
			return true;
		else
			return false;

}
 $scope.validation=function(NumTab){
 	 $scope.alerts = [];
  	switch(NumTab){
  		case 0:
  			break;
  		case 1:
  			if($scope.conditionacepted==undefined||$scope.conditionacepted==0){
  				$scope.addAlert("Si desea continuar debe aceptar los terminos");  				
  				$scope.tabReturn=0;	
  			}
  			break;
   		case 2:
 			angular.forEach($scope.DataPersonal,function(value,key){
 				var revaltype=$scope.validationtype($scope.ValidationField[key].tipval,value,$scope.ValidationField[key].msg);
 				$scope.ValidationField[key].active=revaltype;		 
 			});
   			$scope.tabReturn=1;	
   			break;
  		case 3:

  			break;
  		case 4:

  		 	break;
  	}
  	if($scope.alerts.length)  	
  		$scope.tabsPersonalE.active = true;
	
  };

    
}]);
