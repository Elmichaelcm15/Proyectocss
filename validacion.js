// Función para validar que el texto ingresado esté en mayúsculas
function validarMayusculas(inputElement) {
    // Extrae el valor actual del campo de entrada de texto representado por inputElement
    // y lo almacena en la variable valor para su posterior uso en la función
    const valor = inputElement.value;
    
    // Verifica si el valor no está en mayúsculas
    if (valor !== valor.toUpperCase()) {
        // Cambia el color del borde del campo de entrada a rojo para indicar error
        inputElement.style.borderColor = "red";
        // Muestra una alerta indicando que los nombres y apellidos deben estar en mayúsculas
        alert("Nombres y apellidos deben estar en mayúsculas.");
        // Retorna false para indicar que la validación ha fallado
        return false;
    } else {
        // Si el valor está en mayúsculas, cambia el borde a verde para indicar éxito
        inputElement.style.borderColor = "green";
        // Retorna true para indicar que la validación fue exitosa
        return true;
    }
}

// Función para validar el formato de correo electrónico
function validarEmail(inputElement) {
    // Extrae el valor actual del campo de entrada de correo electrónico
    const valor = inputElement.value;
    
    // Expresión regular para validar el formato de un correo electrónico
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    
    // Verifica si el valor no coincide con la expresión regular de correo electrónico
    if (!emailRegex.test(valor)) {
        // Cambia el borde del campo a rojo para indicar error
        inputElement.style.borderColor = "red";
        // Muestra una alerta indicando que el correo electrónico no es válido
        alert("Ingrese un correo electrónico válido.");
        // Retorna false para indicar que la validación ha fallado
        return false;
    } else {
        // Si el correo es válido, cambia el borde a verde para indicar éxito
        inputElement.style.borderColor = "green";
        // Retorna true para indicar que la validación fue exitosa
        return true;
    }
}

// Función para validar que el usuario sea alfanumérico y de hasta 8 caracteres
function validarUsuario(inputElement) {
    // Extrae el valor actual del campo de entrada de usuario
    const valor = inputElement.value;
    
    // Expresión regular para validar que el usuario sea alfanumérico y de hasta 8 caracteres
    const usuarioRegex = /^[a-zA-Z0-9]{1,8}$/;
    
    // Verifica si el valor no cumple con el formato del usuario
    if (!usuarioRegex.test(valor)) {
        // Cambia el borde del campo a rojo para indicar error
        inputElement.style.borderColor = "red";
        // Muestra una alerta indicando que el usuario debe ser alfanumérico y tener hasta 8 caracteres
        alert("El usuario debe ser alfanumérico y tener hasta 8 caracteres.");
        // Retorna false para indicar que la validación ha fallado
        return false;
    } else {
        // Si el usuario es válido, cambia el borde a verde para indicar éxito
        inputElement.style.borderColor = "green";
        // Retorna true para indicar que la validación fue exitosa
        return true;
    }
}

// Función para validar que las contraseñas coincidan
function validarContraseñas(inputContraseña, inputConfirmarContraseña) {
    // Extrae el valor de ambos campos de contraseña
    const contraseña = inputContraseña.value;
    const confirmarContraseña = inputConfirmarContraseña.value;
    
    // Verifica si las contraseñas no coinciden
    if (contraseña !== confirmarContraseña) {
        // Cambia el borde de ambos campos a rojo para indicar error
        inputContraseña.style.borderColor = "red";
        inputConfirmarContraseña.style.borderColor = "red";
        // Muestra una alerta indicando que las contraseñas no coinciden
        alert("Las contraseñas no coinciden.");
        // Retorna false para indicar que la validación ha fallado
        return false;
    } else {
        // Si las contraseñas coinciden, cambia el borde a verde para indicar éxito
        inputContraseña.style.borderColor = "green";
        inputConfirmarContraseña.style.borderColor = "green";
        // Retorna true para indicar que la validación fue exitosa
        return true;
    }
}

// Función para validar todo el formulario
function validarFormulario() {
    // Llama a la función validarMayusculas para validar los nombres
    const nombresValidos = validarMayusculas(document.getElementById("nombres"));
    // Llama a la función validarMayusculas para validar los apellidos
    const apellidosValidos = validarMayusculas(document.getElementById("apellidos"));
    // Llama a la función validarEmail para validar el correo
    const emailValido = validarEmail(document.getElementById("email"));
    // Llama a la función validarEmail para validar el campo de confirmación del correo
    const confirmarEmailValido = validarEmail(document.getElementById("confirmar-email"));
    // Llama a la función validarUsuario para validar el usuario
    const usuarioValido = validarUsuario(document.getElementById("usuario"));
    // Llama a la función validarContraseñas para validar que las contraseñas coincidan
    const contraseñasValidas = validarContraseñas(
        document.getElementById("contrasena"),
        document.getElementById("repetir-contrasena")
    );

    // Retorna true solo si todos los campos son válidos, de lo contrario retorna false
    return nombresValidos && apellidosValidos && emailValido && confirmarEmailValido && usuarioValido && contraseñasValidas;
}

// Asociar la función de validación al evento "submit" del formulario
const formulario = document.querySelector("form");
// Se agrega un event listener para el evento "submit" del formulario
formulario.addEventListener("submit", function (event) {
    // Si la validación del formulario no es exitosa
    if (!validarFormulario()) {
        // Evita el envío del formulario
        event.preventDefault(); 
    }
});
