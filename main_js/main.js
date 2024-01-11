// Слайдеры
$(document).ready(function(){
  $('.reviews__slider').slick({
    appendArrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  });

  $('.hero__slider').slick({
    appendArrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  });
});

// Инициализация переменных
let subBtn = document.querySelector('.mailing__form-btn');
let popup = document.querySelector('.mailing__popup');
let popupName = document.querySelector('.mailing__popup-title');
let popupText = document.querySelector('.mailing__popup-text');
let popupCloseBtn = document.querySelector('.mailing__popup-close');
let active = document.querySelector('.active');
let hiddenBlocks = document.querySelectorAll('.hidden');

//Благодарность за подписку на рассылку
subBtn.addEventListener('click', function() {
  let inputEmail = document.querySelector('.mailing__form-input').value;
  if (inputEmail.includes('@') && inputEmail.includes('.')) {
    popup.classList.toggle('active');
    popupName.innerHTML = inputEmail + ", спасибо за подписку!";
    popupText.innerHTML = 'Теперь Вы будете получать эксклюзивные предложениями и первыми узнавать о наших новинках.';
  }
  else {
    popup.classList.toggle('active');
    popupName.innerHTML = 'Вы не ввели электронную почту';
    popupText.innerHTML = '';
  }
});

// Закрытие popup при нажатии на крестик
popupCloseBtn.addEventListener('click', function() {
  popup.classList.toggle('active');
});

// Плавное проявление первого блока на странице при загрузке
window.addEventListener('load', function() {
  hiddenBlocks.forEach((block) => {
    if (isElementInViewport(block)) {
      block.classList.add('visible');
    }
  });
});

// Плавное проявление блоков на странице при скролле
window.addEventListener('scroll', function() {
  hiddenBlocks.forEach((block) => {
    if (isElementInViewport(block)) {
      block.classList.add('visible');
    }
  });
});

// Функция, проверяющая находится ли секция на экране пользователя
function isElementInViewport(element) {
  let rect = element.getBoundingClientRect();
  return (
      rect.top <= window.innerHeight && rect.bottom >= 0
  );
}