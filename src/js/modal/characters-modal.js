const characterItems = document.querySelectorAll(".characters__item");
const modalBackdrop = document.querySelector(".backdrop");
const closeModalBtn = document.querySelector(".modal__close-btn");
const listCharacters = document.querySelector(".characters__js-fix");

console.log(listCharacters);

listCharacters.addEventListener("click", (e) => {
  if (e.target.closest(".characters__item")) {
    if (modalBackdrop !== null) {
      modalBackdrop.classList.remove("characters-is-hidden");
      closeModalBtn.addEventListener("click", (e) => {
        modalBackdrop.classList.add("characters-is-hidden");
      });
    }
  }
});
