import imgDataOne from "../../img/season-one.jpg";
import imgDataTwo from "../../img/season-two.jpg";
import imgDataThree from "../../img/season-three.jpg";
import imgDataFour from "../../img/season-four.jpg";
import imgDataFive from "../../img/season-five.jpg";
import imgDataSix from "../../img/season-six.jpg";
console.log(imgDataOne);

export const makeMarkUpEpisodes = (data) => {
  console.log(data);
  const elements = data
    .map((element) => {
      let imgUrl = null;
      let season = element.episode.slice(2, 3);
      console.log(season);
      if (season === "1") {
        imgUrl = imgDataOne;
      } else if (season === "2") {
        imgUrl = imgDataTwo;
      } else if (season === "3") {
        imgUrl = imgDataThree;
      } else if (season === "4") {
        imgUrl = imgDataFour;
      } else if (season === "5") {
        imgUrl = imgDataFive;
      } else if (season === "6") {
        imgUrl = imgDataSix;
      }
      const makeEpisodes = `
<li class="episodes__item-type">
            <img src= ${imgUrl} alt="">
            <div class="episodes-overlay">
            <h4 class="episodes__title-type">${element.name}</h4>
             <div class="episdoes__box-flex">
              <div class="episdoes__box">
                <p class="episodes__title-gray">Season</p>
                <p class="episodes__subtitle-season"></p>
              </div>
              <div class="episdoes__box">
                <p class="episodes__title-gray">Air date</p>
                <p class="episodes__subtitle-date">${element.air_date}</p>
              </div>
            </div>
            </div>
          </li>
    `;
      return makeEpisodes;
    })
    .join("");

  return elements;
};
