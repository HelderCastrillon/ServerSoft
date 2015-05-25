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
			};

   return Vari; 
});

ServersoftApi.factory("HealthProfessional",['$resource','commonvariable', function ($resource,commonvariable) {
	return $resource( commonvariable.url+"HealthProfessional/:pid", 
	{pid:'@pid'},
  { get: { method: "GET"},
	post: { method: "POST"},
	remove: {method:'DELETE'}
  });
}]);

ServersoftApi.factory("enumList",['$resource','commonvariable', function ($resource,commonvariable) {
	return $resource( commonvariable.url+"commonList/:nlist", 
	{pid:'@pid'},
  { get: { method: "GET"}
  });
}]);

