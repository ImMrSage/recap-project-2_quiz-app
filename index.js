// phew… not a lot going on here. Please add some code!
const buttonBookmark = document.querySelector('[data-js="bookmark"]');

buttonBookmark.addEventListener("click", () => {
  buttonBookmark.classList.toggle("bookmark--active");
});
