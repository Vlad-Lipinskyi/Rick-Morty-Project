import { getCharactersAPI } from "./api/characters-api";
import { makeMarkUp } from "./index/make-markup";
import { getEpisodesAPI } from "./api/episodes-api";
import { makeMarkUpEpisodes } from "./episodes/make-markup-episdoes";
import "./episodes/filter-episodes";
const charactersList = document.querySelector(".characters__js-fix");
const episodesList = document.querySelector(".episodes__list-js");
console.log(charactersList);

getCharactersAPI().then((data) => {
  const layout = makeMarkUp(data.results);
  if (charactersList !== null) {
    charactersList.innerHTML = layout;
  }
});

getEpisodesAPI().then((data) => {
  if (episodesList !== null) {
    episodesList.innerHTML = makeMarkUpEpisodes(data.results);
  }
});
