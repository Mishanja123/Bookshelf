import './js/support';
import './js/mobile-menu.js';
import './js/skroll.js';
// import './js/firebase/login-modal.js';

const newModal = document.querySelector('.new-modal')

const textAfterButton = document.querySelector('.under-remove-btn-text')
import './css/shopping-page/support-shoping-page.css';
import { marckModal } from './js/marckupcategories.js';

import { refs } from './js/shopng-js/DOM-refs/refs-DOM.js';
import {
  takeLocalItems,
  localStorageCheck,
} from './js/shopng-js/takeLocalItems/takeLocalitems.js';
import { filteredLocalItems } from './js/shopng-js/takeLocalItems/filter-local.js';

// (() => {
//   const supportBlock = document.querySelector('.support-block');

//   // Close the mobile menu on wider screens if the device orientation changes

//   window.matchMedia('(min-width: 1440px)').addEventListener('change', e => {
//     if (!e.matches) return;
//     supportBlock.style.display = 'block';
//   });
//   window.matchMedia('(max-width: 1440px)').addEventListener('change', e => {
//     if (!e.matches) return;
//     supportBlock.style.display = 'none';
//   });
// })();

// refs.cardRemoveBtn.addEventListener('click', onRemoveCard);

function onRemoveCard(e) {
  const idBtnRemove = refs.cardRemoveBtn.getAttribute('data-id');
  const elementToRemove = document.getElementById(`${idBtnRemove}`);
  elementToRemove.remove();
  filteredLocalItems(idBtnRemove);
  localStorageCheck();
  onToggleModal();
}

refs.closeButton.addEventListener('click', onClickBtnlogin);
refs.overlay.addEventListener('click', closeClickBackdrop);

function onClickBtnlogin() {
  onToggleModal();
}

function closeClickBackdrop(e) {
  if (e.currentTarget === e.target) {
    onToggleModal();
  }
}

function onCloseModalEsc(e) {
  if (e.key === 'Escape') {
    onToggleModal();
    document.removeEventListener('keydown', onCloseModalEsc);
  }
}

function onToggleModal() {
  refs.modal.classList.toggle('active');
  refs.overlay.classList.toggle('active');
  refs.overlay.classList.toggle('js-modal-close');
}

localStorageCheck();

refs.articlesContainer.addEventListener('click', onClickShoppingItem);

async function onClickShoppingItem(e) {
  const btnCloseId = e.target.getAttribute('btn-close-id');
  const liId = e.target.closest('li').dataset.id;

  filteredLocalItems(btnCloseId);

  if (e.target.closest('li') && !e.target.closest('button')) {
    marckModal(liId).then(resp => {
      newModal.innerHTML = resp;
      const buttonAdd = document.querySelector('.js-btn-add')
      refs.modal.classList.toggle('active');
      refs.overlay.classList.toggle('active');
      buttonAdd.textContent = 'remove from the shopping list';
      buttonAdd.addEventListener('click', onbtnRemove)
      document.addEventListener('keydown', onCloseModalEsc);
      // buttonAdd.textContent = 'remove from the shopping list';
    });
  }

  if (e.target.closest('button')) {
    e.target.parentNode.remove();
    localStorageCheck();
    if (JSON.parse(localStorage.getItem('bookCard')).length === 0) {
    refs.descriptionBlock.classList.remove('visually-hidden')
  }
  }
}

function onbtnRemove(e) {
  refs.modal.classList.toggle('active');
  refs.overlay.classList.toggle('active');
  refs.overlay.classList.toggle('js-modal-close');
  const btnCloseId = e.target.getAttribute('data-id');
  const liId = [...document.querySelectorAll(`.shopping-item`)]
  liId.map(el => {
    if (el.dataset.id === btnCloseId) {
      el.remove()
    }
  })
  filteredLocalItems(btnCloseId);
  localStorageCheck();

  if (JSON.parse(localStorage.getItem('bookCard')).length === 0) {
    refs.descriptionBlock.classList.remove('visually-hidden')
  }
}