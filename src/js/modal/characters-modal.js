const characterItems = document.querySelectorAll(".characters__item");
const modalBackdrop = document.querySelector(".backdrop");
const closeModalBtn = document.querySelector(".modal__close-btn");
const listCharacters = document.querySelector(".js-characters");

listCharacters.addEventListener("click", (e) => {
  if (e.target.closest(".characters__item")) {
    modalBackdrop.classList.remove("characters-is-hidden");
  }
});

closeModalBtn.addEventListener("click", (e) => {
  modalBackdrop.classList.add("characters-is-hidden");
});
