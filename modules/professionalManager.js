module.exports = { 
	
//save professional in Db
Post: function (newProfessional) { 
	var sqlString="INSERT INTO hphealthprofessional(prid,prname ) VALUES ("
    			  	+newProfessional.hpid+","
					+"'"+newProfessional.hpname+"'"
    			  	+")";
	return sqlString;
	
},

//get register professional in Db
Get: function (pid) {
	if(pid>=0)
		return ("SELECT * FROM hphealthprofessional where hpid="+pid);
	else
		return "SELECT * FROM hphealthprofessional";
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

