document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll("#carruselVoluntariado .carousel-item");
    const indicadores = document.querySelectorAll("#carruselVoluntariado .carousel-indicators button");
    const btnAnterior = document.querySelector("#btnAnterior");
    const btnSiguiente = document.querySelector("#btnSiguiente");
    
    if (items.length === 0) return;

    let indiceActual = 0;
    let intervaloCarrusel;

    function mostrarSlide(indice) {
        items.forEach(item => {
            item.classList.remove("active");
            item.style.display = "none";
        });
        indicadores.forEach(ind => ind.classList.remove("active"));

        if (indice >= items.length) {
            indiceActual = 0;
        } else if (indice < 0) {
            indiceActual = items.length - 1;
        } else {
            indiceActual = indice;
        }

        items[indiceActual].classList.add("active");
        items[indiceActual].style.display = "block";
        if (indicadores[indiceActual]) {
            indicadores[indiceActual].classList.add("active");
        }
    }

    mostrarSlide(indiceActual);

    if (btnSiguiente) {
        btnSiguiente.addEventListener("click", function (e) {
            e.preventDefault();
            mostrarSlide(indiceActual + 1);
            reiniciarIntervalo();
        });
    }
    if (btnAnterior) {
        btnAnterior.addEventListener("click", function (e) {
            e.preventDefault();
            mostrarSlide(indiceActual - 1);
            reiniciarIntervalo();
        });
    }
    indicadores.forEach((indicador, index) => {
        indicador.addEventListener("click", function () {
            mostrarSlide(index);
            reiniciarIntervalo();
        });
    });
    // esto es para que se cambien cada 4s
    function iniciarIntervalo() {
        intervaloCarrusel = setInterval(() => {
            mostrarSlide(indiceActual + 1);
        }, 4000);
    }
    function reiniciarIntervalo() {
        clearInterval(intervaloCarrusel);
        iniciarIntervalo();
    }
    iniciarIntervalo();
});