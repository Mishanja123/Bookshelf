import {
  marckModal,
  marckCategorieItem,
  marckAllCategories,
  marckUpSideCategories,
} from './marckupcategories.js';
import { booksView } from './sidebarmaincontent.js';
import { fetchBook } from './fetchapis.js';
import { addToLocalStorage, getBookCardToLocalStorage } from './firebase/addLocal.js'
// import {
//   takeLocalItems,
//   localStorageCheck,
// } from './js/shopng-js/takeLocalItems/takeLocalitems.js';


const overlay = document.querySelector('#overlay-modal');
const closeButton = document.querySelector('.js-modal-close');
const modal = document.querySelector('.modal');

const newModal = document.querySelector('.new-modal')
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
  newModal.innerHTML = mark;
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
  const buttonAdd = document.querySelector('.js-btn-add')
  const textAfterButton = document.querySelector('.under-remove-btn-text')
  if (getBookCardToLocalStorage().some(el => el._id === bookId)) {
    buttonAdd.textContent = 'remove from the shopping list'
    textAfterButton.classList.remove('text-hidden')
  } else {
    buttonAdd.textContent = 'add to shopping list'
    textAfterButton.classList.add('text-hidden')
  }
  //   const buttonAdd = document.querySelector('.js-btn-add')
  // const textAfterButton = document.querySelector('.under-remove-btn-text')
  //  if (getBookCardToLocalStorage().some(el => el._id === e.target.dataset.id)) {
  //           buttonAdd.textContent = 'remove from the shopping list'
  //           textAfterButton.classList.remove('text-hidden')
  //         } else {
  //           buttonAdd.textContent = 'add to shopping list'
  //         }
  

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


// function onButtonAdd() {
  // modalCardBtn.addEventListener('click', onClickBtnAddCard);
// }
modal.addEventListener('click', onClickBtnAddCard);



// const wrapperCategories = document.querySelector('.wrapper-categories-box')

// wrapperCategories.addEventListener('click', onLI)


// function onLI(e) {

//   const buttonAdd = document.querySelector('.js-btn-add')
//   const textAfterButton = document.querySelector('.under-remove-btn-text')

//   const liEl = e.target.closest('.outlineli')
//   if (!liEl) return

//   if (getBookCardToLocalStorage().some(el => el._id === liEl.dataset.id)) {
//     buttonAdd.textContent = 'remove from the shopping list'
//     textAfterButton.classList.remove('text-hidden')
//   } else {
//     buttonAdd.textContent = 'add to shopping list'
//     textAfterButton.classList.add('text-hidden')
//   }
// }

function onClickBtnAddCard(e) {
  
  // console.log(getBookCardToLocalStorage().some(el => el._id === e.target.classList.contains('outlineli').dataset.id));
  // if (getBookCardToLocalStorage().some(el => el._id === e.target.classList.contains('outlineli').dataset.id)) {
  //   buttonAdd.textContent = 'remove from the shopping list'
  //   textAfterButton.classList.remove('text-hidden')
  // } else {
  //   buttonAdd.textContent = 'add to shopping list'
  //   textAfterButton.classList.add('text-hidden')
  // }


  if (!e.target.classList.contains('js-btn-add')) return
  
    const booksId = document.querySelector('.book');
    const id = booksId.getAttribute('data-book-id');
    const buttonAdd = document.querySelector('.js-btn-add')
    const textAfterButton = document.querySelector('.under-remove-btn-text')

  // console.log(document.querySelector === e.target.);
    fetchBook(id)
      .then(({ book_image, title, author, description, _id, list_name, buy_links }) => {
        const bookCard = {
          book_image,
          title,
          author,
          description,
          _id,
          list_name,
         buy_links
        };

        // console.log(buttonAdd);
        


        addToLocalStorage(bookCard)
        if (buttonAdd.textContent === 'remove from the shopping list') {
          buttonAdd.textContent = 'add to shopping list'
          textAfterButton.classList.add('text-hidden')
          const a = JSON.parse(localStorage.getItem('bookCard'))
          console.log(a);
          a.map((el) => { 
            if (el._id === buttonAdd.dataset.id) {
              a.splice(el, 1)
            }
          })
          const b = JSON.stringify(a)
          localStorage.removeItem('bookCard')
          localStorage.setItem('bookCard', b)
          return
        }
          // if (getBookCardToLocalStorage().some(el => el._id === e.target.dataset.id)) {
            buttonAdd.textContent = 'remove from the shopping list'
            textAfterButton.classList.remove('text-hidden')
          // } else {
          //   buttonAdd.textContent = 'add to shopping list'
          //   textAfterButton.classList.add('text-hidden')
          // }
       
        
        // modalCardBtn.textContent = 'remove from the shopping list'
      });
}


// const arr = [1, 2, 24, 345, 5, 45, 3465]
// arr.splice(3, 1)
// console.log(arr);