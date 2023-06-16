import axios, { Axios } from 'axios';

import {
  marckUpSideCategories,
  marckAllCategories,
  marckCategorieItem,
} from './marckCategories';

const sideCategoriesList = document.querySelector('.js_side_categories_list');
const js_books_view = document.querySelector('.js_books_view');

async function createMarckUpSideCategories() {
  const mark = await marckUpSideCategories();
  sideCategoriesList.insertAdjacentHTML('beforeend', mark);
}
createMarckUpSideCategories();

async function createMarckAllCategories() {
  const mark = await marckAllCategories();
  js_books_view.innerHTML = mark;
}
createMarckAllCategories();

async function createMarckCategorieItem() {
  const mark = await marckCategorieItem();
  js_books_view.innerHTML = mark;
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
