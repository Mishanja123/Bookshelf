import {
  marckUpSideCategories,
  marckAllCategories,
  marckCategorieItem,
} from './marckupcategories.js'

const sideCategoriesList = document.querySelector('.js_side_categories_list');
const booksView = document.querySelector('.js_books_view');

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

async function createMarckCategorieItem() {
  const mark = await marckCategorieItem();
  booksView.innerHTML = mark;
}

sideCategoriesList.addEventListener('click', onClick);

async function onClick(e) {
  e.preventDefault();
  target = e.target.textContent;

  if (!(e.target.tagName === 'A')) {
    return;
  }
  if (target === 'All categories') {
    createMarckAllCategories();
  } else {
    createMarckCategorieItem();
  }
}
