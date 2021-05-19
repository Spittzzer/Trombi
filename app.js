const carouselSlider = document.querySelector(".carousel-slider");
const carouselImages = document.querySelectorAll(".carousel-slider img");

//select btns

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

//counter
let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlider.style.transform = `translateX(${-size * counter}px)`;

//btn event listeners

nextBtn.addEventListener("click", () => {
  if (counter >= carouselImages.length - 1) {
    return;
  }

  carouselSlider.style.transition = "transform 0.5s ease-in-out";
  counter++;
  carouselSlider.style.transform = `translateX(${-size * counter}px)`;
});

prevBtn.addEventListener("click", () => {
  if (counter <= 0) {
    return;
  }
  carouselSlider.style.transition = "transform 0.5s ease-in-out";
  counter--;
  carouselSlider.style.transform = `translateX(${-size * counter}px)`;
});

carouselSlider.addEventListener("transitioned", () => {});
