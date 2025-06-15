const modal = document.querySelector(".backdrop-episodes");
const openBtns = document.querySelectorAll(".episodes__item-type"); 
const closeBtn = document.querySelector(".modal__close");

openBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    modal.classList.remove("episodes-is-hidden");
  });
});

closeBtn.addEventListener("click", () => {
  modal.classList.add("episodes-is-hidden");
});


