module.exports = { 
	getList: function (nlist,response){

		var tipdoc=[
		{"CC":"Cedula de Ciudadanía"},
		{"CE":"Cedula de extranjería"},
		{"TI":"Tarjeta de identidad"},
		{"PA":"Pasaporte"},
		{"RC":"Registro civil"}
		];

		var sexo=[
		{"M":"Masculino"},
		{"F":"Femenino"}
		];

		var conyugal=[
		{"SO":"Solter@"},
		{"CA":"Casad@"},
		{"DI":"Divorciad@"},
		{"VI":"Viud@"},
		{"UM":"Union marital de hecho"}
		];

		var etnia=[
		{"1":"Indigena"},
		{"2":"ROM (Gitano)"},
		{"3":"Raizal del archipielago de san andres"},
		{"4":"Palenquero de san basilio"},
		{"5":"Negro, Mulato, Afro Colombiano o Afro desendiente"},
		{"6":"ninguno de los anteriores"}
		];

		var origentitulo=[
		{"1":"Local"},
		{"2":"Extranjero"}
		];

		var tipoinstitucion=[
		{"1":"Educación superior"},
		{"2":"Educación para el trabajo y el desarrollo humano"}
		];

		var tipoprograma=[
		{"AUX":"Auxiliar"},
		{"TCP":"Técnico profesional"},
		{"TEC":"Tecnología"},
		{"UNV":"Universitaria"},
		{"ESP":"Especialización"},
		{"TEC":"Maestría"},
		{"DOC":"Doctorado"}
		];

		var serviciooblig=[
		{"1":"Prestó el servicio social obligatorio"},
		{"2":"exento del servicio social obligatorio"},
		{"3":"exonerado del servicio social obligatorio"}
		];

		var modalidad=[
		{"0":"Sin modalidad"},
		{"1":"Programa de salud pública"},
		{"2":"Programa de salud en población vulnerable"},
		{"3":"Programa de investigación en salud"},
		{"4":"Prestación de servicios profesionales de salud en IPS habilitada"},
		{"5":"Prestación de servicios especializados de salud en IPS habilitada"}
		];

		var programa=[
		{"1":"Medicina"},
		{"2":"Odontología"},
		{"3":"Enfermería"},
		{"4":"Bacteriología"}
		];
		var list={};
		switch(nlist){
			case "tipodoc":
				list = tipodoc;
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
		}

		//display
		response.writeHead(200, {'Content-Type': 'text/plain'});
		response.write(JSON.stringify(list) + "\n");
		response.end();

	}
}