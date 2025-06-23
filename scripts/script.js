"use strict"

// Задание 3.2

const headerLogoContainer = document.querySelector('.header__logo-container');
let tooltip = null;

tooltip = document.createElement('div');
tooltip.className = 'tooltip';
tooltip.textContent = 'Чашка Прозы';

headerLogoContainer.appendChild(tooltip);

headerLogoContainer.addEventListener('mouseenter', () => {
  tooltip.classList.add('active');
});

headerLogoContainer.addEventListener('mouseleave', () => {
  tooltip.classList.remove('active');
});

// Задание 3.3

const descriptionText = "Место проведения";
const imgElement = document.querySelector('.advantages__image');
const descElement = document.getElementById('advantages__description-text');

imgElement.addEventListener('mouseenter', () => {
  descElement.textContent = descriptionText;
});

imgElement.addEventListener('mouseleave', () => {
  descElement.textContent = "";
});

// Задание 3.4

const modalWindowController = ({ modal, btnOpen, btnClose, time = 300 }) => {
  const buttonElem = document.querySelector(btnOpen);
  const modalElem = document.querySelector(modal);

  modalElem.style.cssText = `
    display: flex;
    visibility: hidden;
    opacity: 0;
    transition: opacity ${time}ms ease-in-out;
  `;

  const closeModalWindow = (event) => {
    const target = event.target;

    if (
      target === modalElem ||
      (btnClose && target.closest(btnClose)) ||
      (event instanceof KeyboardEvent && event.code === "Escape")
    ) {
      modalElem.style.opacity = 0;

      setTimeout(() => {
        if (modalElem.parentNode) {
          modalElem.style.visibility = "hidden";
        }
      }, time);

      window.removeEventListener("keydown", closeModalWindow);
    }
  };

  const openModalWindow = () => {
    modalElem.style.visibility = "visible";
    modalElem.style.opacity = 1;
    window.addEventListener("keydown", closeModalWindow);
  };

  buttonElem.addEventListener("click", openModalWindow);
  modalElem.addEventListener("click", closeModalWindow);
};

modalWindowController({
  modal: ".modal-window",
  btnOpen: ".button__window",
  btnClose: ".modal-window__close",
});

const cardsContainer = document.querySelector('.swiper-wrapper');

if (cardsContainer) {
    const dataTitleCards = ['Антон К.', 'Мария Л.', 'Екатерина П.'];
    const titleCards = cardsContainer.querySelectorAll('.review__name');
    
    titleCards.forEach((item, index) => {
        item.textContent = dataTitleCards[index];
    });
}

// Задание 3.5

const headerMenu = document.querySelector('.header__nav');
if (headerMenu) {

  const headerList = headerMenu.querySelector('.nav__list');
  const menuData = {
    link1: {
      link: '#1',
      title: 'О нас',
    },
    link2: {
      link: '#2',
      title: 'Достоинства',
    },
    link3: {
      link: '#3',
      title: 'Контакты',
    },
    link4: {
      link: '#4',
      title: 'Отзывы',
    }
  }
  const createLink = (UrlLink, title) => {
    const link = `<li class="nav__item"><a href="${UrlLink}" class="nav__link">${title}</a></li>`;
    return link;
  }
  for (const linkItem in menuData) {
    const link = menuData [linkItem];
    const linkIndex = createLink (link.link, link.title);
    headerList.insertAdjacentHTML ('beforeend', linkIndex);

  }

}

// Задание 3.6

const cardsCon = document.querySelector(".section__hosts");

if (cardsCon) {
  const cardList = cardsCon.querySelector(".hosts__list");
  const apiUrl = "data.json";

  const createCard = (imageUrl, iconAlt, iconWidth, iconHeight, title) => {
    return `<li class="hosts__list-item">
              <img class="hosts__img" 
                   src="${imageUrl}" 
                   alt="${iconAlt}"
                   width="${iconWidth}" 
                   height="${iconHeight}">
              <h2 class="hosts__title">${title}</h2>
            </li>`;
  };

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((item) => {
        const cardElement = createCard(
          item.image,
          item.iconAlt,
          item.iconWidth,
          item.iconHeight,
          item.title
        );
        cardList.insertAdjacentHTML("beforeend", cardElement);
      });
    })
    .catch((error) => {
      console.error("Ошибка при загрузке данных:", error);
    });
    
}

const preloader = document.querySelector(".preloader");
const wrapper = document.querySelector(".wrapper__content");

if (preloader && wrapper) {
  setTimeout (() => {

    preloader.style.opacity = "0";
    preloader.style.visibility = "hidden";

    wrapper.style.display = "block";

    preloader.remove();
  }, 3000);
}

// Задание 3.7

var swiper = new Swiper(".mySwiper", {
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
});
