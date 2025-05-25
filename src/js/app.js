import {getCharactersAPI} from "./api/characters-api"
import {makeMarkUp} from "./index/make-markup";

getCharactersAPI().then((data) => {
// console.log(data.results);
// const charactersList = document.querySelector(".characters__list").innerHTML = makeMarkUp(data.results)
// makeMarkUp(data.results)
const charactersList = document.querySelector(".characters__list");
charactersList.innerHTML = makeMarkUp(data.results)
// const test = makeMarkUp(data.results)
console.log(data)
console.log(charactersList);
});