let perPage = 5;

const listPagination = document.querySelector(".js-characters")
const buttonShowMore = document.querySelector(".characters__btn-load")
const liElement = document.querySelector(".characters__item")

buttonShowMore.addEventListener("click", (e) => {
    perPage += 3
})

function makingPagination(characters) {
    const test = listPagination.children
    return test
}
makingPagination()

console.log(makingPagination())