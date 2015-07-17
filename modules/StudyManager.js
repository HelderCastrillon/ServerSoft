module.exports = { 
      
//save professional in Db
Post: function (newStudyProfessional) { 

      var sqlString="INSERT INTO hpstudyprofessional(hpid, hpeorigtit, hpedepin, hpemunin, hpemunin, hpetipin, hpecodin, hpetippr, hpecodpr, hpefecgrad, hpenumconv, hpefecconv, hpetitequi, hpegruptit, hpeactoadm, hpefecact) VALUES ("
                  +"'"+newStudyProfessiona.hpid+"',"
            +"'"+newStudyProfessiona.hpeorigtit+"',"
            +"'"+newStudyProfessiona.hpedepin+"',"
            +"'"+newStudyProfessiona.hpemunin+"',"
            +"'"+newStudyProfessiona.hpdmunred+"',"
            +"'"+newStudyProfessiona.hpemunin+"',"
            +"'"+newStudyProfessiona.hpetipin+"',"
            +"'"+newStudyProfessiona.hpecodin+"',"
            +"'"+newStudyProfessiona.hpetippr+"',"
            +"'"+newStudyProfessiona.hpecodpr+"',"
            +"'"+newStudyProfessiona.hpefecgrad+"',"
            +"'"+newStudyProfessiona.hpenumconv+"',"
            +"'"+newStudyProfessiona.hpefecconv+"',"
            +"'"+newStudyProfessiona.hpetitequi+"',"
            +"'"+newStudyProfessiona.hpegruptit+"',"
            +"'"+newStudyProfessiona.hpeactoadm+"',"
            +"'"+newStudyProfessiona.hpefecact+"'"
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
