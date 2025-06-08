import {getCharactersAPI} from "./api/characters-api"
import {makeMarkUp} from "./index/make-markup";

getCharactersAPI().then((data) => {
const charactersList = document.querySelector(".js-characters");
charactersList.innerHTML = makeMarkUp(data.results)
console.log(data)
console.log(charactersList);
});