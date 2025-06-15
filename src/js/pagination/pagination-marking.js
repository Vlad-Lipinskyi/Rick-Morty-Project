let perPage = 4;
let currentIndex = 0;

const listPagination = document.querySelector(".js-characters");
const buttonShowMore = document.querySelector(".characters__btn-load");

function showItems(limit) {
  const items = Array.from(listPagination.children);

  items.forEach((item, index) => {
    item.style.display = index < limit ? "block" : "none";
  });
}

buttonShowMore.addEventListener("click", () => {
  perPage += 4;
  showItems(perPage);
});

function makingPagination() {
  showItems(perPage);
}