module.exports = { 

//get Country iso3166
GetCountry: function (name) {
	if(name)
		return ("SELECT  name, alpha2code, alpha3code, numericcode, isolink FROM countryiso3166  where name ilike '%"+name+"%' limit 10");
	else
		return "SELECT  name, alpha2code, alpha3code, numericcode, isolink FROM countryiso3166 limit 10";
	},

//get department
GetDepartment: function (name) {
      if(name)
            return ("SELECT code, name  FROM department where name ilike '%"+name+"%' limit 10");
      else
            return "SELECT code, name  FROM department limit 10";
      },

//get municipality
GetMunicipality: function (name, department) {
      if(name)
            return ("SELECT code, depcode, name FROM municipality where name  ilike '%"+name+"%' and depcode ="+department+" limit 10");
      else
            return "SELECT code, depcode, name FROM municipality where depcode=19";
      },

//get Institution of education
GetInstitution: function (name, municipality) {
      if(name)
            return ("SELECT hpinstitutions.code, hpinstitutions.name, state, principal, type, sector, municipio  FROM hpinstitutions inner join municipality on municipality.name=municipio  where hpinstitutions.name ilike '%"+name+"%' and municipality.code = '"+municipality+"' limit 10");
      else
            return "SELECT hpinstitutions.code, hpinstitutions.name, state, principal, type, sector, municipio  FROM hpinstitutions inner join municipality on municipality.name=municipio  where municipality.code ='"+municipality+"'";
      },

//get program by institution
GetProgram: function (name,institution) {
      if(name)
            return ("SELECT institutioncode, code, area, nbc, name, level, levelac  FROM hpprograms where name  ilike '%"+name+"%' and institutioncode = '"+institution+"' limit 10");
      else
            return "SELECT institutioncode, code, area, nbc, name, level, levelac  FROM hpprograms where institutioncode = "+institution+" limit 10";
      }

};

