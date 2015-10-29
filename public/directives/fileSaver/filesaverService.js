ServersoftApi.service('filesaver', ['commonvariable', 'RETHUS', function (commonvariable, RETHUS) {
        generateFile = function (DataPersonal, DataPersonalAdd, Study, obligService, enddate) {
            
            var filecontent = [];
            filecontent.push(DataPersonal);
            filecontent.push(DataPersonalAdd);
            filecontent.push(Study);
            filecontent.push(obligService);
            var k = 0;
            var kr = 0;
            var fileorganized = "";
            angular.forEach(filecontent, function (value, key){
                angular.forEach(value, function (ovalue, okey) {
                    k = 0;
                    angular.forEach(ovalue, function (evalue, ekey) {
                        k = k + 1;
                        if (fileorganized == "")
                            fileorganized = evalue;
                        else {
                            if (k == ovalue.length) {
                                fileorganized = fileorganized + "," + evalue + "\n\n";
                            }
                            else {
                                fileorganized = fileorganized + "," + evalue;
                            }
                        }
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
            var DataPersonal = {};
            var DataPersonalAdd = {};
            var Study = {};
            var obligServic = {};

            RETHUS.get({resource: 'HealthProfessional',dateini:initdate,dateend:enddate})
			.$promise.then(function (responseHP) {
                DataPersonal = responseHP;
                
                RETHUS.get({ resource: 'HealthProfessionalDetail', dateini: initdate, dateend: enddate }) 
			        .$promise.then(function (responseAdd) {
                    DataPersonalAdd = responseAdd;
                    
                    RETHUS.get({ resource: 'ProfessionalStudy', dateini: initdate, dateend: enddate })
			        .$promise.then(function (responseSt) {
                        Study = responseSt;
                        
                        RETHUS.get({ resource: 'ProfessionalSSO', dateini: initdate, dateend: enddate })
			            .$promise.then(function (responseSSO) {
                            obligService = responseSSO;
                            generateFile(DataPersonal, DataPersonalAdd, Study, obligService, enddate);
                          });

                    });
                });

            });
     
            //----------------------------------------
            
        }
    }]);