const carouselInner = document.querySelector(".carousel-inner");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentIndex = 0;
let intervalId;

function showSlide(index) {
  if (index < 0) {
    index = 2;
  } else if (index > 2) {
    index = 0;
  }
  currentIndex = index;
  carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function startAutoSlide() {
  intervalId = setInterval(nextSlide, 3000); // Change slide every 3 seconds
}

function stopAutoSlide() {
  clearInterval(intervalId);
}

prevBtn.addEventListener("click", () => {
  stopAutoSlide();
  showSlide(currentIndex - 1);
});

nextBtn.addEventListener("click", () => {
  stopAutoSlide();
  showSlide(currentIndex + 1);
});

carouselInner.addEventListener("mouseenter", stopAutoSlide);
carouselInner.addEventListener("mouseleave", startAutoSlide);

// Initial slide and auto-slide
showSlide(currentIndex);
startAutoSlide();
