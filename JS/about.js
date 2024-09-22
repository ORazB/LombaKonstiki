// LocomotiveScroll
const scroll = new LocomotiveScroll({
  smoothMobile: true,
});

// ScrollReveal
ScrollReveal().reveal(".about__container", {
  origin: "bottom",
  distance: "50px",
  duration: 1000,
  delay: 0,
  easing: "cubic-bezier(0.5, 0, 0, 1)",
});

ScrollReveal().reveal(".book__container", {
  origin: "bottom",
  distance: "50px",
  duration: 1000,
  delay: 0,
  easing: "cubic-bezier(0.5, 0, 0, 1)",
});

ScrollReveal().reveal(".page__section.section", {
  origin: "bottom",
  distance: "50px",
  duration: 1000,
  delay: 0,
  easing: "cubic-bezier(0.5, 0, 0, 1)",
});

ScrollReveal().reveal(".page__description", {
  origin: "bottom",
  distance: "50px",
  duration: 1000,
  delay: 175,
  easing: "cubic-bezier(0.5, 0, 0, 1)",
});

document.querySelectorAll(".qna-button").forEach((button) => {
  button.addEventListener("click", () => {
    const answerId = button.getAttribute("data-answer");
    const qnaAnswer = document.getElementById(answerId);

    if (qnaAnswer.style.height === "0px" || qnaAnswer.style.height === "") {
      qnaAnswer.style.height = qnaAnswer.scrollHeight + "px";
      button.style.transform = "rotate(180deg)";
    } else {
      qnaAnswer.style.height = "0px";
      button.style.transform = "rotate(0deg)";
    }
  });
});

// Text Rotation
const texts = document.querySelectorAll(".book__text h3");
let index = 0;

function showNextText() {
  const currentText = texts[index];
  const nextIndex = (index + 1) % texts.length;
  const nextText = texts[nextIndex];

  currentText.classList.remove("text-active");
  currentText.classList.add("text-after-active");

  nextText.classList.remove("text-after-active");
  nextText.classList.add("text-active");

  index = nextIndex;
}

showNextText();
setInterval(showNextText, 2000);
