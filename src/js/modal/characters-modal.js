const characterItems = document.querySelectorAll(".characters__item");
const modal = document.querySelector(".backdrop");
const closeModalBtn = document.querySelector(".modal__close-btn");

characterItems.forEach(item => {
  item.addEventListener("click", () => {
    modal.classList.remove("characters-is-hidden");
  });
});

closeModalBtn.addEventListener("click", () => {
  modal.classList.add("characters-is-hidden");
});
