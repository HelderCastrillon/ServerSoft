appServersoft.controller('administratorController', ['$scope','$filter','$modal','filesaver','HealthProfessional','HealthProfessionalStudy','HealthProfessionalActo','FindHealthProfessional', 'authentication','FindHealthProfessionalbyDate','HealthProfessionalDocument','HealthProfessionalCertificate', function($scope,$filter,$modal,filesaver,HealthProfessional,HealthProfessionalStudy,HealthProfessionalActo, FindHealthProfessional,authentication, FindHealthProfessionalbyDate, HealthProfessionalDocument, HealthProfessionalCertificate){

        ///verify session
        authentication.checkStatus();
        $scope.shutdown = function () { 
            authentication.logout();    
        }
        $scope.clearSeach = function () {
            $scope.valueToFind = "";
            $scope.dateini = "";
            $scope.dateend = "";
        }
        $scope.clearSeach();
        $scope.findPerson = function (valueToFind) {
            $scope.filterList($scope.ListProfessional, 'alld');
            $scope.allRegistrerFilter = true;
            FindHealthProfessional.get({value:valueToFind})
				.$promise.then(function (response) {
                $scope.ListProfessional = response;
                angular.forEach($scope.ListProfessional, function (pvalue, pkey) {
                    $scope.ListProfessional[pkey]['visible'] = true;
                }); 
            })
        }
        
        $scope.filterList = function (currentList,filterType) {
            //(hp.hpeactoadm && viewwa)||(hp.hpefechaentrega && viewwd)||((hp.hpeactoadm?false:true) && viewwoa)||((hp.hpefechaentrega?false:true) && viewwod)
            //$scope.ListProfessional = [];
            angular.forEach(currentList, function (value, key) {
                switch (filterType) {
                    case 'alla':
                        if (value.hpeactoadm)
                            currentList[key].visible = true;
                        else
                            currentList[key].visible = true;
                        break;
                    case 'wa':
                        if (value.hpeactoadm)
                            currentList[key].visible = true;
                        else
                            currentList[key].visible = false;
                        break;
                    case 'woa':
                        if (value.hpeactoadm)
                            currentList[key].visible = false;
                        else
                            currentList[key].visible = true;
                        break;
                    case 'alld':
                        if (value.hpefechaentrega)
                            currentList[key].visible = true;
                        else
                            currentList[key].visible = true;
                        break;
                    case 'wd':
                        if (value.hpefechaentrega)
                            currentList[key].visible = true;
                        else
                            currentList[key].visible = false;
                        break;
                    case 'wod':
                        if (value.hpefechaentrega)
                            currentList[key].visible = false;
                        else
                            currentList[key].visible = true;
                        break;    

                }
                $scope.ListProfessional = currentList;
            });
        }      
        $scope.documentRegister = function (docstatus) {
            switch (docstatus) {
                case true:
                    return 'success';
                    break;
                case false:
                    return 'warning';
                    break;
                default:
                    return'default'
            }
        }
        $scope.findByDate = function (ini, end, opSearch) {
            
            //show all
            $scope.filterList($scope.ListProfessional, 'alld');
            $scope.allRegistrerFilter = true;

            var inimonth = ini.getMonth() + 1;
            var endmonth = end.getMonth() + 1;
            var dateini = ini.getFullYear() + '-' + inimonth + '-' + ini.getDate();
            var dateend = end.getFullYear() + '-' + endmonth + '-' + end.getDate();
            switch (opSearch) {
                case 2:
                    FindHealthProfessionalbyDate.get({ resource: 'findbycreatedate', dateini: dateini, dateend: dateend })
                    .$promise.then(function (response) {
                        $scope.ListProfessional = response;
                        angular.forEach($scope.ListProfessional, function (pvalue, pkey) {
                            $scope.ListProfessional[pkey]['visible'] = true;
                        }); 
                    })
                    break;                   
                case 3:
                    FindHealthProfessionalbyDate.get({ resource: 'findbyactodate', dateini: dateini, dateend: dateend })
                    .$promise.then(function (response) {
                        $scope.ListProfessional = response;
                        angular.forEach($scope.ListProfessional, function (pvalue, pkey) {
                            $scope.ListProfessional[pkey]['visible'] = true;
                        }); 
                    })
                    break;
                    FindHealthProfessionalbyDate.get({ resource: 'findbydocumentdate', dateini: dateini, dateend: dateend })
                    .$promise.then(function (response) {
                        $scope.ListProfessional = response;
                        angular.forEach($scope.ListProfessional, function (pvalue, pkey) {
                            $scope.ListProfessional[pkey]['visible'] = true; 
                        });
                        
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
            
          $scope.clearSeach();
        //show all
        $scope.filterList($scope.ListProfessional, 'alld');
        $scope.allRegistrerFilter = true;

        HealthProfessional.get()
				.$promise.then(function(response){
					$scope.ListProfessional=response;
                    HealthProfessionalStudy.get()
				            .$promise.then(function (responsestudy) {
                        angular.forEach(responsestudy, function (svalue, skey) { 
                            angular.forEach($scope.ListProfessional, function (pvalue, pkey) {
                            if (svalue.hpid == pvalue.hpid) {
                                $scope.ListProfessional[pkey]['hpefecha'] = svalue.hpefecha;
                                $scope.ListProfessional[pkey]['hpeactoadm'] = svalue.hpeactoadm;
                                $scope.ListProfessional[pkey]['hpefecact'] = svalue.hpefecact;
                                $scope.ListProfessional[pkey]['hpefechaentrega'] = svalue.hpefechaentrega;
                                $scope.ListProfessional[pkey]['hpobservacion'] = svalue.hpobservacion;
                                $scope.ListProfessional[pkey]['hpedocentregados'] = svalue.hpedocentregados;
                                $scope.ListProfessional[pkey]['hpenumacta'] = svalue.hpenumacta;
                                $scope.ListProfessional[pkey]['visible'] = true;
                                
                                                              
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
        
        $scope.SaveCertificate = function (hpid, DataSave) {
            
            //data professional study
            HealthProfessionalCertificate.put(hpid, DataSave)
			.$promise.then(function (dataResp) {
                if (dataResp.status == "SUCCESS") {
                    $scope.loadList();
                    $scope.addAlert(dataResp.status, 'se ha guardado los datos del certificado generado');
                }
                else {
                    $scope.addAlert('error', 'se ha generado un error al guardar los datos del certificado');
                }
            });

        }
        
        
        ///obtener Datos del certificado
        
        $scope.GetDataforCertificate = function (id) {
            HealthProfessionalCertificate.get({hpid:id})
				.$promise.then(function (response) {
                if (response.length >= 1) { 
                    $scope.openmodal(id, 3, response);
                }
            })
        }

        /// Generar planos
        
        $scope.GenerateFileReport = function (ini, end) {
            var inimonth = ini.getMonth() + 1;
            var endmonth = end.getMonth() + 1;
            var dateini = ini.getFullYear() + '-' + inimonth + '-' + ini.getDate();
            var dateend = end.getFullYear() + '-' + endmonth + '-' + end.getDate();

            filesaver.generate(dateini, dateend);
        };
        
  $scope.openmodal = function (idUserRegistered, typemodal,data) {
            
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
                            },
                        
                            dataValue: function () {
                                return data;
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
                            },
                        
                            dataValue: function () {
                                return data;
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
                        size: '',
                        resolve: {
                            hpid: function () {
                                return idUserRegistered;
                            },
                            dataValue: function () {
                                return data;
                            }
                        }
                    });
                    
                    modalInstance.result.then(function (DataSave) {
                        $scope.SaveCertificate({ hpid: idUserRegistered }, DataSave);
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

appServersoft.controller('ModalInstanceRegisterActo', function ($scope, $modalInstance, hpid, dataValue) {
    if (dataValue.num) {
        $scope.numActo = dataValue.num;
        $scope.fecActo = dataValue.date;
    }
    else {
        $scope.numActo = "";
        $scope.fecActo = "";
    }
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


appServersoft.controller('ModalRecepcionDocumentos', function ($scope, $modalInstance, dataValue) {
    if (dataValue.docfecha) {
        $scope.hpedocentregados = dataValue.docentrega;
        $scope.hpefechaentrega = new Date(dataValue.docfecha);
        $scope.hpobservacion = dataValue.docobservacion;
    }
    else {
        $scope.hpedocentregados = false;
        $scope.hpefechaentrega = "";
        $scope.hpobservacion = "";
    }
    

    $scope.ok = function () {
         var month = $scope.hpefechaentrega.getMonth() + 1;
        var date = $scope.hpefechaentrega.getFullYear() + '-' + month + '-' + $scope.hpefechaentrega.getDate();

        $modalInstance.close({ hpedocentregados: $scope.hpedocentregados, hpefechaentrega: date,hpobservacion:$scope.hpobservacion });
    };
    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };

});

appServersoft.controller('ModalViewpdf', function ($scope, $modalInstance, dataValue,RETHUSAuxiliares, RETHUSProfesional, RETHUSProfesionalSSO) {
    
    $scope.hpeprof = false;
    $scope.dataperson = dataValue[0];
    $scope.alerts = [];
    
    
    ////set or clear control
      
    if ($scope.dataperson) {
        $scope.hpenumreguni = $scope.dataperson["hpenumreguni"];
        $scope.hpelugarsso = $scope.dataperson["hpelugarsso"];
        $scope.hpenumacta = $scope.dataperson["hpenumacta"];
        $scope.hpenumlibrodip = $scope.dataperson["hpenumlibrodip"];
        $scope.hpefoliodip = $scope.dataperson["hpefoliodip"];
        $scope.hpelibroreg = $scope.dataperson["hpelibroreg"];
        $scope.hpenumlibroreg = $scope.dataperson["hpenumlibroreg"];
        $scope.hpenumfolioreg = $scope.dataperson["hpenumfolioreg"];
        $scope.hpenumreg = $scope.dataperson["hpenumreg"];
    }
    else { 
        $scope.hpenumreguni="";
        $scope.hpelugarsso = "";
        $scope.hpenumacta = "";
        $scope.hpenumlibrodip = "";
        $scope.hpefoliodip = "";
        $scope.hpelibroreg = "";
        $scope.hpenumlibroreg = "";
        $scope.hpenumfolioreg = "";
        $scope.hpenumreg = "";
    }
    
    //
    
   
    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
    $scope.closeAlert = function (index) {
        $scope.alerts.splice(index, 1);
    };
    $scope.addAlert = function (type, description) {
        if (type == "SUCCESS")
            $scope.alerts.push({ type: "success", msg: description });
        else
            $scope.alerts.push({ type: "error", msg: description });
    };

    $scope.SaveinPDF = function () {
        $scope.months = {
            "JANUARY": "ENERO",
            "FEBRUARY": "FEBRERO",
            "MARCH": "MARZO",
            "APRIL": "ABRIL",
            "MAY": "MAYO",
            "JUNE": "JUNIO",
            "AUGUST": "AGOSTO",
            "SEPTEMBER": "SEPTIEMBRE",
            "OCTOBER": "OCTUBRE",
            "NOVEMBER": "NOVIEMBRE",
            "DECEMBER":"DICIEMBRE"
        }
        $scope.dataperson["hpefecgradoletras"] = $scope.dataperson.daygrad + " de " + $scope.months[$scope.dataperson.monthgrad.trim()] + " de " + $scope.dataperson.yeargrad;
        if ($scope.dataperson.monthini) { 
            $scope.dataperson["hpefecssoini"] = $scope.dataperson.dayini + " de " + $scope.months[$scope.dataperson.monthini.trim()] + " de " + $scope.dataperson.yearini;
            $scope.dataperson["hpefecssofin"] = $scope.dataperson.dayend + " de " + $scope.months[$scope.dataperson.monthend.trim()]+ " de " + $scope.dataperson.yearend;
         }
        if ($scope.dataperson) {
            $scope.dataperson["hpenumreguni"] = $scope.hpenumreguni;
            $scope.dataperson["hpelugarsso"] = $scope.hpelugarsso;
            $scope.dataperson["hpenumacta"] = $scope.hpenumacta;
            $scope.dataperson["hpenumlibrodip"] = $scope.hpenumlibrodip;
            $scope.dataperson["hpefoliodip"] = $scope.hpefoliodip;
            $scope.dataperson["hpelibroreg"] = $scope.hpelibroreg;
            $scope.dataperson["hpenumlibroreg"] = $scope.hpenumlibroreg;
            $scope.dataperson["hpenumfolioreg"] = $scope.hpenumfolioreg;
            $scope.dataperson["hpenumreg"] = $scope.hpenumreg;
            if ($scope.hpenumacta == undefined || $scope.hpenumlibrodip == undefined || $scope.hpefoliodip == undefined || $scope.hpenumlibroreg == undefined || $scope.hpenumlibroreg == undefined || $scope.hpenumfolioreg == undefined || $scope.hpenumreg == undefined) { 
                $scope.addAlert('error', 'Todos los campos son obligatorios');
            }
            else {
                if ($scope.hpeprof) {
                    if ($scope.dataperson.monthini) {
                        var docDefinition = RETHUSProfesionalSSO.get($scope.dataperson);
                    } else { 
                        var docDefinition = RETHUSProfesional.get($scope.dataperson);
                    }
                }
                else {
                    if ($scope.dataperson.monthini) {
                        var docDefinition = RETHUSProfesionalSSO.get($scope.dataperson);
                    } else { 
                        var docDefinition = RETHUSAuxiliares.get($scope.dataperson);
                    }
                }
                pdfMake.createPdf(docDefinition).print();
                $scope.hpelugarsso= $scope.hpelugarsso?"":$scope.hpelugarsso;
               $modalInstance.close({ hpenumreguni: $scope.hpenumreguni, hpelugarsso: $scope.hpelugarsso, hpenumacta: $scope.hpenumacta, hpenumlibrodip : $scope.hpenumlibrodip , hpefoliodip: $scope.hpefoliodip, hpelibroreg: $scope.hpelibroreg, hpenumlibroreg: $scope.hpenumlibroreg, hpenumfolioreg: $scope.hpenumfolioreg, hpenumreg: $scope.hpenumreg });
            }
   
        }
        else
            $scope.SaveinPDF();
    }

});