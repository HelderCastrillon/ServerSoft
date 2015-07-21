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
			urlemail:"http://190.146.87.62/upload/sendmail.php",
			OptionSetSelected:[]
			};

   return Vari; 
});

ServersoftApi.factory("HealthProfessional",['$resource','commonvariable', function ($resource,commonvariable) {
	return $resource( commonvariable.url+"HealthProfessional/:pid", 
	{pid:'@pid'},
  { get: { method: "GET",isArray: true},
	post: { method: "POST"},
	remove: {method:'DELETE'}
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
  { get: { method: "GET"},
	post: { method: "POST"},
	remove: {method:'DELETE'}
  });
}]);

ServersoftApi.factory("HealthProfessionalStudy",['$resource','commonvariable', function ($resource,commonvariable) {
	return $resource( commonvariable.url+"ProfessionalStudy/:pid", 
	{pid:'@pid'},
  { get: { method: "GET"},
	post: { method: "POST"},
	remove: {method:'DELETE'}
  });
}]);

ServersoftApi.factory("HealthProfessionalService",['$resource','commonvariable', function ($resource,commonvariable) {
	return $resource( commonvariable.url+"ProfessionalSSO/:pid", 
	{pid:'@pid'},
  { get: { method: "GET"},
	post: { method: "POST"},
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
	return $resource(commonvariable.url+"common/:resource/:level/:name", 
	{resource:'@resource',
	name:'@name',
	level:'@level'},
  { get: { method: "GET",isArray: true}
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

