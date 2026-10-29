document.addEventListener("DOMContentLoaded", function () {
    const boton = document.querySelector(".boton-suscribirse");
    const correo = document.querySelector(".campo-correo-suscripcion");

    if (!boton || !correo) return;

    boton.addEventListener("click", function (e) {
        e.preventDefault();

        // Si está vacío
        if (correo.value.trim() === "") {
            alert("Por favor, ingresa tu correo.");
            correo.focus();
            return;
        }

        // Si el correo no tiene @ o punto
        if (!correo.value.includes("@") || !correo.value.includes(".")) {
            alert("Escribe un correo válido.");
            correo.focus();
            return;
        }

        alert("¡Suscripción exitosa!");
        correo.value = "";
    });
});