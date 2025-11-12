// @todo: Темплейт карточки
const cardTemplate = document.querySelector("#card-template").content;

// @todo: DOM узлы
const placesList = document.querySelector(".places_list");
const deleteIcon = cardElement.querySelector(".card__delete-icon");

// @todo: Функция создания карточки
function createCardElement(cardData, deleteCallback) {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);

  cardElement.querySelector(".card__title").textContent = cardData.title;
  cardElement.querySelector(".card__description").textContent =
    cardData.description;
  cardElement.querySelector(".card__image").src = cardData.imageUrl;

  const deleteIcon = cardElement.querySelector(".card__delete-icon");
  deleteIcon.addEventListener("click", deleteCallback);

  return cardElement;
}

// @todo: Функция удаления карточки

function deleteCard(cardElement) {
  cardElement.remove();
}

initialCards.forEach((cardData) => {
  const cardElement = createCardElement(cardData, deleteCard);
  placesList.append(cardElement);
});

// @todo: Вывести карточки на страницу

initialCards.forEach((cardData) => {
  const cardElement = createCardElement(cardData, deleteCallback);

  placesList.append(cardElement);
});
