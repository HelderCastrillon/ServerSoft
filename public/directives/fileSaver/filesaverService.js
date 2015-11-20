ServersoftApi.service('filesaver', ['commonvariable', 'RETHUS', function (commonvariable, RETHUS) {
        generateFile = function (Datacontrol,DataPersonal, Study, obligService, enddate) {
            
            var filecontent = [];
            filecontent.push(DataPersonal);
            filecontent.push(Study);
            filecontent.push(obligService);
            var total = DataPersonal.length*1 + Study.length*1 + obligService.length*1;
            var kr = 0;
            var fileorganized = "1;"+ Datacontrol.initdate+";"+ Datacontrol.enddate+";DE;19;"+ total+"\r\n";
            var pjump = "";
            var kreg = 0;
            angular.forEach(filecontent, function (value, key){
                angular.forEach(value, function (ovalue, okey) {
                    ovalue["zjump"] = "\r\n";
                    kreg = kreg + 1;
                    angular.forEach(ovalue, function (evalue, ekey) {
                        if (evalue == "#reg") { 
                            evalue = kreg;
                        }
                        if (pjump == "\r\n" || evalue == "\r\n" || (key == 0 && okey == 0 && ekey == 'type'))
                            fileorganized = fileorganized + evalue;
                        else
                            fileorganized = fileorganized + ";" + evalue;
                        pjump = evalue;
                    });
      
                });
                kr = kr + 1;
                if (kr == filecontent.length) { 
                    var sfecha = enddate.split("-");
                    var blob = new Blob([fileorganized], { type: "text/plain;charset=utf-8" });
                    saveAs(blob, "THS130ATHS" + sfecha[0] + sfecha[1] + sfecha[2] + "DE000000000019.txt");
                }
                    
            });


        };
        
        this.generate = function (initdate, enddate) {
            //----------------------------------------
            var DataPersonal = [];
            var Study = [];
            var obligServic = [];

            RETHUS.get({resource: 'HealthProfessional',dateini:initdate,dateend:enddate})
			.$promise.then(function (responseHP) {
                DataPersonal = responseHP;
                 
                    RETHUS.get({ resource: 'ProfessionalStudy', dateini: initdate, dateend: enddate })
			        .$promise.then(function (responseSt) {
                        Study = responseSt;
                        
                        RETHUS.get({ resource: 'ProfessionalSSO', dateini: initdate, dateend: enddate })
			            .$promise.then(function (responseSSO) {
                            obligService = responseSSO;
                            generateFile({initdate:initdate, enddate:enddate},DataPersonal, Study, obligService, enddate);
                          });

                    });
          });
     
            //----------------------------------------
            
        }
    }]);