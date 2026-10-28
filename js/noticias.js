var myCarousel = document.querySelector('#carruselVoluntariado');
if (myCarousel) {
    var carousel = new bootstrap.Carousel(myCarousel, {
        interval: 4000,
        ride: 'carousel'
    });
}