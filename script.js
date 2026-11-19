const track = document.getElementById("carouselTrack");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

let currentIndex = 0;

// Determinar cuántas tarjetas se muestran
function getVisibleCards() {

    if (window.innerWidth <= 600) {
        return 1;
    } 

    else if (window.innerWidth <= 900) {
        return 2;
    } 

    else {
        return 3;
    }
}

// Actualizar movimiento del carrusel
function updateCarousel() {

    const cards = track.querySelectorAll(".producto-card");

    const visibleCards = getVisibleCards();

    const maxIndex = cards.length - visibleCards;

    currentIndex = Math.max(0, Math.min(currentIndex, maxIndex));

    const cardWidth = cards[0].offsetWidth;
    const gap = 30;

    track.style.transform =
        `translateX(-${currentIndex * (cardWidth + gap)}px)`;
}

// Botón siguiente
next.addEventListener("click", () => {

    currentIndex++;

    updateCarousel();

});

// Botón anterior
prev.addEventListener("click", () => {

    currentIndex--;

    updateCarousel();

});

// Actualizar cuando cambia el tamaño de pantalla
window.addEventListener("resize", updateCarousel);

// Inicializar carrusel
updateCarousel();