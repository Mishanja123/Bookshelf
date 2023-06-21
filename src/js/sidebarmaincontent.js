import {
  marckUpSideCategories,
  marckAllCategories,
  marckCategorieItem,
  marckModal,
  marckCategorieItemMore,
} from './marckupcategories.js';

const sideCategoriesList = document.querySelector('.js_side_categories_list');
const loader = document.querySelector('.wrap');
const categoriesTitle = document.querySelector('.title_categories');

function addLoader() {
  loader.classList.remove('hidden');
  categoriesTitle.classList.add('hidden');
}
function removeLoader() {
  loader.classList.add('hidden');
  categoriesTitle.classList.remove('hidden');
}

export const booksView = document.querySelector('.js_books_view');

async function createMarckUpSideCategories() {
  const mark = await marckUpSideCategories();
  sideCategoriesList.insertAdjacentHTML('beforeend', mark);
}
createMarckUpSideCategories();

async function createMarckAllCategories() {
  booksView.innerHTML = '';
  addLoader();
  const mark = await marckAllCategories();
  booksView.innerHTML = mark;
  removeLoader();
}
createMarckAllCategories();

async function createMarckCategorieItem(target) {
  booksView.innerHTML = '';
  addLoader();
  const mark = await marckCategorieItem(target);
  booksView.innerHTML = mark;
  removeLoader();
}

function createModal(bookId) {
  const mark = marckModal(bookId);
  return mark;
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
  [...e.currentTarget.children].map(el =>
    el.classList.remove('selected-category')
  );
  e.target.parentNode.classList.add('selected-category');
}

// Отрисовка на кнопку See More
booksView.addEventListener('click', onSeeMore);
async function onSeeMore(e) {
  let targetBtn = e.target.classList.contains('load-more-books');
  if (!targetBtn) {
    return;
  }
  let fetchtitle = e.target.closest('.category-books').firstChild.textContent;
  await createMarckCategorieItemMore(fetchtitle);
  e.target.classList.add('no-btn');
  [...e.target.previousSibling.children].map(el =>
    el.classList.remove('hidden')
  );
}

async function createMarckCategorieItemMore(target) {
  const listBooks = document.querySelectorAll('.list-books');
  const a = [...listBooks].filter(el => el.dataset.category === target);
  const mark = await marckCategorieItemMore(target);
  a[0].innerHTML = mark;
}
