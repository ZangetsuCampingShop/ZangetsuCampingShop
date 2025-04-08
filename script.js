function contactarWhatsapp() {
    const telefono = "522283927134";
    const mensaje = encodeURIComponent("Hola, estoy interesado en un articulo de Zangetsu Camping Shop.");
    window.open(`https://wa.me/${telefono}?text=${mensaje}`, '_blank');
}

// Variable global para llevar el control de la slide activa
let slideIndex = 0;

// Función para mover el slider
function moverSlider(direction) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    // Eliminar la clase "activo" de la slide actual
    slides[slideIndex].classList.remove('activo');

    // Calcular el nuevo índice basado en la dirección del movimiento
    slideIndex += direction;

    // Asegurarse de que el índice se mantenga dentro del rango de slides
    if (slideIndex < 0) {
        slideIndex = totalSlides - 1; // Si se pasa de la primera slide, vuelve a la última
    } else if (slideIndex >= totalSlides) {
        slideIndex = 0; // Si se pasa de la última slide, vuelve a la primera
    }

    // Agregar la clase "activo" a la nueva slide
    slides[slideIndex].classList.add('activo');

    // Mover el contenedor del slider (con animación)
    const sliderContainer = document.getElementById('sliderContainer');
    sliderContainer.style.transform = `translateX(-${slideIndex * 100}%)`; // Mueve el slider para mostrar la slide correcta
}
