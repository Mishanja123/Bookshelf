import { fetchBook } from './fetchapis.js';
import {
  marckModal,
  marckCategorieItem,
  marckAllCategories,
  marckUpSideCategories,
} from './marckupcategories.js';
import { booksView } from './sidebarmaincontent.js';

const overlay = document.querySelector('#overlay-modal');
const closeButton = document.querySelector('.js-modal-close');
const modal = document.querySelector('.modal');

function closeModal() {
  modal.classList.remove('active');
  overlay.classList.remove('active');

  closeButton.removeEventListener('click', closeModal);
  overlay.removeEventListener('click', closeModal);
  document.removeEventListener('keydown', handleKeyPress);
}

function handleKeyPress(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
}

booksView.addEventListener('click', onBook);

function onBook(e) {
  try {
    bookId = e.target.closest('.outlineli').dataset.id;
  } catch (error) {
    return;
  }
  if (!bookId) {
    return;
  }
  marckModal(bookId);
  modal.classList.add('active');
  overlay.classList.add('active');

  closeButton.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);
  document.addEventListener('keydown', handleKeyPress);
  closeButton.removeEventListener('click', onBook);
  overlay.removeEventListener('click', onBook);
}

