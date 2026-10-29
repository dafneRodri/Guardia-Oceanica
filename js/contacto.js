document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.querySelector(".formulario-registro");
    if (!formulario) return;

    //elemento para mensajes dinámicos en el DOM
    const divAlerta = document.createElement("div");
    divAlerta.id = "mensajeServidor";
    
    const grupoBoton = document.querySelector(".grupo-boton-envio");
    formulario.insertBefore(divAlerta, grupoBoton);

    formulario.addEventListener("submit", function (e) {
        e.preventDefault();

        const campoNombre = document.querySelector("#campoNombre");
        const campoCorreo = document.querySelector("#campoCorreo");
        const campoContrasena = document.querySelector("#campoContrasena");
        const campoPerfil = document.querySelector("#campoPerfil");
        const campoMensaje = document.querySelector("#campoMensaje");
        const campoTerminos = document.querySelector("#campoTerminos");

        const valorNombre = campoNombre.value.trim();
        const valorCorreo = campoCorreo.value.trim();
        const valorContrasena = campoContrasena.value.trim();
        const valorPerfil = campoPerfil.value;
        const valorMensaje = campoMensaje.value.trim();
        const aceptoTerminos = campoTerminos.checked;

        divAlerta.className = "alerta-mensaje";

        if (valorNombre === "" || valorCorreo === "" || valorContrasena === "" || valorPerfil === "" || valorMensaje === "") {
            mostrarAlerta("Por favor, completa todos los campos obligatorios.", "alerta-error");
            return;
        }

        const formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formatoCorreo.test(valorCorreo)) {
            mostrarAlerta("Por favor, introduce un correo electrónico válido.", "alerta-error");
            campoCorreo.focus();
            return;
        }

        if (valorContrasena.length < 6) {
            mostrarAlerta("La contraseña debe tener al menos 6 caracteres.", "alerta-error");
            campoContrasena.focus();
            return;
        }

        if (!aceptoTerminos) {
            mostrarAlerta("Debes aceptar el aviso de privacidad para continuar.", "alerta-error");
            campoTerminos.focus();
            return;
        }

        mostrarAlerta("¡Registro completado con éxito! Bienvenido a Guardia Oceánica.", "alerta-exito");
        formulario.reset();
    });

    function mostrarAlerta(mensaje, claseEstado) {
        divAlerta.textContent = mensaje;
        divAlerta.classList.add("mostrar", claseEstado);
    }
});