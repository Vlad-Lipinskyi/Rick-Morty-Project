export const makeMarkUp = (data) => {
  const elements = data.map((element) => {
    const makeCharacters = `
    <li class="characters__item">
              <img
                src="${element.image}"
                alt="characters"
                class="characters__img"
              />
              <h4 class="characters__name">${element.name}</h4>
              <div class="characters__box">
                <p class="characters__subtitle-gray">Origin: </p>
                <p class="characters__subtitle">${element.origin.name === "unknown" ? "" : element.origin.name}</p>
              </div>
              <div class="characters__box">
                <p class="characters__subtitle-gray">Location: </p>
                <p class="characters__subtitle">${element.location.name === "unknown" ? "" : element.location.name}</p>
              </div>
          </li>
    `;
    return makeCharacters
  }).join("");

  return elements
};

// <a href="#" class="characters__link"></a>
