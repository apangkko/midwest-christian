// ---------- Shrink Header ---------- //
// When the user scrolls down 50px from the top of the document, resize the header's font size
let prevScrollpos = window.pageYOffset;
const header = document.getElementsByTagName("header");

window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  let w = window.innerWidth;
  if (prevScrollpos > currentScrollPos) {
    header[0].style.top = "0";
  } else {
    if (w >= 920) {
      header[0].style.top = "-153px";
    } else {
      header[0].style.top = "-93px";
    }
  }
  prevScrollpos = currentScrollPos;
};


// ---------- Nav Toggle ---------- //
const nav = document.querySelector(".nav");
const toggleBtn = document.querySelector(".toggle");

function toggle() {
  nav.classList.toggle("active");
  toggleBtn.classList.toggle("active");
}

window.addEventListener("resize", (e) => {
  if (window.innerWidth >= 920) {
    nav.classList.remove("active");
    toggleBtn.classList.remove("active");
  }
});

// ---------- Swiper JS ---------- //
// Home - Testimonial
const swiper1 = new Swiper(".testiSlider", {
  loop: true,
  slidesPerView: 'auto',
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

// About - Facilities
const swiper2 = new Swiper(".facilitiesSlider", {
  loop: true,
  slidesPerView: 1.5,
  spaceBetween: 16,
  centeredSlides: true,
  breakpoints: {
    // when window width is >= 768px
    768: {
      slidesPerView: 2.5,
    },
    920: {
      slidesPerView: 3.5,
    },
  },
  autoplay: {
    delay: 3000,
},
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});