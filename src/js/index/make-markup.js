export const makeMarkUp = (data) => {
  const elements = data
    .map((element) => {
      const cutDimension = () => {
        let cutText;
        if (element.origin.name.includes("(Replacement Dimension)")) {
          const checkIndex = element.origin.name.indexOf(
            "(Replacement Dimension)"
          );
          cutText = element.origin.name.slice(0, checkIndex);
          return cutText;
        } else {
          return element.origin.name;
        }
      };

      const cutDimensionLocation = () => {
        let cutTextLocation;
        if (element.location.name.includes("(Replacement Dimension)")) {
          const checkIndex = element.location.name.indexOf(
            "(Replacement Dimension)"
          );
          cutTextLocation = element.location.name.slice(0, checkIndex);
          return cutTextLocation;
        } else {
          return element.location.name;
        }
      };

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
                <p class="characters__subtitle">${
                  element.origin.name === "unknown" ? "" : cutDimension()
                }</p>
              </div>
              <div class="characters__box">
                <p class="characters__subtitle-gray">Location: </p>
                <p class="characters__subtitle">${
                  element.location.name === "unknown"
                    ? ""
                    : cutDimensionLocation()
                }</p>
              </div>
          </li>
    `;
      return makeCharacters;
    })
    .join("");

  return elements;
};