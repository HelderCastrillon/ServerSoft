module.exports = { 
      
//save professional in Db
Post: function (newStudyProfessional) { 
      console.log(newStudyProfessional)
      var sqlString="INSERT INTO hpstudyprofessional(hpid, hpeorigtit, hpedepin, hpemunin, hpepaisin, hpetipin, hpecodin, hpetippr, hpecodpr, hpefecgrad, hpenumconv, hpefecconv, hpetitequi, hpegruptit,hpeactoadm, hpefecact) VALUES ("
                  +"'"+newStudyProfessional.hpid+"',"
            +"'"+newStudyProfessional.hpeorigtit+"',"
            +"'"+newStudyProfessional.hpedepin+"',"
            +"'"+newStudyProfessional.hpemunin+"',"
            +"'"+newStudyProfessional.hpepaisin+"',"
            +"'"+newStudyProfessional.hpetipin+"',"
            +"'"+newStudyProfessional.hpecodin+"',"
            +"'"+newStudyProfessional.hpetippr+"',"
            +"'"+newStudyProfessional.hpecodpr+"',"
            +"'"+newStudyProfessional.hpefecgrad+"',"
            +"'"+newStudyProfessional.hpenumconv+"',"
            +"'"+newStudyProfessional.hpefecconv+"',"
            +"'"+newStudyProfessional.hpetitequi+"',"
            +"'"+newStudyProfessional.hpegruptit+"',"
            +"'"+newStudyProfessional.hpeactoadm+"',"
            +"'"+newStudyProfessional.hpefecact+"'"
            +")";
      return sqlString;
      
},


//save professional in Db
Put: function (hpesid,newStudyProfessional) { 
      console.log(newStudyProfessional)
      var sqlString="UPDATE hpstudyprofessional SET "
            +"hpeorigtit= '"+newStudyProfessional.hpeorigtit+"',"
            +"hpedepin= '"+newStudyProfessional.hpedepin+"',"
            +"hpemunin= '"+newStudyProfessional.hpemunin+"',"
            +"hpepaisin= '"+newStudyProfessional.hpepaisin+"',"
            +"hpetipin= '"+newStudyProfessional.hpetipin+"',"
            +"hpecodin= '"+newStudyProfessional.hpecodin+"',"
            +"hpetippr= '"+newStudyProfessional.hpetippr+"',"
            +"hpecodpr= '"+newStudyProfessional.hpecodpr+"',"
            +"hpefecgrad= '"+newStudyProfessional.hpefecgrad+"',"
            +"hpenumconv= '"+newStudyProfessional.hpenumconv+"',"
            +"hpefecconv= '"+newStudyProfessional.hpefecconv+"',"
            +"hpetitequi= '"+newStudyProfessional.hpetitequi+"',"
            +"hpegruptit= '"+newStudyProfessional.hpegruptit+"',"
            +"hpeactoadm= '"+newStudyProfessional.hpeactoadm+"',"
            +"hpefecact= '"+newStudyProfessional.hpefecact+"'"
            +" WHERE hpesid="+hpesid;
      return sqlString;
      
},


//save professional in Db
PutActo: function (hpesid,newStudyProfessional) { 
      console.log(newStudyProfessional)
      var sqlString="UPDATE hpstudyprofessional SET "
            +"hpeactoadm= '"+newStudyProfessional.hpeactoadm+"',"
            +"hpefecact= '"+newStudyProfessional.hpefecact+"'"
            +" WHERE hpid="+hpesid;
      return sqlString;
      
    },

  GetinFormat: function (dateini, dateend) {
        return ("SELECT 4 as type,* FROM hpstudyprofessional");
  },

//get register professional in Db
Get: function (pid) {
      if(pid)
           return ("SELECT * FROM hpstudyprofessional where hpid="+pid);
      else
          return ("SELECT * FROM hpstudyprofessional");
      },

//del professional in Db
Del: function (idProfessional) {
  console.log(idProfessional);
} 

};
