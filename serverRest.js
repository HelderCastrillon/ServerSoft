
/*
+Architecture create by Helder Castrillón
+heldersoft@gmail.com
+Software health 
*/

//include external module
var http = require("http");
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride= require('method-override');
var path    = require("path");

//controller
var mainController=require('./ServerController.js');

//Modules
var profManager=require('./modules/professionalManager.js');
var CommmonQuery=require('./modules/commonQuery.js');
var List=require('./modules/commonList.js');

//variable for configuration
var port = 5433;
//express configuration
app.set('port', process.env.PORT || port);
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(methodOverride());


//root path
app.get('/', function(request, response) {
    response.send('Rest API create by @heldersoft');
});



//common modules
//file public
app.use(express.static(path.join(__dirname, 'public')));

//view 

app.get('/view', function(request, response) {
	 response.sendFile(path.join(__dirname+'/public/index.html'));
});
///
//get enumlist
app.get('/api/commonList/:nlist', function(request, response) {
	List.getList(request.params.nlist,response);

});
///////////////////////////////////////////

////	Module Health professional 		///

//get professioanl by id
app.get('/api/HealthProfessional/:pid', function(request, response) {
	var PMquery=profManager.Get(request.params.pid);
	mainController.ConnectionController(PMquery,response);
});

//get all professional
app.get('/api/HealthProfessional', function(request, response) {
	var PMquery=profManager.Get();		
	mainController.ConnectionController(PMquery,response);
});

//Save professional
app.post('/api/HealthProfessional', function(request, response) {
	var PMquery=profManager.Post(request.body);		
	mainController.ConnectionController(PMquery,response);
});

/////////////////////////////////////////////////////////

/////common  query///////////////////////////////////////

//get country by name
app.get('/api/common/country/:name', function(request, response) {
	var PMquery=CommmonQuery.GetCountry(request.params.name);
	mainController.ConnectionController(PMquery,response);
});

//get depto by name
app.get('/api/common/department/:name', function(request, response) {
	var PMquery=CommmonQuery.GetDepartment(request.params.name);
	mainController.ConnectionController(PMquery,response);
});

//get municipality by name
app.get('/api/common/municipality/:department/:name', function(request, response) {
	var PMquery=CommmonQuery.GetMunicipality(request.params.name,request.params.department);
	console.log(PMquery);
	mainController.ConnectionController(PMquery,response);
});

//get institution by name and municipality
app.get('/api/common/institution/:municipality/:name', function(request, response) {
	var PMquery=CommmonQuery.GetInstitution(request.params.name,request.params.municipality);
	mainController.ConnectionController(PMquery,response);
});

//get program by name and institution
app.get('/api/common/program/:institution/:name', function(request, response) {
	var PMquery=CommmonQuery.GetProgram(request.params.name,request.params.institution);
	mainController.ConnectionController(PMquery,response);
});

///////////////////////////////////////////////////////////

//creation of the Server
http.createServer(app).listen(app.get('port'), function(){
  console.log("@heldersoft Server working in  " + port);
});
