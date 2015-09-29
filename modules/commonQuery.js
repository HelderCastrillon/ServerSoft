module.exports = { 

//get Country iso3166
GetCountry: function (name) {
	if(name)
		return ("SELECT  trim(name) as name, alpha2code, alpha3code, numericcode, isolink FROM countryiso3166  where name ilike '%"+name+"%' limit 10");
	else
		return "SELECT  trim(name) as name, alpha2code, alpha3code, numericcode, isolink FROM countryiso3166 limit 10";
	},

      //get Country iso3166
GetCountryByID: function (id) {
          return ("SELECT  trim(name) as name, alpha2code, alpha3code, numericcode, isolink FROM countryiso3166  where numericcode = '"+id+"'");
        },


//get department
GetDepartment: function (name) {
      if(name)
            return ("SELECT code, trim(name)  as name  FROM department where name ilike '%"+name+"%' limit 10");
      else
            return "SELECT code, trim(name)  as name  FROM department limit 10";
      },

//get department
GetDepartmentByID: function (id) {
     
      return ("SELECT code, trim(name)  as name  FROM department where code = '"+id+"'");

      },

//get municipality
GetMunicipality: function (name, department) {
      if(name)
            return ("SELECT code, depcode, trim(name) as name FROM municipality where name  ilike '%"+name+"%' and depcode ="+department+" limit 10");
      else
            return "SELECT code, depcode, trim(name)  as name FROM municipality where depcode=19";
      },

//get municipality
GetMunicipalityByID: function (id) {

       return ("SELECT code, depcode, trim(name) as name FROM municipality where code  = '"+id+"'");
      
      },

//get Institution of education
GetInstitution: function (name, municipality) {
      if(name)
            return ("SELECT hpinstitutions.code, trim(hpinstitutions.name) as name, state, principal, type, sector, municipio  FROM hpinstitutions inner join municipality on municipality.name=municipio  where hpinstitutions.name ilike '%"+name+"%' and municipality.code = '"+municipality+"' limit 10");
      else
            return "SELECT hpinstitutions.code, trim(hpinstitutions.name) as name, state, principal, type, sector, municipio  FROM hpinstitutions inner join municipality on municipality.name=municipio  where municipality.code ='"+municipality+"'";
      },

//get Institution of education
GetInstitutionByID: function (id) {
       return ("SELECT code, name, state, principal, type, sector, municipio  FROM hpinstitutions where code = '"+id+"'");
      },

//get program by institution
GetProgram: function (name,institution,type,levelac) {
      if(name)
            return ("SELECT institutioncode, code, area, nbc, trim(name) as name, level, levelac  FROM hpprograms where name  ilike '%"+name+"%' and institutioncode = '"+institution+"' and level='"+type+"' and levelac='"+levelac+"' and status=1  limit 10");
      else
            return "SELECT institutioncode, code, area, nbc, trim(name) as name, level, levelac  FROM hpprograms where institutioncode = "+institution+" and status=1 limit 10";
      },

//get program by institution
GetProgramByID: function (id) {
       return ("SELECT institutioncode, code, area, nbc, trim(name) as name, level, levelac  FROM hpprograms where code = '"+id+"' and status=1");
      }

};

