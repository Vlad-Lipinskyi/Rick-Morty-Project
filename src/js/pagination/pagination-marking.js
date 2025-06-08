let perPage = 5;
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
  perPage += 3;
  showItems(perPage);
});

function makingPagination() {
  showItems(perPage);
}

makingPagination();