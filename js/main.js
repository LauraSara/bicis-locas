function validarEmail(valor) {
  if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(valor)){
  		return true;
  } else {
  		return false;
  }
}


function validateForm(){
	/* Escribe tú código aquí */
	//alert ("funciona");
	$(".form-signup").submit(function(){	
	var nombre= $("#name").val();
	if (nombre == ""){
		$("#name").parent().append("<span>Ingresar Nombre</span>");
		return false;
	}
	else if (nombre == numeros){
		$("#name").parent().append("<span>Utilizar solo letras</span>");
		return false;
		}
	}      
		}
	}      
		}
	}      
		}
	});

	//apellido
	var apellido= $("#lastname").val();
		if (apellido == ""){
			$("#lastname").parent().append("<span>Ingresar Apellido</span>");
			return false;
		}

		else if (/^[a-zA-Z]+$/.test(apellido) == false){
			$("#lastname").parent().append("<span>Ingresar solo letras</span>");			
			return true;
		}

		//password
		var password= $("#input-password").val();
		if (password == ""){
			$("#input-password").parent().append("<span>Ingresar Contraseña</span>");
			return false;
		}
	else if(password == "123456"){
		$("#input-password").parent().append("<span>No puedes utilizar esta contraseña.Es vulnerable</span>");
		return false;
		}		
	}
		}		
	}
		else if(password.length < 6){
			$("#input-password").parent().append("<span>La contraseña es muy corta</span>");
			return false;
		}

		//OPCIONES
		var select= $("select").val();
		if (select == 0){
			$("select").parent().append("<span>Debes seleccionar una opcion</span>");
			return false;
		}


	});
		
		//pattern="[A-Za-z]{4-16}"

	$(".form-signup").submit(function(){			
		var email= $("#input-email").val();
		if (email == ""){
			$("#input-email").parent().append("<span>Ingresar correo electronico</span>");
			return false;
		}
		else if($("#input-email").val().indexOf('@', 0) == -1 || $("#input-email").val().indexOf('.', 0) == -1) {
				$("#input-email").parent().append("<span>Correo no valido</span>");
				return false;
				//arreglar el formato
		}
	});

}
//hasta aqui todo bien
//falta la 2
//falta la 3



