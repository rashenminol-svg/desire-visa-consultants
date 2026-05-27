// Simple auto-scroll for gallery
const carousel = document.querySelector('.carousel');
let scrollAmount = 0;

function autoScroll() {
  if (carousel) {
    scrollAmount += 2;
    carousel.scrollLeft = scrollAmount;
    if (scrollAmount >= carousel.scrollWidth - carousel.clientWidth) {
      scrollAmount = 0;
    }
  }
}

setInterval(autoScroll, 50);
