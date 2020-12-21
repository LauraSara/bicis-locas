

function validateForm(){
	/* Escribe tú código aquí */
	//alert ("funciona");
	$("span.texto").remove();
	validarNombre();
	validarApellido();
	validarContraseña();
	validarSelect();
	validarEmail();
}
//eliminar span

function validarNombre(){	
	var nombre= $("#name").val();
	if (nombre == ""){
		$("#name").parent().append('<span class="texto">Ingresar Nombre</span>');
		return false;
	}
	if (/^[a-zA-Z]+$/.test(nombre) == false){
		$("#name").parent().append('<span class="texto">Utilizar solo letras</span>');
		return false;
	}
	else if (/^[A-Z]+$/.test(nombre[0]) == false){
		$("#name").parent().append('<span class="texto">La inicial debe ser mayúscula</span>');
		return false;
	}		
};

function validarApellido(){
	//apellido
	var apellido= $("#lastname").val();
	if (apellido == ""){
		$("#lastname").parent().append('<span class="texto">Ingresar Apellido</span>');
	}
	else if (/^[a-zA-Z]+$/.test(apellido) == false){
		$("#lastname").parent().append('<span class="texto">Ingresar solo letras</span>');		
	}
	else if (/^[A-Z]+$/.test(apellido[0]) == false){
		$("#lastname").parent().append('<span class="texto">La inicial debe ser mayúscula</span>');
		return false;
	}	
};

function validarContraseña(){
	//password
var password= $("#input-password").val();
if (password == ""){
	$("#input-password").parent().append('<span class="texto">Ingresar Contraseña</span>');
}
else if(password == "123456" || password == "098765" || password == "password"){
	$("#input-password").parent().append('<span class="texto">No puedes utilizar esta contraseña.Es vulnerable</span>');
}		
else if(password.length < 6){
	$("#input-password").parent().append('<span class="texto">La contraseña es muy corta</span>');
	return false
}
};

function validarSelect(){
	//OPCIONES
	var select= $("select").val();
	if (select == 0){
		$("select").parent().append('<span class="texto">Debes seleccionar una opcion</span>');
	}
};

function validarEmail(){			
	var email= $("#input-email").val();
	if (email == ""){
		$("#input-email").parent().append('<span class="texto">Ingresar correo electronico</span>');
		return false;
	}
	if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email)){
			return true;
	} else {
			$("#input-email").parent().append('<span class="texto">No valido</span>');
			return false;
	}
};