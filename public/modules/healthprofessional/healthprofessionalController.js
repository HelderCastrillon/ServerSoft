appServersoft.controller('healthprofessionalController', ['$scope','$filter','commonvariable','$modal', function($scope,$filter,commonvariable,$modal){
	
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
		hptipdoc:{label:"Tipo documento",msg:"Seleccione un tipo de documento",tipval:"S",active:false,mandatory:true},
		hpnumdoc:{label:"Numero de documento",msg:"Escriba un numero documento valido",tipval:"N",active:false,mandatory:true},
		hppriape:{label:"Primer apellido",msg:"Escriba su primer apellido",tipval:"W",active:false,mandatory:true},
		hpsegape:{label:"Segundo apellido",msg:"Escriba su segundo apellido",tipval:"W",active:false,mandatory:false},
		hpprinom:{label:"Primer nombre",msg:"Escriba su primer nombre",tipval:"W",active:false,mandatory:true},
		hpsegnom:{label:"Segundo nombre",msg:"Escriba su segundo nombre",tipval:"W",active:false,mandatory:false},
		hpsexo:{label:"Sexo",msg:"seleccione su sexo",tipval:"S",active:false,mandatory:true},
		hpdepnac:{label:"Departamento donde nació",msg:"Seleccione su departamento de nacimiento",tipval:"S",active:false,mandatory:true},
		hpmunnac:{label:"Municipio donde nació",msg:"Seleccione su municipio de nacimiento",tipval:"S",active:false,mandatory:true},
		hppais:{label:"Pais donde nació",msg:"Seleccione su pais de nacimiento si no es colombiano, de lo contrario seleccione que es colombiano",tipval:"S",active:false,mandatory:true},
		hpfecnac:{label:"Fecha de nacimiento",msg:"Escriba o seleccione la fecha de nacimiento",tipval:"D",active:false,mandatory:true},
		hpetnia:{label:"Grupo Etnico",msg:"Debe seleccionar su etnia, o en su defecto la opción que dice 'ninguna de las anteriores'",tipval:"S",active:false,mandatory:true},
		hptoken:{label:"token",msg:"Token aun no asignado",tipval:"W",active:false,mandatory:true},
		hpdEstcon:{label:"Estado Conyugal",msg:"Seleccione su estado conyugal",tipval:"S",active:false,mandatory:true},
		hpdpaisred:{label:"Pais de recidencia",msg:"Seleccione su pais de residencia si no es Colombia, de lo contrario seleccione que vive en Colombia",tipval:"S",active:false,mandatory:true},
		hpddepred:{label:"Departamento de Residencia",msg:"Seleccione su departamento de residencia",tipval:"S",active:false,mandatory:true},
		hpdmunred:{label:"Municipio de residencia",msg:"Seleccione su municipio de residencia",tipval:"S",active:false,mandatory:true},
		hpddirecc:{label:"Dirección de residencia",msg:"Escriba la dirección donde usted vive",tipval:"W",active:false,mandatory:true},
		hpdtelef:{label:"Telefono Fijo",msg:"Escriba si telefono fijo de contacto",tipval:"N",active:false,mandatory:false},
		hpdtelmov:{label:"Telefono celular",msg:"Escriba un telefono celular de contacto valido",tipval:"N",active:false,mandatory:false},
		hpdcorreo:{label:"Correo Electronico",msg:"escriba un correo electronico valido",tipval:"M",active:false,mandatory:true},
		hpeorigtit:{label:"Origen del titulo",msg:"Seleccione su titulo de origen",tipval:"M",active:false,mandatory:true},
		hpedepin:{label:"Departamento donde estudió",msg:"Seleccione el departamento donde se encuentra el instituto donde estudió",tipval:"S",active:false,mandatory:true},
		hpemunin:{label:"Municipio donde Estudió",msg:"Seleccione el municipio donde se encuentra el instituto donde estudió",tipval:"S",active:false,mandatory:true},
		hpepaisin:{label:"Pais donde estudió",msg:"Seleccione el Pais donde se encuentra el instituto donde estudió, si estudió en Colombia seleccione que el origen es Colombia",tipval:"S",active:false,mandatory:true},
		hpetipin:{label:"Tipo de institución",msg:"Seleccione el tipo de institución donde estudió",tipval:"S",active:false,mandatory:true},
		hpecodin:{label:"Institución donde estudió",msg:"Seleccione la institución donde estudió",tipval:"S",active:false,mandatory:true},
		hpetippr:{label:"Tipo de programa que estudió",msg:"Seleccione el tipo de programa",tipval:"S",active:false,mandatory:true},
		hpenompr:{label:"Programa que estudió",msg:"Seleccione el programa que estudió",tipval:"S",active:false,mandatory:true},
		hpefecgrad:{label:"Fecha de grado",msg:"Seleccione o escriba la fecha de grado",tipval:"D",active:false,mandatory:true},
		hpenumconv:{label:"Numero de convocatoria",msg:"escriba el numero de la convocatoria con la cual hizo la homologación de sus estudios",tipval:"N",active:false,mandatory:true},
		hpefecconv:{label:"Fecha de la convocatoria",msg:"Seleccione o escriba la fecha de la convocatoria",tipval:"D",active:false,mandatory:true},
		hpetitequi:{label:"Titulo equivalente",msg:"Escriba el titulo equivalente",tipval:"W",active:false,mandatory:true},
		hpegruptit:{label:"Grupo al que pertenece el titulo",msg:"Escriba el grupo al que pertenece el titulo",tipval:"W",active:false,mandatory:true},
		hpeactoadm:{label:"Acto administrativo",msg:"Escriba el acto administrativo",tipval:"W",active:false,mandatory:true},
		hpefecact:{label:"Fecha de grado",msg:"Seleccione o escriba la fecha de grado",tipval:"D",active:false,mandatory:true},
		hpsobliga:{label:"Realizó su Servicio Social Obligtorio",msg:"Seleccione si realizó su Servicio Social Obligtorio",tipval:"S",active:false,mandatory:true},
		hpstiplug:{label:"Lugar",msg:"Seleccione el tipo de lugar donde realizó su Servicio Social Obligatorio",tipval:"S",active:false,mandatory:true},
		hpsdeppr:{label:"Departamento",msg:"Seleccione el departamento donde realizó su Servicio Social Obligatorio",tipval:"S",active:false,mandatory:true},
		hpsmunpr:{label:"Municipio",msg:"Seleccione el municipio de lugar donde realizó su Servicio Social Obligatorio",tipval:"S",active:false,mandatory:true},
		hpspaispr:{label:"Pais",msg:"Seleccione el pais donde realizó su Servicio Social Obligatorio, si es en Colombia debe selecciona 'en Colombia'",tipval:"S",active:false,mandatory:true},
		phsfecini:{label:"Fecha inicio",msg:"Seleccione o escriba la fecha en que inició su Servicio Social Obligatorio",tipval:"D",active:false,mandatory:true},
		hpsfecfin:{label:"Fecha fin",msg:"Seleccione o escriba la fecha en que finalizó su Servicio Social Obligatorio",tipval:"D",active:false,mandatory:true},
		hpsmodal:{label:"Modalidad",msg:"Seleccione la modalidad n que realizó su Servicio Social Obligatorio",tipval:"S",active:false,mandatory:true},
		hpsprog:{label:"Programa",msg:"Seleccione o escriba un programa con el cual realizó su Servicio Social Obligatorio",tipval:"S",active:false,mandatory:true}
	};


///////////////////////////////////////////////////////////////////

	$scope.colombiano=[];
	$scope.colombiano['nacionalidad']=0;
	$scope.colombiano['residencia']=0;
	$scope.nacionalidad=function(est,name,pdmc){
		var pdm = pdmc.split(',');
		$scope.colombiano[name]=est;
		if(est==0){
			commonvariable.OptionSetSelected[pdm[0]]={code:'170'};

		}else{			
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
			commonvariable.OptionSetSelected[pdm[0]]={code:'170'};
		}
		else{
			commonvariable.OptionSetSelected[pdm[1]]={code:'00'};
			commonvariable.OptionSetSelected[pdm[2]]={code:'000'};
		}

	$scope.estudios(1,'paisin,departamentoin,municipioin');

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
			$scope.DataPersonal.hppais=(commonvariable.OptionSetSelected.pais!=undefined)?commonvariable.OptionSetSelected.pais.code:"";
  			break;
   		case 2: 
   			$scope.tabsPersonal3.active = true;
   			$scope.DataPersonalAdd.hpdEstcon=(commonvariable.OptionSetSelected.conyugal!=undefined)?commonvariable.OptionSetSelected.conyugal.key:"";
   			$scope.DataPersonalAdd.hpdpaisred=(commonvariable.OptionSetSelected.paisred!=undefined)?commonvariable.OptionSetSelected.paisred.code:"";
			$scope.DataPersonalAdd.hpddepred=(commonvariable.OptionSetSelected.departamentored!=undefined)?commonvariable.OptionSetSelected.departamentored.code:"";
			$scope.DataPersonalAdd.hpdmunred=(commonvariable.OptionSetSelected.municipiored!=undefined)?commonvariable.OptionSetSelected.municipiored.code:"";
			break;
  		case 3:
  			$scope.Study.hpedepin=(commonvariable.OptionSetSelected.departamentoin!=undefined)?commonvariable.OptionSetSelected.departamentoin.code:"";
			$scope.Study.hpemunin=(commonvariable.OptionSetSelected.municipioin!=undefined)?commonvariable.OptionSetSelected.municipioin.code:"";
			$scope.Study.hpepaisin=(commonvariable.OptionSetSelected.paisin!=undefined)?commonvariable.OptionSetSelected.paisin.code:"";
			$scope.Study.hpetipin=(commonvariable.OptionSetSelected.tipoinstitucion!=undefined)?commonvariable.OptionSetSelected.tipoinstitucion.key:"";
			$scope.Study.hpecodin=(commonvariable.OptionSetSelected.institution!=undefined)?commonvariable.OptionSetSelected.institution.code:"";
			$scope.Study.hpetippr=(commonvariable.OptionSetSelected.tipoprograma!=undefined)?commonvariable.OptionSetSelected.tipoprograma.key:"";
			$scope.Study.hpenompr=(commonvariable.OptionSetSelected.program!=undefined)?commonvariable.OptionSetSelected.program.code:"";
  			
  			$scope.tabsPersonal4.active = true;
  			break;
  		case 4:
  			$scope.tabsPersonal5.active = true;
  		 	break;
  	}
  	console.log($scope.DataPersonalAdd);

 	
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
			if(!/^([0-9])*$/.test(value) || (value=="")){
				$scope.addAlert(msg);
			}
		break;
		case 'D'://fecha
			var patron = /^\d{1,2}\-\d{1,2}\-\d{2,4}$/;
			if(patron.test(value) || (value=="")){
				$scope.addAlert(msg);
			}
		break;
		case 'M'://correo
			var patron=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
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
  		$scope.tabsPersonalE.active = true;
	
  };


 ///modal
 
$scope.items = ['item1', 'item2', 'item3'];

  $scope.animationsEnabled = true;

  $scope.openmodal = function (size) {

    var modalInstance = $modal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'ModalAlertValidation.html',
      controller: 'ModalInstanceAlert',
      size: size,
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      console.log('Modal dismissed at: ' + new Date());
    });
  };

  $scope.toggleAnimation = function () {
    $scope.animationsEnabled = !$scope.animationsEnabled;
  };

 /// 

    
}]);


appServersoft.controller('ModalInstanceAlert', function ($scope, $modalInstance, items) {

  $scope.items = items;
  $scope.selected = {
    item: $scope.items[0]
  };

  $scope.ok = function () {
    $modalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});