// Constants
const slides = document.querySelectorAll(".slide__image");
const totalSlides = slides.length;
const leftButton = document.getElementById("left-arrow");
const rightButton = document.getElementById("right-arrow");

// Variables
let index = 0;
let sliderDebounce = false;

// ScrollReveal
ScrollReveal().reveal(".slider__text", {
  origin: "bottom",
  distance: "50px",
  duration: 1250,
  easing: "cubic-bezier(0.5, 0, 0, 1)",
});

ScrollReveal().reveal(".arrow__wrapper", {
  origin: "bottom",
  distance: "50px",
  duration: 1250,
  delay: 175,
  easing: "cubic-bezier(0.5, 0, 0, 1)",
});

// Setup Slides
slides.forEach((slide, slideIndex) => {
  if (slideIndex === 0) {
    slide.classList.add("active");
  } else {
    slide.classList.add("after-active");
  }
});
function showSlide(newIndex) {
  // Remove active class from current slide
  slides[index].classList.remove("active");
  slides[index].classList.add("after-active");

  // Update the index
  index = newIndex;

  // Add active class to the new slide
  slides[index].classList.remove("after-active");
  slides[index].classList.add("active");
}

rightButton.addEventListener("click", () => {
  if (!sliderDebounce) {
    sliderDebounce = true;

    let newIndex = (index + 1) % totalSlides;
    showSlide(newIndex);

    setTimeout(() => {
      sliderDebounce = false;
    }, 1000);
  }
});

leftButton.addEventListener("click", () => {
  if (!sliderDebounce) {
    sliderDebounce = true;

    let newIndex = (index - 1 + totalSlides) % totalSlides;
    showSlide(newIndex);

    setTimeout(() => {
      sliderDebounce = false;
    }, 1000);
  }
});

var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 2000, // Waktu delay dalam milidetik (3 detik)
    disableOnInteraction: false, // Autoplay tidak berhenti saat pengguna berinteraksi
  },
  speed: 1000, // Durasi transisi antar slide dalam milidetik (1 detik)
});
