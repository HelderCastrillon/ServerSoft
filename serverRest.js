
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
var profManagerDetail=require('./modules/professionalDetailManager.js');
var ServiceManager=require('./modules/ServiceManager.js');
var StudyManager=require('./modules/StudyManager.js');
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
	var PMquery=profManager.Get(request.params.pid,'id');
	mainController.ConnectionController(PMquery,response);
});
//find professional by name
app.get('/api/HealthProfessional/find/:pid', function(request, response) {
	var PMquery=profManager.Get(request.params.pid,'name');
	mainController.ConnectionController(PMquery,response);
});

//get all professional
app.get('/api/HealthProfessional', function(request, response) {
	var PMquery=profManager.Get();		
	mainController.ConnectionController(PMquery,response);
});

//get id professional saved
app.get('/api/HealthProfessionalId/:numdoc', function(request, response) {
	var PMquery=profManager.GetId(request.params.numdoc);
	mainController.ConnectionController(PMquery,response);
});

//get id professional saved
app.get('/api/HealthProfessional/token/:numdoc/:ntoken', function(request, response) {
	var PMquery=profManager.GetByToken(request.params.numdoc,request.params.ntoken);
	mainController.ConnectionController(PMquery,response);
});

//Save professional
app.post('/api/HealthProfessional', function(request, response) {
	var PMquery=profManager.Post(request.body);		
	mainController.ConnectionController(PMquery,response);
});

//Update professional
app.put('/api/HealthProfessional/:hpid', function(request, response) {
	var PMquery=profManager.Put(request.params.hpid,request.body);	
	mainController.ConnectionController(PMquery,response);
});

/////////////////////////////////////////////////////////

////	Module Health professional Detail	///

//get professioanl by id
app.get('/api/HealthProfessionalDetail/:pid', function(request, response) {
	var PMquery=profManagerDetail.Get(request.params.pid,'id');
	mainController.ConnectionController(PMquery,response);
});
//find professional by name
app.get('/api/HealthProfessionalDetail/find/:pid', function(request, response) {
	var PMquery=profManagerDetail.Get(request.params.pid,'name');
	mainController.ConnectionController(PMquery,response);
});

//get all professional
app.get('/api/HealthProfessionalDetail', function(request, response) {
	var PMquery=profManagerDetail.Get();		
	mainController.ConnectionController(PMquery,response);
});

//Save professional Detail
app.post('/api/HealthProfessionalDetail', function(request, response) {
	var PMquery=profManagerDetail.Post(request.body);		
	mainController.ConnectionController(PMquery,response);
});

//Update professional detail
app.put('/api/HealthProfessionalDetail/:hpdid', function(request, response) {
	var PMquery=profManagerDetail.Put(request.params.hpdid,request.body);		
	mainController.ConnectionController(PMquery,response);
});

/////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////

////	Module Study of the professional	///

//get professioanl by id
app.get('/api/ProfessionalStudy/:pid', function(request, response) {
	var PMquery=StudyManager.Get(request.params.pid,'id');
	mainController.ConnectionController(PMquery,response);
});
//find professional by name
app.get('/api/ProfessionalStudy/find/:pid', function(request, response) {
	var PMquery=StudyManager.Get(request.params.pid,'name');
	mainController.ConnectionController(PMquery,response);
});

//get all professional
app.get('/api/ProfessionalStudy', function(request, response) {
	var PMquery=StudyManager.Get();		
	mainController.ConnectionController(PMquery,response);
});

//Save professional
app.post('/api/ProfessionalStudy', function(request, response) {
	var PMquery=StudyManager.Post(request.body);		
	mainController.ConnectionController(PMquery,response);
});

//Update professional Study
app.put('/api/ProfessionalStudy/:hpesid', function(request, response) {
	var PMquery=StudyManager.Put(request.params.hpesid,request.body);		
	mainController.ConnectionController(PMquery,response);
});


/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

////	Module Service of the professional	///

//get professioanl by id
app.get('/api/ProfessionalSSO/:pid', function(request, response) {
	var PMquery=ServiceManager.Get(request.params.pid,'id');
	mainController.ConnectionController(PMquery,response);
});
//find professional by name
app.get('/api/ProfessionalSSO/find/:pid', function(request, response) {
	var PMquery=ServiceManager.Get(request.params.pid,'name');
	mainController.ConnectionController(PMquery,response);
});

