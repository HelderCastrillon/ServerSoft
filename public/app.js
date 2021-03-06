var appServersoft = angular.module("appServersoft", ['ngRoute','ServersoftApi','pascalprecht.translate','ui.bootstrap','ngMask','angular-md5', 'ngCookies']);

appServersoft.config(function($routeProvider,$translateProvider, $httpProvider) {
    
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    

    $routeProvider.when('/login', {
        templateUrl: "/modules/login/loginView.html",
        controller: "loginController"
    });
    $routeProvider.when('/healthprofessional', {
		  	templateUrl: "/modules/healthprofessional/healthprofessionalView.html",
		  	controller: "healthprofessionalController"
		  });
	  $routeProvider.when('/healthprofessional/:id', {
		  	templateUrl: "/modules/healthprofessional/healthprofessionalView.html",
		  	controller: "healthprofessionalController"
		  });
	  $routeProvider.when('/index', {
		  	templateUrl: "/modules/index/indexView.html",
		  	controller: "indexController"
		  });

	  $routeProvider.when('/help', {
		  	templateUrl: "/modules/help/helpView.html",
		  	controller: "helpController"
		  });
	  $routeProvider.when('/adminaccess', {
		  	templateUrl: "/modules/administrator/administratorView.html",
		  	controller: "administratorController"
		  });	 
	$routeProvider.otherwise({
	        redirectTo: '/index'
	  });


	  $translateProvider.useStaticFilesLoader({
          prefix: '/languages/',
          suffix: '.json'
      });
	  
	  $translateProvider.registerAvailableLanguageKeys(
			    ['es', 'en'],
			    {
			        'en*': 'en',
			        'es': 'es',
			         '*': 'es' // must be last!
			    }
			);
	  
	  $translateProvider.fallbackLanguage(['en']);
	  $translateProvider.determinePreferredLanguage();
	  //$translateProvider.use('es');    

	});

