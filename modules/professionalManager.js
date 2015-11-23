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
		return ("SELECT * FROM hphealthprofessional inner join hpstudyprofessional on hpstudyprofessional.hpid=hphealthprofessional.hpid where hpnumdoc||hppriape||hpsegape||hpprinom||hpsegnom ilike '%"+pid+"%' order by hphealthprofessional.hpid desc limit 1;");
            break
      default:
            return ("SELECT * FROM hphealthprofessional order by hpid desc limit 20");
	}
    },
    
GetCertificate: function (hpid) { 
    var sqlString="select hpprinom ||' '|| hpsegnom ||' '|| hppriape ||' '|| hpsegape as fullName,"
    +"hpnumdoc, munnac.name as nommun, hpprograms.practice, hpprograms.title, institution.name, institution.municipio as munest, depest.name as nomdepest,"
    +" to_char(hpserviceprofessional.hpsfecini,'DD') dayini,"
    +" to_char(hpserviceprofessional.hpsfecini,'MONTH') monthini,"
    +" to_char(hpserviceprofessional.hpsfecini,'YYYY') yearini,"
    +" to_char(hpserviceprofessional.hpsfecfin,'DD') dayend,"
    +" to_char(hpserviceprofessional.hpsfecfin,'MONTH') monthend,"
    + " to_char(hpserviceprofessional.hpsfecfin,'YYYY') yearend," 
    + " to_char(hpstudyprofessional.hpefecgrad,'DD') daygrad," 
    + " to_char(hpstudyprofessional.hpefecgrad,'MONTH') monthgrad," 
    + " to_char(hpstudyprofessional.hpefecgrad,'YYYY') yeargrad"
    +" from hphealthprofessional"
    +" inner join hpstudyprofessional on hpstudyprofessional.hpid=hphealthprofessional.hpid"
    +" inner join hpprograms on cast(hpprograms.code as char(10))=hpstudyprofessional.hpecodpr"
    +" inner join(select code, name from municipality) as munnac on cast(munnac.code as char(10)) =hpmunnac"
    +" inner join (select code, name, municipio from hpinstitutions) as institution on cast(institution.code as char(10))=hpstudyprofessional.hpecodin"
    + " inner join (select code, name from department ) as depest on cast(depest.code as char(10)) =hpstudyprofessional.hpedepin"
    + " left join hpserviceprofessional on hpserviceprofessional.hpid=hphealthprofessional.hpid"    
    + " WHERE hphealthprofessional.hpid=" + hpid;   
            return sqlString;
},

//get lastID
GetId: function (numdoc){
   return ("SELECT max(hpid) as hpid  FROM hphealthprofessional where hpnumdoc='"+numdoc+"'"); 
    },
//get lastID
GetinFormat: function (dateini, dateend){
   return ("select '2' as type,'#reg' as reg, hptipdoc,hpnumdoc,hppriape,hpsegape,hpprinom,hpsegnom,hpsexo,hpdepnac,hpmunnac,hppais,to_char(hpfecnac,'YYYY-MM-DD') as hpfecnac,hpdestcon,hpdpaisred, hpddepred,hpdmunred,hpddirecc,hpdtelef,hpdtelmov,hpdcorreo,hpetnia from hphealthprofessional inner join hpdetailprofessional on hpdetailprofessional.hpid=hphealthprofessional.hpid inner join hpstudyprofessional  on hpstudyprofessional.hpid=hphealthprofessional.hpid where hpefecact between '"+ dateini+"' and '"+dateend+"'"); 
},
//get by token
GetByToken: function (numdoc, ntoken){
   return ("select * from hphealthprofessional inner join hpstudyprofessional on hpstudyprofessional.hpid=hphealthprofessional.hpid where  hphealthprofessional.hpnumdoc='"+numdoc+"' and hptoken='"+ntoken+"' limit 1"); 
    },
    
  //get by date
GetByDateRegister: function (dateini,dateend) {
     return ("select * from hphealthprofessional inner join hpstudyprofessional on hpstudyprofessional.hpid=hphealthprofessional.hpid where  hpfecha between'" + dateini + "' and '" + dateend + "'");
    },
    //get by date
GetByDateActo: function (dateini, dateend) {
        return ("select * from hphealthprofessional inner join hpstudyprofessional on hpstudyprofessional.hpid=hphealthprofessional.hpid where  hpefecact between'" + dateini + "' and '" + dateend + "'");
    }, 
    //get by date
GetByDateDocument: function (dateini, dateend) {
        return ("select * from hphealthprofessional inner join hpstudyprofessional on hpstudyprofessional.hpid=hphealthprofessional.hpid where  hpefechaentrega between'" + dateini + "' and '" + dateend + "'");
    },   

//del professional in Db
Del: function (idProfessional) {
  console.log(idProfessional);
} 

};

