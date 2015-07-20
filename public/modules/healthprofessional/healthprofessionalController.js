appServersoft.controller('healthprofessionalController', ['$scope','$filter','commonvariable','$modal','HealthProfessional','HealthProfessionalDetail','HealthProfessionalStudy','HealthProfessionalService','HealthProfessionalId','md5', 'sendmailservice', function($scope,$filter,commonvariable,$modal,HealthProfessional,HealthProfessionalDetail,HealthProfessionalStudy,HealthProfessionalService,HealthProfessionalId,md5,sendmailservice){
	
	var $translate = $filter('translate');

	$scope.initData=function(){
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
			hpdestcon:"",
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
			hpecodpr:"",
			hpefecgrad:"",
			hpenumconv:"",
			hpefecconv:"",
			hpetitequi:"",
			hpegruptit:""

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


	};
$scope.initData();
///////////////////////////////////////////////////////////////////

//Data Object
	$scope.ValidationField={
		hptipdoc:{label:"Tipo documento",msg:"Seleccione un tipo de documento",tipval:"S",active:false,mandatory:true,list:{source:"tipdoc",field:"value"}},
		hpnumdoc:{label:"Numero de documento",msg:"Escriba un numero documento valido",tipval:"N",active:false,mandatory:true},
		hppriape:{label:"Primer apellido",msg:"Escriba su primer apellido",tipval:"W",active:false,mandatory:true},
		hpsegape:{label:"Segundo apellido",msg:"Escriba su segundo apellido",tipval:"W",active:false,mandatory:false},
		hpprinom:{label:"Primer nombre",msg:"Escriba su primer nombre",tipval:"W",active:false,mandatory:true},
		hpsegnom:{label:"Segundo nombre",msg:"Escriba su segundo nombre",tipval:"W",active:false,mandatory:false},
		hpsexo:{label:"Sexo",msg:"seleccione su sexo",tipval:"S",active:false,mandatory:true,list:{source:"sexo",field:"value"}},
		hpdepnac:{label:"Departamento donde nació",msg:"Seleccione su departamento de nacimiento",tipval:"S",active:false,mandatory:true,list:{source:"departamento",field:"name"}},
		hpmunnac:{label:"Municipio donde nació",msg:"Seleccione su municipio de nacimiento",tipval:"S",active:false,mandatory:true,list:{source:"municipio",field:"name"}},
		hppais:{label:"Pais donde nació",msg:"Seleccione su pais de nacimiento si no es colombiano, de lo contrario seleccione que es colombiano",tipval:"S",active:false,mandatory:true,list:{source:"pais",field:"name"}},
		hpfecnac:{label:"Fecha de nacimiento",msg:"Escriba o seleccione la fecha de nacimiento",tipval:"D",active:false,mandatory:true},
		hpetnia:{label:"Grupo Etnico",msg:"Debe seleccionar su etnia, o en su defecto la opción que dice 'ninguna de las anteriores'",tipval:"S",active:false,mandatory:true,list:{source:"etnia",field:"value"}},
		hptoken:{label:"token",msg:"Token aun no asignado",tipval:"W",active:false,mandatory:true},
		hpdestcon:{label:"Estado Conyugal",msg:"Seleccione su estado conyugal",tipval:"S",active:false,mandatory:true,list:{source:"conyugal",field:"value"}},
		hpdpaisred:{label:"Pais de recidencia",msg:"Seleccione su pais de residencia si no es Colombia, de lo contrario seleccione que vive en Colombia",tipval:"S",active:false,mandatory:true,list:{source:"paisred",field:"name"}},
		hpddepred:{label:"Departamento de Residencia",msg:"Seleccione su departamento de residencia",tipval:"S",active:false,mandatory:true,list:{source:"departamentored",field:"name"}},
		hpdmunred:{label:"Municipio de residencia",msg:"Seleccione su municipio de residencia",tipval:"S",active:false,mandatory:true,list:{source:"municipiored",field:"name"}},
		hpddirecc:{label:"Dirección de residencia",msg:"Escriba la dirección donde usted vive",tipval:"W",active:false,mandatory:true},
		hpdtelef:{label:"Telefono Fijo",msg:"Escriba si telefono fijo de contacto",tipval:"N",active:false,mandatory:false},
		hpdtelmov:{label:"Telefono celular",msg:"Escriba un telefono celular de contacto valido",tipval:"N",active:false,mandatory:false},
		hpdcorreo:{label:"Correo Electronico",msg:"escriba un correo electronico valido",tipval:"M",active:false,mandatory:true},
		hpeorigtit:{label:"Origen del titulo",msg:"Seleccione su titulo de origen",tipval:"S",active:false,mandatory:true,list:{source:"paisin",field:"name"}},
		hpedepin:{label:"Departamento donde estudió",msg:"Seleccione el departamento donde se encuentra el instituto donde estudió",tipval:"S",active:false,mandatory:true,list:{source:"departamentoin",field:"name"}},
		hpemunin:{label:"Municipio donde Estudió",msg:"Seleccione el municipio donde se encuentra el instituto donde estudió",tipval:"S",active:false,mandatory:true,list:{source:"municipioin",field:"name"}},
		hpepaisin:{label:"Pais donde estudió",msg:"Seleccione el Pais donde se encuentra el instituto donde estudió, si estudió en Colombia seleccione que el origen es Colombia",tipval:"S",active:false,mandatory:true,list:{source:"paisin",field:"name"}},
		hpetipin:{label:"Tipo de institución",msg:"Seleccione el tipo de institución donde estudió",tipval:"S",active:false,mandatory:true,list:{source:"tipoinstitucion",field:"value"}},
		hpecodin:{label:"Institución donde estudió",msg:"Seleccione la institución donde estudió",tipval:"S",active:false,mandatory:true,list:{source:"institution",field:"name"}},
		hpetippr:{label:"Tipo de programa que estudió",msg:"Seleccione el tipo de programa",tipval:"S",active:false,mandatory:true,list:{source:"tipoprograma",field:"value"}},
		hpecodpr:{label:"Programa que estudió",msg:"Seleccione el programa que estudió",tipval:"S",active:false,mandatory:true,list:{source:"program",field:"name"}},
		hpefecgrad:{label:"Fecha de grado",msg:"Seleccione o escriba la fecha de grado",tipval:"D",active:false,mandatory:true},
		hpenumconv:{label:"Numero de convocatoria",msg:"escriba el numero de la convocatoria con la cual hizo la homologación de sus estudios",tipval:"N",active:false,mandatory:true},
		hpefecconv:{label:"Fecha de la convocatoria",msg:"Seleccione o escriba la fecha de la convocatoria",tipval:"D",active:false,mandatory:true},
		hpetitequi:{label:"Titulo equivalente",msg:"Escriba el titulo equivalente",tipval:"W",active:false,mandatory:true},
		hpegruptit:{label:"Grupo al que pertenece el titulo",msg:"Escriba el grupo al que pertenece el titulo",tipval:"W",active:false,mandatory:true},
		hpeactoadm:{label:"Acto administrativo",msg:"Escriba el acto administrativo",tipval:"W",active:false,mandatory:true},
		hpefecact:{label:"Fecha de grado",msg:"Seleccione o escriba la fecha de grado",tipval:"D",active:false,mandatory:true},
		hpsobliga:{label:"Realizó su Servicio Social Obligtorio",msg:"Seleccione si realizó su Servicio Social Obligtorio",tipval:"S",active:false,mandatory:true,list:{source:"sso",field:"value"}},
		hpstiplug:{label:"Lugar",msg:"Seleccione el tipo de lugar donde realizó su Servicio Social Obligatorio",tipval:"S",active:false,mandatory:true,list:{source:"ssolugar",field:"value"}},
		hpsdeppr:{label:"Departamento",msg:"Seleccione el departamento donde realizó su Servicio Social Obligatorio",tipval:"S",active:false,mandatory:true,list:{source:"departamentoss",field:"name"}},
		hpsmunpr:{label:"Municipio",msg:"Seleccione el municipio de lugar donde realizó su Servicio Social Obligatorio",tipval:"S",active:false,mandatory:true,list:{source:"municipioss",field:"name"}},
		hpspaispr:{label:"Pais",msg:"Seleccione el pais donde realizó su Servicio Social Obligatorio, si es en Colombia debe selecciona 'en Colombia'",tipval:"S",active:false,mandatory:true,list:{source:"paisss",field:"name"}},
		phsfecini:{label:"Fecha inicio",msg:"Seleccione o escriba la fecha en que inició su Servicio Social Obligatorio",tipval:"D",active:false,mandatory:true},
		hpsfecfin:{label:"Fecha fin",msg:"Seleccione o escriba la fecha en que finalizó su Servicio Social Obligatorio",tipval:"D",active:false,mandatory:true},
		hpsmodal:{label:"Modalidad",msg:"Seleccione la modalidad n que realizó su Servicio Social Obligatorio",tipval:"S",active:false,mandatory:true,list:{source:"modalidad",field:"value"}},
		hpsprog:{label:"Programa",msg:"Seleccione o escriba un programa con el cual realizó su Servicio Social Obligatorio",tipval:"S",active:false,mandatory:true,list:{source:"programa",field:"value"}}
	};


///////////////////////////////////////////////////////////////////

	$scope.colombiano=[];
	$scope.colombiano['nacionalidad']=0;
	$scope.colombiano['residencia']=0;
	$scope.nacionalidad=function(est,name,pdmc){
		var pdm = pdmc.split(',');
		$scope.colombiano[name]=est;
		if(est==0){
			commonvariable.OptionSetSelected[pdm[0]]={numericcode:'170', name:'COLOMBIA'};
			commonvariable.OptionSetSelected[pdm[1]]={code:''};
			commonvariable.OptionSetSelected[pdm[2]]={code:''};

		}else{			
			commonvariable.OptionSetSelected[pdm[0]]={numericcode:''};
			commonvariable.OptionSetSelected[pdm[1]]={code:'00'};
			commonvariable.OptionSetSelected[pdm[2]]={code:'000'};
		}
		
	}

	$scope.nacionalidad(0,'nacionalidad','pais,departamento,municipio');
	$scope.nacionalidad(0,'residencia','paisred,departamentored,municipiored');

	$scope.estudios=function(tip,pdmc){
		var pdm = pdmc.split(',');
		$scope.Study.hpeorigtit=tip;
		if(tip==1){
			commonvariable.OptionSetSelected[pdm[0]]={numericcode:'170', name:'COLOMBIA'};
			$scope.Study.hpenumconv='999999';
			$scope.Study.hpefecconv='1900-01-01';
			$scope.Study.hpetitequi='999999';
			$scope.Study.hpegruptit='999999';

			commonvariable.OptionSetSelected[pdm[1]]={code:''};
			commonvariable.OptionSetSelected[pdm[2]]={code:''};

			commonvariable.OptionSetSelected[pdm[3]]={key:''};
			commonvariable.OptionSetSelected[pdm[4]]={key:''};

			$scope.Study.hpecodin='';
			$scope.Study.hpecodpr='';
		}
		else{
			commonvariable.OptionSetSelected[pdm[1]]={code:'00'};
			commonvariable.OptionSetSelected[pdm[2]]={code:'000'};
			$scope.Study.hpecodin='0000';
			$scope.Study.hpecodpr='0000';
			
			commonvariable.OptionSetSelected[pdm[3]]={code:'0000'};
			commonvariable.OptionSetSelected[pdm[4]]={code:'0000'};

			commonvariable.OptionSetSelected[pdm[0]]={numericcode:''};
			$scope.Study.hpenumconv='';
			$scope.Study.hpefecconv='';
			$scope.Study.hpetitequi='';
			$scope.Study.hpegruptit='';
		}

	}
	$scope.estudios(1,'paisin,departamentoin,municipioin,institution,program');

	$scope.prestosso=function(tip,pdmc){
		var pdm = pdmc.split(',');
		$scope.obligService.hpsobliga=tip;

		if(tip=1){
			commonvariable.OptionSetSelected['sso']={key:tip,value:"SI"};

			$scope.obligService.hpstiplug='';
			commonvariable.OptionSetSelected[pdm[0]]={numericcode:''};
			commonvariable.OptionSetSelected[pdm[1]]={code:''};
			commonvariable.OptionSetSelected[pdm[2]]={code:''};
			$scope.obligService.phsfecini='',
			$scope.obligService.hpsfecfin='',
			$scope.obligService.hpsmodal='',
			$scope.obligService.hpsprog=''	
		}
		else{
			commonvariable.OptionSetSelected['sso']={key:tip,value:"NO"};

			$scope.obligService.hpstiplug=1;
			commonvariable.OptionSetSelected[pdm[0]]={numericcode:'000'};
			commonvariable.OptionSetSelected[pdm[1]]={code:'00'};
			commonvariable.OptionSetSelected[pdm[2]]={code:'000'};
			commonvariable.OptionSetSelected[pdm[3]]={key:'0'};
			commonvariable.OptionSetSelected[pdm[4]]={key:'0'};
			$scope.obligService.phsfecini='1900-01-01',
			$scope.obligService.hpsfecfin='1900-01-01',
			$scope.obligService.hpsmodal='0',
			$scope.obligService.hpsprog='0'	
		}

	}
	$scope.prestosso(1,'paisss,departamentoss,municipioss,modalidad,programa');

	$scope.lugarsso=function(tip,pdmc){
		var pdm = pdmc.split(',');
		$scope.obligService.hpstiplug=tip;
		if(tip==1){
			commonvariable.OptionSetSelected['ssolugar']={key:tip,value:"COLOMBIA"};
			commonvariable.OptionSetSelected[pdm[0]]={numericcode:'170', name:'COLOMBIA'};
			commonvariable.OptionSetSelected[pdm[1]]={code:''};
			commonvariable.OptionSetSelected[pdm[2]]={code:''};
			commonvariable.OptionSetSelected[pdm[3]]={key:'0'};
			commonvariable.OptionSetSelected[pdm[4]]={key:'0'};
		}
		else{
			commonvariable.OptionSetSelected['ssolugar']={key:tip,value:"EL EXTERIOR"};
			commonvariable.OptionSetSelected[pdm[0]]={numericcode:''};
			commonvariable.OptionSetSelected[pdm[1]]={code:'00'};
			commonvariable.OptionSetSelected[pdm[2]]={code:'000'};
			$scope.obligService.phsfecini='1900-01-01',
			$scope.obligService.hpsfecfin='1900-01-01'

		}

	}
	$scope.lugarsso(1,'paisss,departamentoss,municipioss,modalidad,programa');

   /////////// Date datepicker///////////////////////////////////
  $scope.today = function() {
    datetoday = new Date();
    $scope.currentDate=datetoday.getFullYear()+"-"+(datetoday.getMonth()<=9?"0"+datetoday.getMonth():datetoday.getMonth())+"-"+(datetoday.getDate()<=9?"0"+datetoday.getDate():datetoday.getDate());
  	$scope.DataPersonal.hpfecnac=$scope.currentDate;
  	$scope.Study.hpefecconv=$scope.currentDate;
  	$scope.Study.hpefecgrad=$scope.currentDate;
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

   $scope.openconv = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.opendDateConv = true;
  };

   $scope.openGrad = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.opendDateGrad = true;
  };

/////////////////////////////////////////////////////////


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
  			$scope.DataPersonal.hpdepnac=(commonvariable.OptionSetSelected.departamento!=undefined)?commonvariable.OptionSetSelected.departamento.code:"";
			$scope.DataPersonal.hpmunnac=(commonvariable.OptionSetSelected.municipio!=undefined)?commonvariable.OptionSetSelected.municipio.code:"";
			$scope.DataPersonal.hppais=(commonvariable.OptionSetSelected.pais!=undefined)?commonvariable.OptionSetSelected.pais.numericcode:"";
  			console.log($scope.DataPersonal);
  			break;
   		case 2: 
   			$scope.tabsPersonal3.active = true;
   			$scope.DataPersonalAdd.hpdestcon=(commonvariable.OptionSetSelected.conyugal!=undefined)?commonvariable.OptionSetSelected.conyugal.key:"";
   			$scope.DataPersonalAdd.hpdpaisred=(commonvariable.OptionSetSelected.paisred!=undefined)?commonvariable.OptionSetSelected.paisred.numericcode:"";
			$scope.DataPersonalAdd.hpddepred=(commonvariable.OptionSetSelected.departamentored!=undefined)?commonvariable.OptionSetSelected.departamentored.code:"";
			$scope.DataPersonalAdd.hpdmunred=(commonvariable.OptionSetSelected.municipiored!=undefined)?commonvariable.OptionSetSelected.municipiored.code:"";
			console.log($scope.DataPersonalAdd);
			break;
  		case 3:
  			$scope.tabsPersonal4.active = true;
  			$scope.Study.hpedepin=(commonvariable.OptionSetSelected.departamentoin!=undefined)?commonvariable.OptionSetSelected.departamentoin.code:"";
			$scope.Study.hpemunin=(commonvariable.OptionSetSelected.municipioin!=undefined)?commonvariable.OptionSetSelected.municipioin.code:"";
			$scope.Study.hpepaisin=(commonvariable.OptionSetSelected.paisin!=undefined)?commonvariable.OptionSetSelected.paisin.numericcode:"";
			$scope.Study.hpetipin=(commonvariable.OptionSetSelected.tipoinstitucion!=undefined)?commonvariable.OptionSetSelected.tipoinstitucion.key:"";
			$scope.Study.hpecodin=(commonvariable.OptionSetSelected.institution!=undefined)?commonvariable.OptionSetSelected.institution.code:"";
			$scope.Study.hpetippr=(commonvariable.OptionSetSelected.tipoprograma!=undefined)?commonvariable.OptionSetSelected.tipoprograma.key:"";
			$scope.Study.hpecodpr=(commonvariable.OptionSetSelected.program!=undefined)?commonvariable.OptionSetSelected.program.code:"";
  			console.log($scope.Study);
  			break;
  		case 4:
  			$scope.tabsPersonal5.active = true;
			$scope.obligService.hpsdeppr=(commonvariable.OptionSetSelected.departamentoss!=undefined)?commonvariable.OptionSetSelected.departamentoss.code:"";
			$scope.obligService.hpsmunpr=(commonvariable.OptionSetSelected.municipioss!=undefined)?commonvariable.OptionSetSelected.municipioss.code:"";
			$scope.obligService.hpspaispr=(commonvariable.OptionSetSelected.paisss!=undefined)?commonvariable.OptionSetSelected.paisss.numericcode:"";
			$scope.obligService.hpsmodal=(commonvariable.OptionSetSelected.modalidad!=undefined)?commonvariable.OptionSetSelected.modalidad.key:"";
			$scope.obligService.hpsprog=(commonvariable.OptionSetSelected.programa!=undefined)?commonvariable.OptionSetSelected.programa.key:"";
  			console.log($scope.obligService);

  			$scope.resume();			
  		 	break;
  	}
  	

 	
  };

 $scope.alerts = [];

  $scope.addAlert = function(menssage) {
    $scope.alerts.push({label:" ",msg: menssage});
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
			if(!/^([0-9])*$/.test(value) || (value=="")|| (value==undefined)){
				$scope.addAlert(msg);
			}
		break;
		case 'D'://fecha
			
			if(value!=undefined && value!=""){
							 	
				 try{
					 var fechaArr = value.split('-');
					 var aho = fechaArr[0];
					 var mes = fechaArr[1];
					 var dia = fechaArr[2];
					 
					 var plantilla = new Date(aho, mes - 1, dia);//mes empieza de cero Enero = 0
				}
				catch(err){
					var plantilla=value;
					 var aho = plantilla.getFullYear();
					 var mes = plantilla.getMonth()+1;
					 var dia = plantilla.getDate();
				}
				 if(!plantilla || plantilla.getFullYear() != aho || plantilla.getMonth() != (mes -1) || plantilla.getDate() != dia)
				 	$scope.addAlert(msg);				 
				}
			else
				$scope.addAlert(msg);

		break;
		case 'M'://correo
			var patron=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
			if(value.search(patron)!=0|| (value=="")|| (value==undefined)){
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
  			}
  			$scope.tabReturn=0;
  			break;
   		case 2:
 			angular.forEach($scope.DataPersonal,function(value,key){
 				if($scope.ValidationField[key].mandatory==true||($scope.ValidationField[key].mandatory==false && value!="")){
	 				var revaltype=$scope.validationtype($scope.ValidationField[key].tipval,value,$scope.ValidationField[key].msg);
	 				$scope.ValidationField[key].active=revaltype;
	 			}		 
 			});
 			$scope.tabReturn=1;
   			break;
  		case 3:
  			angular.forEach($scope.DataPersonalAdd,function(value,key){
 				if($scope.ValidationField[key].mandatory==true||($scope.ValidationField[key].mandatory==false && value!="")){
	 				var revaltype=$scope.validationtype($scope.ValidationField[key].tipval,value,$scope.ValidationField[key].msg);
	 				$scope.ValidationField[key].active=revaltype;
	 			}		 
 			});
 			$scope.tabReturn=2;
  			break;
  		case 4:
			angular.forEach($scope.Study,function(value,key){
 				if($scope.ValidationField[key].mandatory==true||($scope.ValidationField[key].mandatory==false && value!="")){
	 				var revaltype=$scope.validationtype($scope.ValidationField[key].tipval,value,$scope.ValidationField[key].msg);
	 				$scope.ValidationField[key].active=revaltype;
	 			}		 
 			});
 			$scope.tabReturn=3;
  		 	break;
  		 case 5:
			angular.forEach($scope.obligService,function(value,key){
 				if($scope.ValidationField[key].mandatory==true||($scope.ValidationField[key].mandatory==false && value!="")){
	 				var revaltype=$scope.validationtype($scope.ValidationField[key].tipval,value,$scope.ValidationField[key].msg);
	 				$scope.ValidationField[key].active=revaltype;
	 			}		 
 			});
 			$scope.tabReturn=4;
  		 	break;
  	}
  	if($scope.alerts.length)  	
  		$scope.openmodal();
	
  };


