import './js/support.js';
import './js/mobile-menu.js';
import { createMarkup } from './js/rendershoppinglist';
import { marckModal } from './js/marckupcategories.js'

(() => {
  const supportBlock = document.querySelector('.support-block');

  // Close the mobile menu on wider screens if the device orientation changes

  window.matchMedia('(min-width: 1440px)').addEventListener('change', e => {
    if (!e.matches) return;
    supportBlock.style.display = 'block';
  });
  window.matchMedia('(max-width: 1440px)').addEventListener('change', e => {
    if (!e.matches) return;
    supportBlock.style.display = 'none';
  });
})();



const refs = {
  articlesContainer: document.querySelector('.shopping-list'),
  descriptionBlock: document.querySelector('.shopping-description-block'),
  deleteBtn: document.querySelector('.delete-button'),
};

localStorageChek();

function localStorageChek() {
  const getLocalStorage = localStorage.getItem('bookCard');
  const parseLocalStorage = JSON.parse(getLocalStorage);

// console.log(refs.articlesContainer.childNodes.length);
    if (refs.articlesContainer.childNodes.length - 1 === 0) {
        refs.descriptionBlock.classList.remove('visually-hidden');
    }
  refs.articlesContainer.innerHTML = createMarkup(parseLocalStorage);
}





refs.articlesContainer.addEventListener('click', onClickShoppingItem);

function onClickShoppingItem(e) {
    const getLocalStorage = localStorage.getItem('bookCard');
  const parseLocalStorage = JSON.parse(getLocalStorage);

    const btnCloseId = e.target.getAttribute('btn-close-id');
    const myArr = parseLocalStorage.filter(f => f._id !== btnCloseId);

    localStorage.removeItem('bookCard');
  localStorage.setItem('bookCard', JSON.stringify(myArr));
  if (e.target.closest("button") && e.target.nodeName !== "SVG") {
    e.target.parentNode.remove();
    localStorageChek()
  }


      if (parseLocalStorage === []) {
        refs.descriptionBlock.classList.toggle('visually-hidden');
    }
}


// !MODALSHOPPING

function onClickCardShopping() {
marckModal(bookId)
}