/*
 *	Architeture 
 * 	Helder Yesid Castrillón
 * 
 * It is the persistence in the FrontEnd
 * 
 * */
var ServersoftApi = angular.module("ServersoftApi", ['ngResource']);

//Create all common variables of the apps 
ServersoftApi.factory("commonvariable", function () {
	var Vari={
			url:"http://localhost:5433/api/",
        urlemail: "http://190.146.87.62/upload/sendmail.php",
            urlsession: "http://localhost:7777/api/sys/auth",
			OptionSetSelected:[]
			};

   return Vari; 
});

ServersoftApi.factory("HealthProfessional",['$resource','commonvariable', function ($resource,commonvariable) {
	return $resource( commonvariable.url+"HealthProfessional/:pid", 
	{pid:'@pid'},
  	{get: { method: "GET",isArray: true},
	post: { method: "POST"},
	put: { method: "PUT"},
	remove: {method:'DELETE'}
  });
}]);

ServersoftApi.factory("FindHealthProfessional",['$resource','commonvariable', function ($resource,commonvariable) {
	return $resource( commonvariable.url+"HealthProfessional/find/:value", 
	{value:'@value'},
  { get: { method: "GET",isArray: true}
  });
}]);

ServersoftApi.factory("HealthProfessionalId",['$resource','commonvariable', function ($resource,commonvariable) {
	return $resource( commonvariable.url+"HealthProfessionalId/:numdoc", 
	{numdoc:'@numdoc'},
  { get: { method: "GET",isArray: true}
  });
}]);


ServersoftApi.factory("HealthProfessionalDetail",['$resource','commonvariable', function ($resource,commonvariable) {
	return $resource( commonvariable.url+"HealthProfessionalDetail/:pid", 
	{pid:'@pid'},
  { get: { method: "GET",isArray: true},
	post: { method: "POST"},
	put: { method: "PUT"},
	remove: {method:'DELETE'}
  });
}]);

ServersoftApi.factory("HealthProfessionalStudy",['$resource','commonvariable', function ($resource,commonvariable) {
	return $resource( commonvariable.url+"ProfessionalStudy/:pid", 
	{pid:'@pid'},
  { get: { method: "GET",isArray: true},
	post: { method: "POST"},
	put: { method: "PUT"},
	remove: {method:'DELETE'}
  });
}]);

ServersoftApi.factory("HealthProfessionalActo",['$resource','commonvariable', function ($resource,commonvariable) {
	return $resource( commonvariable.url+"ProfessionalActo/:hpid", 
	{hpid:'@hpid'},
  { put: { method: "PUT"}
  });
}]);

ServersoftApi.factory("HealthProfessionalService",['$resource','commonvariable', function ($resource,commonvariable) {
	return $resource( commonvariable.url+"ProfessionalSSO/:pid", 
	{pid:'@pid'},
  { get: { method: "GET",isArray: true},
	post: { method: "POST"},
	put: { method: "PUT"},
	remove: {method:'DELETE'}
  });
}]);


ServersoftApi.factory("enumList",['$resource','commonvariable', function ($resource,commonvariable) {
	return $resource(commonvariable.url+"commonList/:nlist", 
	{nlist:'@nlist'},
  { get: { method: "GET",isArray: true}
  });
}]);

ServersoftApi.factory("CountryList",['$resource','commonvariable', function ($resource,commonvariable) {
	return $resource(commonvariable.url+"common/:resource/:level/:name/:type/:levelac", 
	{resource:'@resource',
	name:'@name',
	level:'@level',
    type:'@type',
    levelac:'@levelac'
    },
  { get: { method: "GET",isArray: true}
  });
}]);


ServersoftApi.factory("Token", ['$resource', 'commonvariable', function ($resource, commonvariable) {
	return $resource(commonvariable.url+"HealthProfessional/token/:numdoc/:ntoken", 
	{numdoc:'@numdoc',
	ntoken:'@ntoken'},
  { get: { method: "GET",isArray: true}
  });
}]);

ServersoftApi.factory("RETHUS", ['$resource', 'commonvariable', function ($resource, commonvariable) {
        return $resource(commonvariable.url + ":resource/format/:dateini/:dateend", 
	{
            dateini: '@dateini',
            dateend: '@dateend'
        },
  {
            get: { method: "GET", isArray: true }
        });
    }]);




ServersoftApi.factory("sendmailservice",['$resource','commonvariable', function ($resource,commonvariable) {
	return $resource( commonvariable.urlemail, 
	{to:'@to',
	toname:'@toname',
	fromname:'@fromname',
	subject:'@subject',
	message:'@message'
	},
  { post: { method: "POST"}
  });
    }]);

////Factoria sesiones

//factoria que controla la autentificación, devuelve un objeto
//$cookies para crear cookies
//$cookieStore para actualizar o eliminar
//$location para cargar otras rutas
ServersoftApi.factory("loginservice", ['$resource', 'commonvariable', function ($resource, commonvariable) {
        return $resource(commonvariable.urlsession+"/:username/:password", 
	{
            username: '@username',
            password: '@password'
    },
    {
       get: { method: "GET", isArray: true }
    });
 }]);


ServersoftApi.factory("authentication", function ($cookies, $cookieStore, $location, $q, loginservice) {
    return {
        login : function (username, password) {
            //creamos la cookie con el nombre que nos han pasado
            var defered = $q.defer();
            var promise = defered.promise;

            loginservice.get({ username: username, password: password })
            .$promise.then(function (credential) {
                if (credential.length >= 1) {
                    $cookies.dataUser = credential[0];
                    //mandamos a la adminaccess
                    $location.path("/adminaccess");
                }
                else { 
                    defered.resolve({ error: "error" });
                }
            }
            );
            return promise;
           
        },
        logout : function () {
            //al hacer logout eliminamos la cookie con $cookieStore.remove
            $cookieStore.remove("dataUser"),
            //mandamos al login
            $location.path("/login");
        },
        checkStatus : function () {
            //creamos un array con las rutas que queremos controlar
            var rutasPrivadas = ["/adminaccess", "/login"];
            if (this.in_array($location.path(), rutasPrivadas) && typeof ($cookies.dataUser) == "undefined") {
                $location.path("/login");
            }
            //en el caso de que intente acceder al login y ya haya iniciado sesión lo mandamos a la home
            if (this.in_array("/login", rutasPrivadas) && typeof ($cookies.dataUser) != "undefined") {
                $location.path("/adminaccess");
            }
        },
        in_array : function (needle, haystack) {
            var key = '';
            for (key in haystack) {
                if (haystack[key] == needle) {
                    return true;
                }
            }
            return false;
        }
    }
});



