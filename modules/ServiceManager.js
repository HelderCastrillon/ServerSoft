module.exports = { 
      
//save professional in Db
Post: function (newServiceProfessional) { 

      var sqlString="INSERT INTO hpserviceprofessional(hpid, hpsobliga, hpstiplug, hpsdeppr, hpsmunpr, hpspaispr, hpsfecini, hpsfecfin, hpsmodal, hpsprog) VALUES ("
                  +"'"+newServiceProfessional.hpid+"',"
            +"'"+newServiceProfessional.hpsobliga+"',"
            +"'"+newServiceProfessional.hpstiplug+"',"
            +"'"+newServiceProfessional.hpsdeppr+"',"
            +"'"+newServiceProfessional.hpsmunpr+"',"
            +"'"+newServiceProfessional.hpspaispr+"',"
            +"'"+newServiceProfessional.hpsfecini+"',"
            +"'"+newServiceProfessional.hpsfecfin+"',"
            +"'"+newServiceProfessional.hpsmodal+"',"
            +"'"+newServiceProfessional.hpsprog+"'"
            +")";
      return sqlString;
      
},

//save professional in Db
Put: function (hpsid,newServiceProfessional) { 

      var sqlString="UPDATE hpserviceprofessional SET "
            +"hpsobliga= '"+newServiceProfessional.hpsobliga+"',"
            +"hpstiplug= '"+newServiceProfessional.hpstiplug+"',"
            +"hpsdeppr= '"+newServiceProfessional.hpsdeppr+"',"
            +"hpsmunpr= '"+newServiceProfessional.hpsmunpr+"',"
            +"hpspaispr= '"+newServiceProfessional.hpspaispr+"',"
            +"hpsfecini= '"+newServiceProfessional.hpsfecini+"',"
            +"hpsfecfin= '"+newServiceProfessional.hpsfecfin+"',"
            +"hpsmodal= '"+newServiceProfessional.hpsmodal+"',"
            +"hpsprog= '"+newServiceProfessional.hpsprog+"'"
            +" WHERE hpsid="+hpsid;
      return sqlString;
      
},
  //get register professional in Db
  Get: function (pid) {
        if(pid)
             return ("SELECT * FROM hpserviceprofessional where hpid="+pid);
        else
            return ("SELECT * FROM hpserviceprofessional");
    },

  GetinFormat: function (dateini, dateend) {
        return ("select '4' as type,'#reg' as reg, hptipdoc,hpnumdoc,hpsobliga,hpstiplug,hpsdeppr,  hpsmunpr,hpspaispr,to_char(hpsfecini,'YYYY-MM-DD') as hpsfecini,to_char(hpsfecfin,'YYYY-MM-DD') as hpsfecfin,hpsmodal,hpsprog from hphealthprofessional inner join hpserviceprofessional on hpserviceprofessional.hpid=hphealthprofessional.hpid inner join hpstudyprofessional  on hpstudyprofessional.hpid=hphealthprofessional.hpid where hpefecact between '" + dateini + "' and '" + dateend + "'"); 
    },
  //del professional in Db
  Del: function (idProfessional) {
    console.log(idProfessional);
  } 

};
