const menuButton = document.getElementById("mobile-menu-button");
const menu = document.getElementById("menu");
const carousel = document.getElementById("carousel");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
let currentIndex = 0;
let autoSlideInterval;

menuButton.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  menuButton.setAttribute("aria-expanded", menu.classList.contains("hidden") ? "false" : "true");
});

document.addEventListener('DOMContentLoaded', function () {
  new Splide('.splide', {
    type: 'loop', 
    perPage: 1,
    perMove: 1,
    gap: '16px',
    breakpoints: {
      640: {
        perPage: 1,
      },
      768: {
        perPage: 2,
      },
      1024: {
        perPage: 3,
      },
    },
    pagination: true,
    arrows: true,
    drag: true,
    autoplay: true,
    interval: 3000,
  }).mount();
});

