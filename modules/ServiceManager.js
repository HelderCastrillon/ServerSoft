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

  //get register professional in Db
  Get: function (pid) {
        if(pid)
             return ("SELECT * FROM hpserviceprofessional where hpid="+pid);
        else
            return ("SELECT * FROM hpserviceprofessional");
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
