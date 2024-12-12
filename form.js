// Form
const formElement = document.querySelector('[data-js="form-element"]');
const questionInput = document.querySelector('[data-js="input-question"]');
const answerInput = document.querySelector('[data-js="input-answer"]');
const tagInput = document.querySelector('[data-js="input-tag"]');
//Card
const cardContainer = document.querySelector('[data-js="form-card-list"]');

function createCard(newCardData) {
  console.log("I am the card creation function!", newCardData);
  //   create elements
  const newCard = document.createElement("li");
  const cardContent = document.createElement("article");
  const cardQuestion = document.createElement("h2");
  const cardAnswer = document.createElement("p");
  const cardTag = document.createElement("span");
  //  append
  cardContainer.append(newCard);
  newCard.append(cardContent);
  cardContent.append(cardQuestion, cardAnswer, cardTag);

  //add classes and attributes
  newCard.classList.add("form-new-card");
  cardContent.classList.add("form-card-content");
  cardQuestion.classList.add("form-card-question");
  cardTag.classList.add("form-card-tag");
  //give values
  cardQuestion.textContent = newCardData.question;
  cardAnswer.textContent = newCardData.answer;
  cardTag.textContent = `#${newCardData.tag}`;
}

// Create cards
formElement.addEventListener("submit", (event) => {
  event.preventDefault();
  const newFormData = new FormData(event.target);
  const data = Object.fromEntries(newFormData);
  console.log(data);
  createCard(data);

  console.log("Form submitted!");
});

//Text Counter
const maxLengthQuestion = questionInput.getAttribute("maxlength");
const maxLengthAnswer = answerInput.getAttribute("maxlength");
const textCounterQuestion = document.querySelector(
  '[data-js="text-counter-question"]'
);
const textCounterAnswer = document.querySelector(
  '[data-js="text-counter-answer"]'
);

questionInput.addEventListener("input", () => {
  const remainingText = maxLengthQuestion - questionInput.value.length;
  textCounterQuestion.textContent = `${remainingText} characters left.`;
});

answerInput.addEventListener("input", () => {
  const remainingText = maxLengthAnswer - answerInput.value.length;
  textCounterAnswer.textContent = `${remainingText} characters left.`;
});
