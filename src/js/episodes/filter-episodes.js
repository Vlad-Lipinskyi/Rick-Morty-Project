import { getEpisodesAPI } from "../api/episodes-api.js";
import { makeMarkUpEpisodes } from "./make-markup-episdoes.js";

const episodesList = document.querySelector(".episodes__list-js");
const seasonSelect = document.querySelector("#episodes-select");

let allEpisodes = [];

const filterEpisodesBySeason = (seasonValue) => {
  if (!seasonValue) {
    return allEpisodes;
  }
  const seasonNumber = {
    "first-season": "1",
    "second-season": "2",
    "third-season": "3",
    "fourth-season": "4",
    "fifth-season": "5",
    "sixth-season": "6",
  }[seasonValue];

  return allEpisodes.filter((episode) => {
    const seasonFromEpisodeCode = episode.episode.slice(2, 3);
    return seasonFromEpisodeCode === seasonNumber;
  });
};

if (seasonSelect !== null) {
  seasonSelect.addEventListener("change", (e) => {
    const selectedSeason = e.target.value;
    const filteredEpisodes = filterEpisodesBySeason(selectedSeason);
    episodesList.innerHTML = makeMarkUpEpisodes(filteredEpisodes);
  });
}

getEpisodesAPI().then((data) => {
  allEpisodes = data.results;
  if (episodesList !== null) {
    episodesList.innerHTML = makeMarkUpEpisodes(allEpisodes);
  }
});
