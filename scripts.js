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

