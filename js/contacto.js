document.addEventListener("DOMContentLoaded", function () {
    const contenedorFormulario = document.querySelector(".formulario-registro");
    const botonEnviar = document.querySelector(".boton-completar-registro");

    if (!contenedorFormulario || !botonEnviar) return;

    const divAlerta = document.createElement("div");
    divAlerta.style.cssText = "margin: 1.2rem 0; padding: 1rem; border-radius: 8px; font-size: 1rem; font-weight: 600; text-align: center; display: none;";
    
    const grupoBoton = document.querySelector(".grupo-boton-envio");
    contenedorFormulario.insertBefore(divAlerta, grupoBoton);

    botonEnviar.addEventListener("click", function (e) {
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


        if (valorNombre === "" || valorCorreo === "" || valorContrasena === "" || valorPerfil === "" || valorMensaje === "") {
            mostrarAlerta("Por favor, completa todos los campos obligatorios del registro.", "error");
            return;
        }

        const formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formatoCorreo.test(valorCorreo)) {
            mostrarAlerta("Por favor, introduce un correo electrónico válido.", "error");
            campoCorreo.focus();
            return;
        }

        if (valorContrasena.length < 6) {
            mostrarAlerta("La contraseña de usuario debe tener al menos 6 caracteres.", "error");
            campoContrasena.focus();
            return;
        }

        if (!aceptoTerminos) {
            mostrarAlerta("Debes aceptar el aviso de privacidad y los términos para continuar.", "error");
            campoTerminos.focus();
            return;
        }

        mostrarAlerta("¡Registro completado con éxito! Bienvenido a las brigadas de Guardia Oceánica.", "exito");

        // Limpiar campos
        campoNombre.value = "";
        campoCorreo.value = "";
        campoContrasena.value = "";
        campoPerfil.selectedIndex = 0;
        campoMensaje.value = "";
        campoTerminos.checked = false;
        
        const modalidadPresencial = document.querySelector("#modalidadPresencial");
        if (modalidadPresencial) modalidadPresencial.checked = true;

        document.querySelectorAll(".opcion-area-interes input").forEach(chk => chk.checked = false);
    });

    function mostrarAlerta(mensaje, tipo) {
        divAlerta.textContent = mensaje;
        divAlerta.style.display = "block";

        if (tipo === "error") {
            divAlerta.style.backgroundColor = "#F8D7DA";
            divAlerta.style.color = "#721C24";
            divAlerta.style.border = "1px solid #F5C6CB";
        } else if (tipo === "exito") {
            divAlerta.style.backgroundColor = "#D4EDDA";
            divAlerta.style.color = "#155724";
            divAlerta.style.border = "1px solid #C3E6CB";
        }
    }
});