///////////

 $scope.resume=function(){
 	$scope.DataPersonalR=[];
 	$scope.DataPersonalAddR=[];
 	$scope.StudyR=[];
 	$scope.obligServiceR=[];
 	///data personal
 	angular.forEach($scope.DataPersonal,function(value,key){
			if($scope.ValidationField[key].tipval=='S')
 				value=commonvariable.OptionSetSelected[$scope.ValidationField[key].list.source][$scope.ValidationField[key].list.field];
 			$scope.DataPersonalR.push({label:$scope.ValidationField[key].label,value:value});	 			
   			});
 	///data personal add
 	angular.forEach($scope.DataPersonalAdd,function(value,key){
 			if($scope.ValidationField[key].tipval=='S')
 				value=commonvariable.OptionSetSelected[$scope.ValidationField[key].list.source][$scope.ValidationField[key].list.field];
 			$scope.DataPersonalAddR.push({label:$scope.ValidationField[key].label,value:value});	
 						 
 			});
 	//study
 	angular.forEach($scope.Study,function(value,key){
 			if($scope.ValidationField[key].tipval=='S')
 				value=commonvariable.OptionSetSelected[$scope.ValidationField[key].list.source][$scope.ValidationField[key].list.field];
 			$scope.StudyR.push({label:$scope.ValidationField[key].label,value:value});				 
 			});
 	//Obligatory Service social
 	angular.forEach($scope.obligService,function(value,key){
 			if($scope.ValidationField[key].tipval=='S')
 				value=commonvariable.OptionSetSelected[$scope.ValidationField[key].list.source][$scope.ValidationField[key].list.field];
 			$scope.obligServiceR.push({label:$scope.ValidationField[key].label,value:value});				 
 			});

 };

