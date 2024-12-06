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

prevBtn.addEventListener("click", () => {
  currentIndex = currentIndex > 0 ? currentIndex - 1 : 0;
  updateCarousel();
  resetAutoSlide();
});

nextBtn.addEventListener("click", () => {
  const totalSlides = carousel.children.length;
  currentIndex = currentIndex < totalSlides - 1 ? currentIndex + 1 : totalSlides - 1;
  updateCarousel();
  resetAutoSlide();
});

function updateCarousel() {
  const slideWidth = carousel.children[0].clientWidth;
  const offset = currentIndex * -slideWidth;
  carousel.style.transform = `translateX(${offset}px)`;
}

function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    const totalSlides = carousel.children.length;
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
  }, 3000); 
}

function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  startAutoSlide();
}


startAutoSlide();
