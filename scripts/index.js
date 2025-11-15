function createCardElement(cardData, deleteCallback) {
  // Клонируем шаблон карточки
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);

  // Устанавливаем значения вложенных элементов
  const image = cardElement.querySelector(".card__image");
  image.src = cardData.imageUrl;
  image.alt = cardData.title;

  cardElement.querySelector(".card__title").textContent = cardData.title;

  // Добавляем обработчик клика к иконке удаления
  const deleteButton = cardElement.querySelector(".card__delete-button");
  deleteButton.addEventListener("click", () => deleteCallback(cardElement));

  return cardElement;
}

// функция для вывода карточек из массива на страницу
const placesList = document.querySelector(".places__list");
const cardsData = [
  {
    imageUrl:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
    title: "Архыз",
  },
  {
    imageUrl:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
    title: "Челябинская область",
  },
  {
    imageUrl:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
    title: "Иваново",
  },
  {
    imageUrl:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
    title: "Камчатка",
  },
  {
    imageUrl:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
    title: "Холмогорский район",
  },
  {
    imageUrl:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
    title: "Байкал",
  },
];

function deleteHandler(card) {
  card.remove();
}

cardsData.forEach((cardData) => {
  const cardElement = createCardElement(cardData, deleteHandler);
  placesList.appendChild(cardElement);
});
