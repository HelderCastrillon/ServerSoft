appServersoft.controller('administratorController', ['$scope','$filter','$modal','filesaver','HealthProfessional','HealthProfessionalStudy','HealthProfessionalActo','FindHealthProfessional', 'authentication','FindHealthProfessionalbyDate','HealthProfessionalDocument', function($scope,$filter,$modal,filesaver,HealthProfessional,HealthProfessionalStudy,HealthProfessionalActo, FindHealthProfessional,authentication, FindHealthProfessionalbyDate, HealthProfessionalDocument){
        ///verify session
        authentication.checkStatus();
        $scope.shutdown = function () { 
            authentication.logout();    
        }
        $scope.findPerson = function (valueToFind) {
            FindHealthProfessional.get({value:valueToFind})
				.$promise.then(function (response) {
                    $scope.ListProfessional = response;
            })
        }
        
        $scope.findByDate = function (ini, end, opSearch) {
            var inimonth = ini.getMonth() + 1;
            var endmonth = end.getMonth() + 1;
            var dateini = ini.getFullYear() + '-' + inimonth + '-' + ini.getDate();
            var dateend = end.getFullYear() + '-' + endmonth + '-' + end.getDate();
            switch (opSearch) {
                case 2:
                    FindHealthProfessionalbyDate.get({ resource: 'findbycreatedate', dateini: dateini, dateend: dateend })
                    .$promise.then(function (response) {
                        $scope.ListProfessional = response;
                    })
                    break;                   
                case 3:
                    FindHealthProfessionalbyDate.get({ resource: 'findbyactodate', dateini: dateini, dateend: dateend })
                    .$promise.then(function (response) {
                        $scope.ListProfessional = response;
                    })
                    break;
                    FindHealthProfessionalbyDate.get({ resource: 'findbydocumentdate', dateini: dateini, dateend: dateend })
                    .$promise.then(function (response) {
                        $scope.ListProfessional = response;
                    })
                case 4:
                    break;
            };
        };
        $scope.status = {
            isFirstOpen: true,
            isFirstDisabled: false
        };
        $scope.opSearch = 1;
        $scope.loadList = function (){
        HealthProfessional.get()
				.$promise.then(function(response){
					$scope.ListProfessional=response;
				
                    HealthProfessionalStudy.get()
				            .$promise.then(function (responsestudy) {
                        angular.forEach(responsestudy, function (svalue, skey) { 
                            angular.forEach($scope.ListProfessional, function (pvalue, pkey) {
                                if (svalue.hpid == pvalue.hpid) { 
                                    $scope.ListProfessional[pkey]['actAdm'] = { acto: svalue.hpeactoadm, fecha: svalue.hpefecact };
                                }
                            });                
                        });
                        });
            });

        }
    $scope.loadList();
///////////
 ///modal
 
  $scope.animationsEnabled = true;


  //save Data

  $scope.SaveData = function(hpid,DataSave){

  	//data professional study
	HealthProfessionalActo.put(hpid,DataSave)
			.$promise.then(function(dataResp){
                if (dataResp.status == "SUCCESS") {
                    $scope.loadList();
                    $scope.addAlert(dataResp.status, 'se ha guardado el acto administrativo para este usuario');
                }
                else {
                    $scope.addAlert('error', 'se ha generado un error al guardar el acto adminitrativo');
                } 
			});

        }
        
//save Document
        
        $scope.SaveDocument = function (hpid, DataSave) {
            
            //data professional study
            HealthProfessionalDocument.put(hpid, DataSave)
			.$promise.then(function (dataResp) {
                if (dataResp.status == "SUCCESS") {
                    $scope.loadList();
                    $scope.addAlert(dataResp.status, 'se ha registrado la entrega de documentos');
                }
                else {
                    $scope.addAlert('error', 'se ha generado un error al registrar la información de la entrega de documentos');
                }
            });

        }
        
        /// Generar planos
        
        $scope.Generar = function () {
            filesaver.generate($scope.fecIni, $scope.fecFin);
        };
        
  $scope.openmodal = function (idUserRegistered, typemodal) {
            
            switch (typemodal) {
            
                case 1:
                    var modalInstance = $modal.open({
                        animation: $scope.animationsEnabled,
                        templateUrl: 'ModalRegisterActo.html',
                        controller: 'ModalInstanceRegisterActo',
                        backdrop: false,
                        size: '',
                        resolve: {
                            hpid: function () {
                                return idUserRegistered;
                            }

                        }
                    });
                    
                    modalInstance.result.then(function (DataSave) {
                        $scope.SaveData({ hpid: idUserRegistered }, DataSave);
                    }, function () {
      
                    });
                    break;
                case 2:
                    var modalInstance = $modal.open({
                        animation: $scope.animationsEnabled,
                        templateUrl: 'ModalRecepcionDocumentos.html',
                        controller: 'ModalRecepcionDocumentos',
                        backdrop: false,
                        size: '',
                        resolve: {
                            hpid: function () {
                                return idUserRegistered;
                            }
                        }
                    });
                    
                    modalInstance.result.then(function (DataSave) {
                        $scope.SaveDocument({ hpid: idUserRegistered }, DataSave);
                    }, function () {
      
                    });
                    break;
                case 3:
                    var modalInstance = $modal.open({
                        animation: $scope.animationsEnabled,
                        templateUrl: 'ModalViewpdf.html',
                        controller: 'ModalViewpdf',
                        backdrop: false,
                        size: 'lg',
                        resolve: {
                            hpid: function () {
                                return idUserRegistered;
                            }
                        }
                    });
                    
                    modalInstance.result.then(function (DataSave) {
                        $scope.SaveDocument({ hpid: idUserRegistered }, DataSave);
                    }, function () {
      
                    });
                    break;
          
            }
  };

    $scope.alerts = [];
        
    $scope.addAlert = function (type,description) {
        if(type=="SUCCESS")
            $scope.alerts.push({ type: type, msg: description });
        else
            $scope.alerts.push({ type: type, msg: description });
    };
        
    $scope.closeAlert = function (index) {
        $scope.alerts.splice(index, 1);
    };

}]);

