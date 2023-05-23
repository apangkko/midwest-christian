// ---------- Shrink Header ---------- //
// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};
const header = document.getElementsByTagName("header");

function scrollFunction() {
  console.log(header);
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    header[0].classList.add("sticky");
  } else {
    header[0].classList.remove("sticky");
  }
}

// ---------- Nav Toggle ---------- //
const nav = document.querySelector(".nav");
const toggleBtn = document.querySelector(".toggle");

function toggle() {
  nav.classList.toggle("active");
  toggleBtn.classList.toggle("active");
}

window.addEventListener("resize", (e) => {
  if(window.innerWidth >= 920) {
    nav.classList.remove("active");
    toggleBtn.classList.remove("active");
  }
});

// ---------- Swiper JS ---------- //
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
