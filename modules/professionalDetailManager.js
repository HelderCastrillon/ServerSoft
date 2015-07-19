module.exports = { 
      
//save professional in Db
Post: function (newProfessionalDetail) { 

      var sqlString="INSERT INTO hpdetailprofessional( hpid, hpdestcon, hpdpaisred, hpddepred, hpdmunred, hpddirecc, hpdtelef, hpdtelmov, hpdcorreo) VALUES ("
            +"'"+newProfessionalDetail.hpid+"',"
            +"'"+newProfessionalDetail.hpdestcon+"',"
            +"'"+newProfessionalDetail.hpdpaisred+"',"
            +"'"+newProfessionalDetail.hpddepred+"',"
            +"'"+newProfessionalDetail.hpdmunred+"',"
            +"'"+newProfessionalDetail.hpddirecc+"',"
            +"'"+newProfessionalDetail.hpdtelef+"',"
            +"'"+newProfessionalDetail.hpdtelmov+"',"
            +"'"+newProfessionalDetail.hpdcorreo+"'"
            +")";
      return sqlString;
      
},

//get register professional in Db
Get: function (pid) {
      if(pid)
           return ("SELECT * FROM hpdetailprofessional where hpid="+pid);
      else
          return ("SELECT * FROM hpdetailprofessional");
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
