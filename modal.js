 // Функция для открытия модального окна
function openModal() {
  document.querySelector('.popup').style.display = 'block';
}

// Функция для закрытия модального окна
function closeModal() {
  document.querySelector('.popup').style.display = 'none';
}


// Привязываем событие к кнопке открытия модального окна
document.querySelector('.profile__edit-button').addEventListener('click', openModal);

// Привязываем событие к крестику для закрытия модального окна
document.querySelector('.popup__close').addEventListener('click', closeModal);