appServersoft.controller('ModalInstanceRegisterActo', function ($scope, $modalInstance, hpid) {
    $scope.numActo = "";
    $scope.fecActo = "";

    $scope.hpid = hpid;
   $scope.ok = function () {
   	$modalInstance.close({hpeactoadm:$scope.numActo,hpefecact:$scope.fecActo});
  };
  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
    };

    $scope.maskDate = function (value, sep, pat, nums) {
        val = value;
        largo = val.length;
        var preval = val;
        val = val.split(sep)
        
        if (val.length == 2) {
            var value = val[1].substring(0, 2);
            if (value * 1 > 12)
                return preval.substring(0, preval.length - 1);
        }
        if (val.length == 3) {
            var value = val[2].substring(0, 2);
            if (value * 1 > 31)
                return preval.substring(0, preval.length - 1);
        }
        
        val2 = ''
        for (r = 0; r < val.length; r++) {
            val2 += val[r]
        }
        if (nums) {
            for (z = 0; z < val2.length; z++) {
                if (isNaN(val2.charAt(z))) {
                    letra = new RegExp(val2.charAt(z), "g")
                    val2 = val2.replace(letra, "")
                }
            }
        }
        val = ''
        val3 = new Array()
        for (s = 0; s < pat.length; s++) {
            val3[s] = val2.substring(0, pat[s])
            val2 = val2.substr(pat[s])
        }
        
        for (q = 0; q < val3.length; q++) {
            if (q == 0) {
                val = val3[q]
            }
            else {
                if (val3[q] != "") {
                    val += sep + val3[q]
                }
            }
        }
        
        
        ////
         return val;
    }

});


appServersoft.controller('ModalRecepcionDocumentos', function ($scope, $modalInstance) {
    $scope.hpedocentregados = "";
    $scope.hpefechaentrega = "";

    $scope.ok = function () {
         var month = $scope.hpefechaentrega.getMonth() + 1;
        var date = $scope.hpefechaentrega.getFullYear() + '-' + month + '-' + $scope.hpefechaentrega.getDate();

        $modalInstance.close({ hpedocentregados: $scope.hpedocentregados, hpefechaentrega: date,hpobservacion:$scope.hpobservacion });
    };
    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };

});

appServersoft.controller('ModalViewpdf', function ($scope, $modalInstance) {
    $scope.personSelected = { name: "Helder Castrillon", document: "10290528" };
    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
});