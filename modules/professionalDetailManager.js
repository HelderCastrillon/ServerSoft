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

Put: function (hpdid,newProfessionalDetail) { 

      var sqlString="UPDATE hpdetailprofessional SET "
            +"hpdestcon= '"+newProfessionalDetail.hpdestcon+"',"
            +"hpdpaisred= '"+newProfessionalDetail.hpdpaisred+"',"
            +"hpddepred= '"+newProfessionalDetail.hpddepred+"',"
            +"hpdmunred= '"+newProfessionalDetail.hpdmunred+"',"
            +"hpddirecc= '"+newProfessionalDetail.hpddirecc+"',"
            +"hpdtelef= '"+newProfessionalDetail.hpdtelef+"',"
            +"hpdtelmov= '"+newProfessionalDetail.hpdtelmov+"',"
            +"hpdcorreo= '"+newProfessionalDetail.hpdcorreo+"'"
            +" WHERE hpdid="+hpdid;
      return sqlString;
      
},

//get register professional in Db
Get: function (pid) {
      if(pid)
           return ("SELECT * FROM hpdetailprofessional where hpid="+pid);
      else
          return ("SELECT * FROM hpdetailprofessional");
      },


//del professional in Db
Del: function (idProfessional) {
  console.log(idProfessional);
} 

};
