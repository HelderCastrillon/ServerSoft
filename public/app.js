var appServersoft = angular.module("appServersoft", ['ngRoute','ServersoftApi','pascalprecht.translate','ui.bootstrap']);

appServersoft.config(function($routeProvider,$translateProvider) {
 
	  $routeProvider.when('/healthprofessional', {
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

