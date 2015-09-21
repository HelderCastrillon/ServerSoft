module.exports = { 
	getList: function (nlist,response){

		var tipdoc=[
		{"key":"CC","value":"Cedula de Ciudadanía"},
		{"key":"CE","value":"Cedula de extranjería"},
		{"key":"TI","value":"Tarjeta de identidad"},
		{"key":"PA","value":"Pasaporte"},
		{"key":"RC","value":"Registro civil"}
		];

		var sexo=[
		{"key":"M","value":"Masculino"},
		{"key":"F","value":"Femenino"}
		];

		var conyugal=[
		{"key":"SO","value":"Solter@"},
		{"key":"CA","value":"Casad@"},
		{"key":"DI","value":"Divorciad@"},
		{"key":"VI","value":"Viud@"},
		{"key":"UM","value":"Union marital de hecho"}
		];

		var etnia=[
		{"key":"1","value":"Indigena"},
		{"key":"2","value":"ROM (Gitano)"},
		{"key":"3","value":"Raizal del archipielago de san andres"},
		{"key":"4","value":"Palenquero de san basilio"},
		{"key":"5","value":"Negro, Mulato, Afro Colombiano o Afro desendiente"},
		{"key":"6","value":"ninguno de los anteriores"}
		];

		var origentitulo=[
		{"key":"1","value":"Local"},
		{"key":"2","value":"Extranjero"}
		];

		var tipoinstitucion=[
		{"key":"1","value":"Educación superior"},
		{"key":"2","value":"Educación para el trabajo y el desarrollo humano"}
		];

		var tipoprograma=[
		{"key":"AUX","value":"Auxiliar"},
		{"key":"TCP","value":"Técnico profesional"},
		{"key":"TEC","value":"Tecnología"},
		{"key":"UNV","value":"Universitaria"}		
		];

		var serviciooblig=[
		{"key":"1","value":"Prestó el servicio social obligatorio"},
		{"key":"2","value":"exento del servicio social obligatorio"},
		{"key":"3","value":"exonerado del servicio social obligatorio"}
		];

		var tipolugarservicio=[
		{"key":"1","value":"Local"},
		{"key":"2","value":"Extranjero"}
		];

		var modalidad=[
		{"key":"0","value":"Sin modalidad"},
		{"key":"1","value":"Programa de salud pública"},
		{"key":"2","value":"Programa de salud en población vulnerable"},
		{"key":"3","value":"Programa de investigación en salud"},
		{"key":"4","value":"Prestación de servicios profesionales de salud en IPS habilitada"},
		{"key":"5","value":"Prestación de servicios especializados de salud en IPS habilitada"}
		];

		var programa=[
		{"key":"1","value":"Medicina"},
		{"key":"2","value":"Odontología"},
		{"key":"3","value":"Enfermería"},
		{"key":"4","value":"Bacteriología"}
		];
		var list={};
		switch(nlist){
			case "tipdoc":
				list = tipdoc;
				break;
			case "sexo":
				list = sexo;
				break;
			case "conyugal":
				list = conyugal;
				break;
			case "etnia":
				list = etnia;
				break;
			case "origentitulo":
				list = origentitulo;
				break;
			case "tipoinstitucion":
				list = tipoinstitucion;
				break;
			case "tipoprograma":
				list = tipoprograma;
				break;
			case "serviciooblig":
				list = serviciooblig;
				break;
			case "modalidad":
				list = modalidad;
				break;
			case "programa":
				list = programa;
				break;
			case "tipolugarservicio":
				list =tipolugarservicio;
				break;
		}

		//display
		response.writeHead(200, {'Content-Type': 'text/plain'});
		response.write(JSON.stringify(list) + "\n");
		response.end();

	}
}