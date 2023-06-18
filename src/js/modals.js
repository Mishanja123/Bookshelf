import { fetchBook } from './fetchapis.js';

const modalContent = document.querySelector('.modal-content');

export async function markBooItem() {
  const markup = await fetchBook().then(resp => {
    console.log(resp)
    return resp
      .map(({ book_image, title, author, description, _id }) => {
        return `
        <div class="book" data-book-id="${_id}">
        <img class="modal-image" src="${book_image}" alt="Book cover" />
          <h3 class="modal-title">${title}</h3>
          <p class="modal-author">${author}</p>
          <p class="modal-description">${description}</p>
        </div>`;
      })
      .join('');
  });
  console.log(markup);
  return markup;
}

async function createBookItem(book) {
  const mark = await markBooItem(book);
  modalContent.innerHTML = mark;
}

modalContent.addEventListener('click', onClick);

async function onClick(e) {
  e.preventDefault();
  const target = e.target;
  
  if (target.classList.contains('book')) {
  const bookId = target.dataset.bookId;
  const book = await fetchBook(bookId);
  createBookItem(book);
  }
  }