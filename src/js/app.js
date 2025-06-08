import { getCharactersAPI } from "./api/characters-api";
import { makeMarkUp } from "./index/make-markup";
import { getEpisodesAPI } from "./api/episodes-api";
import { makeMarkUpEpisodes } from "./episodes/make-markup-episdoes";
const charactersList = document.querySelector(".characters__js-fix")
const episodesList = document.querySelector(".episodes__list-js");
 console.log(charactersList)
getCharactersAPI().then((data) => {
   const layout = makeMarkUp(data.results)
   console.log(layout)
  charactersList.innerHTML = layout;
//   console.log(data);
//   console.log(charactersList);
});

getEpisodesAPI().then((data) => {
  episodesList.innerHTML = makeMarkUpEpisodes(data.results);
//   console.log(data);
//   console.log(episodesList);
});
