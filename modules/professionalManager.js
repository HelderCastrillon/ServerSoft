module.exports = { 
	
//save professional in Db
Post: function (newProfessional) { 

	var sqlString="INSERT INTO hphealthprofessional( hptipdoc, hpnumdoc, hppriape, hpsegape, hpprinom, hpsegnom, hpsexo, hpdepnac, hpmunnac, hppais, hpfecnac, hpetnia, hptoken) VALUES ("
			+"'"+newProfessional.hptipdoc+"',"
            +"'"+newProfessional.hpnumdoc+"',"
            +"'"+newProfessional.hppriape+"',"
            +"'"+newProfessional.hpsegape+"',"
            +"'"+newProfessional.hpprinom+"',"
            +"'"+newProfessional.hpsegnom+"',"
            +"'"+newProfessional.hpsexo+"',"
            +"'"+newProfessional.hpdepnac+"',"
            +"'"+newProfessional.hpmunnac+"',"
            +"'"+newProfessional.hppais+"',"
            +"'"+newProfessional.hpfecnac+"',"
            +"'"+newProfessional.hpetnia+"',"
            +"'"+newProfessional.hptoken+"'"
            +")";
	return sqlString;
	
},

//get register professional in Db
Get: function (pid,option) {
      switch(option){
	case 'id':
	     return ("SELECT * FROM hphealthprofessional where hpid="+pid);
           break;
	case 'name':
		return ("SELECT * FROM hphealthprofessional where hpnumdoc||hppriape||hpsegape||hpprinom||hpsegnom ilike '%"+pid+"%';");
            break
      default:
            return ("SELECT * FROM hphealthprofessional");
	}
},

//update professional in Db
Put: function (idProfessional,CurrentProfessional) {
	console.log(idProfessional);
 	console.log(CurrentProfessional);
},

//del professional in Db
Del: function (idProfessional) {
  console.log(idProfessional);
} 

};

