function validateForm(){
	/* Escribe tú código aquí */
	//alert ("funciona");
	$(".form-signup").submit(function(){	
	var nombre= $("#name").val();
	//var numeros= 	["0","1","2","3","4","5"];
	var numeros= Number;
	if (nombre == ""){
		$("#name").parent().append("<span>Ingresar Nombre</span>");
		return false;
	}
	else if (nombre == numeros){
		$("#name").parent().append("<span>Utilizar solo letras</span>");
		return false;
	}      
	});

	$(".form-signup").submit(function(){			
	var apellido= $("#lastname").val();
	if (apellido == ""){
		$("#lastname").parent().append("<span>Ingresar Apellido</span>");
		return false;
	}
	});

	$(".form-signup").submit(function(){			
	var email= $("#input-email").val();
	if (email == ""){
		$("#input-email").parent().append("<span>Ingresar correo electronico</span>");
		return false;
	}
	});

	$(".form-signup").submit(function(){			
	var password= $("#input-password").val();
	if (password == ""){
		$("#input-password").parent().append("<span>Ingresar Contraseña</span>");
		return false;
	}
	else if(password == "123456"){
		$("#input-password").parent().append("<span>No puedes utilizar esta contraseña.Es vulnerable</span>");
		return false;
	}
	else if(password == "0987654"){
		$("#input-password").parent().append("<span>No puedes utilizar esta contraseña.Es vulnerable</span>");
		return false;
	}
	else if(password.length < 6){
		$("#input-password").parent().append("<span>La contraseña es muy corta</span>");
		return false;
	}
	});

	$(".form-signup").submit(function(){			
	var select= $("select").val();
	if (select == 0){
		$("select").parent().append("<span>Seleccionar Opcion</span>");
		return false;
	}
	});

	

}

