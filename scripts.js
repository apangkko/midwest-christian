// Swiper JS
var swiper = new Swiper(".testiSlider", {
  loop: true,
  slidesPerView: 1,
  breakpoints: {
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
    },
    920: {
      slidesPerView: 3,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
