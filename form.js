// Form
const questionInput = document.querySelector('[data-js="input-question"]');
const answerInput = document.querySelector('[data-js="input-answer"]');
const tagInput = document.querySelector('[data-js="input-tag"]');
const buttonSubmit = document.querySelector('[data-js="submit-button"]');

const cardUl = document.querySelector('[data-js="card-list"]');

// Create cards
buttonSubmit.addEventListener("click", () => {
  //   create elements
  cardListItem = document.createElement("li");
  cardArticle = document.createElement("article");
  cardQuestion = document.createElement("h2");
  cardAnswer = document.createElement("p");
  cardTag = document.createElement("button");

  //  append
  cardUl.append(cardListItem);
  cardListItem.append(cardArticle);
  cardArticle.append(cardQuestion);
  cardArticle.append(cardAnswer);
  cardArticle.append(cardTag);

  //   add classes and attributes
  cardListItem.classList.add("card-list__item");
  cardArticle.classList.add("card");

  //   give values
  cardQuestion.textContent = questionInput.value;
  cardAnswer.textContent = answerInput.value;
  cardTag.textContent = `#${tagInput.value}`;

  console.log("Button clicked!");
});
