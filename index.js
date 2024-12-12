// Home
const buttonBookmark = document.querySelector('[data-js="bookmark"]');
const buttonAnswer = document.querySelector('[data-js="button-answer"]');
const cardAnswer = document.querySelector('[data-js="card__answer"]');

// Bookmark button
buttonBookmark.addEventListener("click", () => {
  buttonBookmark.classList.toggle("bookmark--active");
});

// Show/Hide answer button
buttonAnswer.addEventListener("click", () => {
  cardAnswer.classList.toggle("card__answer--active");
  if (cardAnswer.classList.contains("card__answer--active")) {
    buttonAnswer.textContent = "Hide answer";
  } else {
    buttonAnswer.textContent = "Show answer";
  }
});
