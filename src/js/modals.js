import {
  marckModal,
  marckCategorieItem,
  marckAllCategories,
  marckUpSideCategories,
} from './marckupcategories.js';
import { booksView } from './sidebarmaincontent.js';
import { fetchBook } from './fetchapis.js';
import { addToLocalStorage } from './firebase/addLocal.js';
const modalCardBtn = document.querySelector('.add-book-button');

const overlay = document.querySelector('#overlay-modal');
const closeButton = document.querySelector('.js-modal-close');
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-content');
let bookId = '';

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

modalCardBtn.addEventListener('click', onClickBtnAddCard);

// function onClickBtnAddCard() {
//   const booksId = document.querySelector('.book');
//   const id = booksId.getAttribute('data-book-id');

//   fetchBook(id).then(
//     ({ book_image, title, author, description, _id, list_name, buy_links }) => {
//       const bookCard = {
//         book_image,
//         title,
//         author,
//         description,
//         _id,
//         list_name,
//         buy_links,
//       };
//       addToLocalStorage(bookCard);
//       // modalCardBtn.textContent = 'remove from the shopping list'
//     }
//   );
// }

function onClickBtnAddCard() {
  const booksId = document.querySelector('.book');
  const id = booksId.getAttribute('data-book-id');

  const isBookAdded = localStorage.getItem(id);
  if (isBookAdded) {
    
    return;
  }

  fetchBook(id).then(
    ({ book_image, title, author, description, _id, list_name, buy_links }) => {
      const bookCard = {
        book_image,
        title,
        author,
        description,
        _id,
        list_name,
        buy_links,
      };
      addToLocalStorage(bookCard);
      modalCardBtn.textContent = 'Remove from shopping list';
      const successMessage = document.createElement('p');
      successMessage.textContent =
        "Congratulations! You have added the book to the shopping list. To delete, press the button 'Remove from the shopping list'.";
      successMessage.classList.add('success-message');
      modalContent.appendChild(successMessage);
    }
  );
  // Зміна тексту кнопки на "Add to shopping list"
  modalCardBtn.textContent = 'Add to shopping list';

  const successMessage = document.querySelector('.success-message');
  if (successMessage) {
    successMessage.remove();
  }
}

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

  // Скидання тексту кнопки на "Add to shopping list"
  modalCardBtn.textContent = 'Add to shopping list';
  closeModal();
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
