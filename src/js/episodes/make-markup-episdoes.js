export const makeMarkUp = (data) => {
  const elements = data.map((element) => {
    const makeCharacters = `
<li class="episodes__item-type">
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
          </li>
    `;
    return makeCharacters
  }).join("");

  return elements
};

