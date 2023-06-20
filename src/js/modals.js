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
const modalContent = document.querySelector('.modal-content');
let bookId = ''
function closeModal() {
  modal.classList.remove('active');
  overlay.classList.remove('active');
  document.body.style.overflow = '';

  closeButton.removeEventListener('click', closeModal);
  overlay.removeEventListener('click', closeModal);
  document.removeEventListener('keydown', handleKeyPress);
}

function handleKeyPress(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
}

async function createMarckModal(bookId) {
  const mark = await marckModal(bookId);
  modalContent.innerHTML = mark;
}
booksView.addEventListener('click', onBook);

async function onBook(e) {
  try {
    bookId = e.target.closest('.outlineli').dataset.id;
  } catch (error) {
    return;
  }
  if (!bookId) {
    return;
  }
  await createMarckModal(bookId);

//   closeButton.addEventListener('click', closeModal);
//   overlay.addEventListener('click', closeModal);
//   document.addEventListener('keydown', handleKeyPress);
//   closeButton.removeEventListener('click', onBook);
//   overlay.removeEventListener('click', onBook);
// }

// const addButton = document.querySelector('.add-book-button');
// addButton.addEventListener('click', changeBtnText);

// function changeBtnText() {
//     if (this.textContent === 'add to shopping list') {
//       this.textContent = 'remove from the shopping list';
//     } else {
//       this.textContent = 'Add to shopping list';
//     } return
//   };
  async function addClass() {
    modal.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';

    closeButton.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);
    document.addEventListener('keydown', handleKeyPress);
    closeButton.removeEventListener('click', onBook);
    overlay.removeEventListener('click', onBook);
  }
  addClass();
}
