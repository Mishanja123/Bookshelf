import {
  marckUpSideCategories,
  marckAllCategories,
  marckCategorieItem,marckModal, marckCategorieItemMore
} from './marckupcategories.js'

const sideCategoriesList = document.querySelector('.js_side_categories_list');
export const booksView = document.querySelector('.js_books_view');

async function createMarckUpSideCategories() {
  const mark = await marckUpSideCategories();
  sideCategoriesList.insertAdjacentHTML('beforeend', mark);
}
createMarckUpSideCategories();

async function createMarckAllCategories() {
  const mark = await marckAllCategories();
  booksView.innerHTML = mark;
}
createMarckAllCategories();

async function createMarckCategorieItem(target) {
  const mark = await marckCategorieItem(target);
  booksView.innerHTML = mark;
}

function createModal(bookId) {
  const mark = marckModal(bookId);
  return mark
}

sideCategoriesList.addEventListener('click', onClick);

async function onClick(e) {
  e.preventDefault();
  let target = e.target.textContent;

  if (!(e.target.tagName === 'A')) {
    return;
  }
  if (target === 'All categories') {
    createMarckAllCategories();
  } else {
    createMarckCategorieItem(target);
  }
}
booksView.addEventListener('click', onBook)

 function onBook(e) {
  // console.log(e.target);
   try {
    bookId = e.target.closest('.outlineli').dataset.id 
   } catch (error) {
     return
   }
  if(!bookId){
    return
  }
  createModal(bookId)
}


// Отрисовка на кнопку See More
// booksView.addEventListener('click', onSeeMore)
// function onSeeMore(e) {
//   let targetBtn = e.target.classList.contains('load-more-books')
//   if (!targetBtn) {
//     return
//   }
//   let fetchtitle = e.target.closest('.category-books').firstChild.textContent
//   console.log(fetchtitle);
//   createMarckCategorieItem(fetchtitle)
// }
// async function createMarckCategorieItem(target) {
//   const listBooks = document.querySelector('.list-books')
//   const mark = await marckCategorieItemMore(target)
//   listBooks.innerHTML = mark;
// }