///////////
 ///modal
 
  $scope.animationsEnabled = true;

  $scope.openmodal = function (size) {

    var modalInstance = $modal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'ModalAlertValidation.html',
      controller: 'ModalInstanceAlert',
      backdrop:false,
      size: size,
      resolve: {
        alerts: function () {
          return $scope.alerts;
        }
      }
    });

    modalInstance.result.then(function () {
     	$scope.returnTab($scope.tabReturn);
    }, function () {
      
    });
  };


 ///  save Data i server
 $scope.sendforms=function(){

 	//generating md5 for token
 	$scope.DataPersonal.hptoken=md5.createHash($scope.DataPersonal.hpnumdoc || '');
 	$scope.DataPersonal.hptoken=$scope.DataPersonal.hptoken.substring(0, 5);
 	$scope.tokenForUser=$scope.DataPersonal.hptoken;
 	//data professional
 	
 	HealthProfessional.post($scope.DataPersonal)
			.$promise.then(function(responseHP){
				HealthProfessionalId.get({numdoc:$scope.DataPersonal.hpnumdoc})
				.$promise.then(function(responseId){

					$scope.DataPersonalAdd["hpid"]=responseId[0].hpid;
					$scope.Study["hpid"]=responseId[0].hpid;
					$scope.obligService["hpid"]=responseId[0].hpid;
					if(responseId[0].hpid){
					//data professional detail
				 	HealthProfessionalDetail.post($scope.DataPersonalAdd)
							.$promise.then(function(responseAdd){
								if(responseAdd.status=="SUCCESS"){
										//data professional study
						 			HealthProfessionalStudy.post($scope.Study)
									.$promise.then(function(responseSt){
										if(responseSt.status=="SUCCESS"){	
											//data professional service		
										 	HealthProfessionalService.post($scope.obligService)
													.$promise.then(function(responseSSO){
														if(responseSSO.status=="SUCCESS"){
															$scope.tokenPresentation();
														}
													 });
										}	

									 });
								}
							 });
					}
					


				});
			
			
			

 	 });



 };

 $scope.tokenPresentation=function(){
 	$scope.showtoken=true;
 	///send token by email
 	$scope.professionalFullName=$scope.DataPersonal.hppriape+" "+$scope.DataPersonal.hpsegape+" "+$scope.DataPersonal.hpprinom+" "+$scope.DataPersonal.hpsegnom;
	var messageForUser='<h3> Estimado Profesional de Salud : ' +$scope.professionalFullName+"</h3>";
	messageForUser+="<br> <h4> El presente correo es informativo y se le envía para notificarle que el proceso de registro se ha realizado exitosamente";
	messageForUser+="recuerde que usted debe entregar los documentos originales en la oficina de Registro de diplomas ubicada en la Secretaria de salud. </h4>";
	messageForUser+="<br> Cuando el proceso se encuentre completo serán notificado, también podrá verificar su estado a traves del portal XXX con el codigo de registro  "; 
	messageForUser+="<h3>Codigo de Registro</h3>"; 
	messageForUser+="<h2>"+$scope.tokenForUser+"</h2>"; 
	messageForUser+="<br> Si tiene alguna inquietud puede comunicarse con la oficina de registro de diplomas";
	messageForUser+="<br> gracias"; 

	///

	sendmailservice.post({},
		{to:$scope.DataPersonalAdd.hpdcorreo,
		toname:"Profesional - "+$scope.professionalFullName,
		fromname:'Sistema de Registro de profesional de Salud - Notificacion automatica',
		subject:'Correo informativo - Notificación de registro de Profesional en Salud',
		message:messageForUser
		});


 	//init data 
 	$scope.initData();
 	commonvariable.OptionSetSelected=[];
 	//

 };
    
}]);


appServersoft.controller('ModalInstanceAlert', function ($scope, $modalInstance, alerts) {

  $scope.alerts = alerts;
   $scope.ok = function () {
    $modalInstance.close();
  };
});