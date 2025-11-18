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

 


const buttons = document.querySelectorAll('.profile__edit-button, .profile__add-button');
buttons.forEach(button => {
  button.addEventListener('click', openModal);
});


function openModal(event) {
  const targetPopup = event.target.dataset.popup; // Получаем идентификатор popup из атрибута data-popup кнопки
  const popup = document.querySelector(`.popup_type_${targetPopup}`);
  popup.style.display = 'block';
}

// Функция для закрытия модального окна
function closeModal() {
  document.querySelector('.popup').style.display = 'none';
}


// Привязываем событие к крестику для закрытия модального окна
document.querySelector('.popup__close').addEventListener('click', closeModal);





// Получаем все попапы
const popups = document.querySelectorAll('.popup');

// Проходим по каждому попапу и добавляем обработчик события 'click'
popups.forEach(popup => {
  popup.addEventListener('click', function(event) {
    // Если клик был сделан по самому попапу (но не по его содержимому), закрываем попап
    if (event.target === popup) {
      popup.style.display = 'none';
    }
  });
});


//закрываем попапы с помощью клавиши Esc
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    const popups = document.querySelectorAll('.popup');
    popups.forEach(popup => {
      popup.style.display = 'none';
    });
  }
});



