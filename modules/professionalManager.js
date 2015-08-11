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

//save professional in Db
Put: function (hpid,newProfessional) { 
   var sqlString="UPDATE hphealthprofessional SET "
            +"hptipdoc= '"+newProfessional.hptipdoc+"',"
            +"hpnumdoc= '"+newProfessional.hpnumdoc+"',"
            +"hppriape= '"+newProfessional.hppriape+"',"
            +"hpsegape= '"+newProfessional.hpsegape+"',"
            +"hpprinom= '"+newProfessional.hpprinom+"',"
            +"hpsegnom= '"+newProfessional.hpsegnom+"',"
            +"hpsexo= '"+newProfessional.hpsexo+"',"
            +"hpdepnac= '"+newProfessional.hpdepnac+"',"
            +"hpmunnac= '"+newProfessional.hpmunnac+"',"
            +"hppais= '"+newProfessional.hppais+"',"
            +"hpfecnac= '"+newProfessional.hpfecnac+"',"
            +"hpetnia= '"+newProfessional.hpetnia+"',"
            +"hptoken= '"+newProfessional.hptoken+"'"
            +" WHERE hpid="+hpid;
   return sqlString;
   
},
//get register professional in Db
Get: function (pid,option) {
      switch(option){
	case 'id':
	     return ("SELECT * FROM hphealthprofessional where hpid="+pid);
           break;
	case 'name':
		return ("SELECT * FROM hphealthprofessional where hpnumdoc||hppriape||hpsegape||hpprinom||hpsegnom ilike '%"+pid+"%' order by hpid desc limit 1;");
            break
      default:
            return ("SELECT * FROM hphealthprofessional");
	}
},

//get lastID
GetId: function (numdoc){
   return ("SELECT max(hpid) as hpid  FROM hphealthprofessional where hpnumdoc='"+numdoc+"'"); 
},
//get by token
GetByToken: function (numdoc, ntoken){
   return ("select * from hphealthprofessional inner join hpstudyprofessional on hpstudyprofessional.hpid=hphealthprofessional.hpid where  hphealthprofessional.hpnumdoc='"+numdoc+"' and hptoken='"+ntoken+"' limit 1"); 
},

//del professional in Db
Del: function (idProfessional) {
  console.log(idProfessional);
} 

};

