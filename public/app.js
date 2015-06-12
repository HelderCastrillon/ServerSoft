var appServersoft = angular.module("appServersoft", ['ngRoute','ServersoftApi','pascalprecht.translate','ui.bootstrap']);

appServersoft.config(function($routeProvider) {
 
	  $routeProvider.when('/healthprofessional', {
		  	templateUrl: "/modules/healthprofessional/healthprofessionalView.html",
		  	controller: "healthprofessionalController"
		  });
	  $routeProvider.otherwise({
	        redirectTo: '/healthprofessional'
	  });   

	});

appServersoft.config(function ($translateProvider) {
  
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