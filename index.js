// phew… not a lot going on here. Please add some code!
const buttonBookmark = document.querySelector('[data-js="bookmark"]');
const buttonAnswer = document.querySelector('[data-js="button-answer"]');
const cardAnswer = document.querySelector('[data-js="card__answer"]');

buttonBookmark.addEventListener("click", () => {
  buttonBookmark.classList.toggle("bookmark--active");
});

buttonAnswer.addEventListener("click", () => {
  cardAnswer.classList.toggle("card__answer--active");
  if (cardAnswer.classList.contains("card__answer--active")) {
    buttonAnswer.textContent = "Hide answer";
  } else {
    buttonAnswer.textContent = "Show answer";
  }
});
