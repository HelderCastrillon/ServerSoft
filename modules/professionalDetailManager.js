module.exports = { 
      
//save professional in Db
Post: function (newProfessionalDetail) { 

      var sqlString="INSERT INTO hpdetailprofessional( hpid, hpdestcon, hpdpaisred, hpddepred, hpdmunred, hpddirecc, hpdtelef, hpdtelmov, hpdcorreo,hpdtelef2www.faw) VALUES ("
            +"'"+newProfessionalDetail.hpid+"',"
            +"'"+newProfessionalDetail.hpdestcon+"',"
            +"'"+newProfessionalDetail.hpdpaisred+"',"
            +"'"+newProfessionalDetail.hpddepred+"',"
            +"'"+newProfessionalDetail.hpdmunred+"',"
            +"'"+newProfessionalDetail.hpddirecc+"',"
            +"'"+newProfessionalDetail.hpdtelef+"',"
            +"'"+newProfessionalDetail.hpdtelmov+"',"
            + "'" + newProfessionalDetail.hpdcorreo + "'," 
            + "'" + newProfessionalDetail.hpdtelef2 + "'"
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

//get register professional in Db
GetinFormat: function (dateini, dateend) {
                 return ("SELECT 2 as type, * FROM hpdetailprofessional");

      },
//del professional in Db
Del: function (idProfessional) {
  console.log(idProfessional);
} 

};