//get all professional
app.get('/api/ProfessionalSSO', function(request, response) {
	var PMquery=ServiceManager.Get();		
	mainController.ConnectionController(PMquery,response);
});

//Save professional
app.post('/api/ProfessionalSSO', function(request, response) {
	var PMquery=ServiceManager.Post(request.body);		
	mainController.ConnectionController(PMquery,response);
});

//Save professional Service
app.put('/api/ProfessionalSSO/:hpsoid', function(request, response) {
	var PMquery=ServiceManager.Put(request.params.hpsoid,request.body);		
	mainController.ConnectionController(PMquery,response);
});

/////////////////////////////////////////////////////////

/////common  query///////////////////////////////////////

//get country by name
app.get('/api/common/country', function(request, response) {
	var PMquery=CommmonQuery.GetCountry(undefined);
	mainController.ConnectionController(PMquery,response);
});

//get country by name
app.get('/api/common/country/:name', function(request, response) {
	var PMquery=CommmonQuery.GetCountry(request.params.name);
	mainController.ConnectionController(PMquery,response);
});

//get country by id
app.get('/api/common/countrybyid/:id', function(request, response) {
	var PMquery=CommmonQuery.GetCountryByID(request.params.id);
	mainController.ConnectionController(PMquery,response);
});

//get depto by name
app.get('/api/common/department/:name', function(request, response) {
	var PMquery=CommmonQuery.GetDepartment(request.params.name);
	mainController.ConnectionController(PMquery,response);
});

//get depto by id
app.get('/api/common/departmentbyid/:id', function(request, response) {
	var PMquery=CommmonQuery.GetDepartmentByID(request.params.id);
	mainController.ConnectionController(PMquery,response);
});

//get depto by name
app.get('/api/common/department', function(request, response) {
	var PMquery=CommmonQuery.GetDepartment(undefined);
	mainController.ConnectionController(PMquery,response);
});

//get municipality by name
app.get('/api/common/municipality/:department/:name', function(request, response) {
	var PMquery=CommmonQuery.GetMunicipality(request.params.name,request.params.department);
	console.log(PMquery);
	mainController.ConnectionController(PMquery,response);
});
//get municipality by name
app.get('/api/common/municipality/:department', function(request, response) {
	var PMquery=CommmonQuery.GetMunicipality(undefined,request.params.department);
	console.log(PMquery);
	mainController.ConnectionController(PMquery,response);
});

//get municipality by id
app.get('/api/common/municipalitybyid/:id', function(request, response) {
	var PMquery=CommmonQuery.GetMunicipalityByID(request.params.id);
	console.log(PMquery);
	mainController.ConnectionController(PMquery,response);
});


//get institution by name and municipality
app.get('/api/common/institution/:municipality/:name', function(request, response) {
	var PMquery=CommmonQuery.GetInstitution(request.params.name,request.params.municipality);
	mainController.ConnectionController(PMquery,response);
});

//get institution by  municipality
app.get('/api/common/institution/:municipality', function(request, response) {
	var PMquery=CommmonQuery.GetInstitution(undefined,request.params.municipality);
	mainController.ConnectionController(PMquery,response);
});

//get institution by  id
app.get('/api/common/institutionbyid/:id', function(request, response) {
	var PMquery=CommmonQuery.GetInstitutionByID(request.params.id);
	mainController.ConnectionController(PMquery,response);
});

//get program by name and institution
app.get('/api/common/program/:institution/:name', function(request, response) {
	var PMquery=CommmonQuery.GetProgram(request.params.name,request.params.institution);
	mainController.ConnectionController(PMquery,response);
});

//get program by  institution
app.get('/api/common/program/:institution', function(request, response) {
	var PMquery=CommmonQuery.GetProgram(undefined,request.params.institution);
	mainController.ConnectionController(PMquery,response);
});

//get program by  id
app.get('/api/common/programbyid/:id', function(request, response) {
	var PMquery=CommmonQuery.GetProgramByID(request.params.id);
	mainController.ConnectionController(PMquery,response);
});


///////////////////////////////////////////////////////////

//creation of the Server
http.createServer(app).listen(app.get('port'), function(){
  console.log("@heldersoft Server working in  " + port);
});
