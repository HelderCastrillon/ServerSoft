ServersoftApi.service('filesaver', ['commonvariable', 'HealthProfessional', 'HealthProfessionalDetail', 'HealthProfessionalStudy', 'HealthProfessionalService', function (commonvariable, HealthProfessional, HealthProfessionalDetail, HealthProfessionalStudy, HealthProfessionalService) {
        generateFile = function (DataPersonal, DataPersonalAdd, Study, obligService, enddate) {
            
            var filecontent = [];
            
            filecontent.push(DataPersonal);
            filecontent.push(DataPersonalAdd);
            filecontent.push(Study);
            filecontent.push(obligService);


            var sfecha = enddate.split("-");
            var blob = new Blob([filecontent], { type: "text/plain;charset=utf-8" });
            saveAs(blob, "THS130ATHS" + sfecha[0] + sfecha[1] + sfecha[2] + "DE000000000019.txt");
        };
        
        this.generate = function (initdate, enddate) {
            //----------------------------------------
            var DataPersonal = {};
            var DataPersonalAdd = {};
            var Study = {};
            var obligServic = {};

            HealthProfessional.get()
			.$promise.then(function (responseHP) {
                DataPersonal = responseHP[0];
                
                HealthProfessionalDetail.get()
			        .$promise.then(function (responseAdd) {
                    DataPersonalAdd = responseAdd[0];
                    
                    HealthProfessionalStudy.get()
			        .$promise.then(function (responseSt) {
                        Study = responseSt[0];
                        
                        HealthProfessionalService.get()
			            .$promise.then(function (responseSSO) {
                            obligService = responseSSO[0];
                            generateFile(DataPersonal, DataPersonalAdd, Study, obligService, enddate);
                          });

                    });
                });

            });
     
            //----------------------------------------
            
        }
    }]);