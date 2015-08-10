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

//get register professional in Db
Get: function (pid) {
      if(pid)
           return ("SELECT * FROM hpstudyprofessional where hpid="+pid);
      else
          return ("SELECT * FROM hpstudyprofessional");
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
