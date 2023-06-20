import axios from 'axios';
import Notiflix from 'notiflix';
let targeturl = '';
const options = {
  method: 'get',
  baseURL: 'https://books-backend.p.goit.global/books/',
  url: targeturl,
};

export async function fetchCategoryList() {
  options.url = 'category-list';
  const test = await axios(options).then(rep => rep.data).catch(error => {
    console.log(error.message);
    Notiflix.Notify.failure('Bed request')
  } );
  return test;
}

export async function fetchCategory(target) {
  options.url = `category?category=${target}`;
  const test = await axios(options).then(rep => rep.data).catch(error => {
    console.log(error.message);
    Notiflix.Notify.failure('Bed request')
  } );
  return test;
}

export async function fetchBestSellers() {
  options.url = 'top-books';
  const test = await axios(options).then(rep => rep.data).catch(error => {
    console.log(error.message);
    Notiflix.Notify.failure('Bed request')
  } );
  return test;
}

export async function fetchBook(bookId) {
  options.url = `${bookId}`;
  const test = await axios(options).then(rep => rep.data).catch(error => {
    console.log(error.message);
    Notiflix.Notify.failure('Bed request')
  } );
  return test;
}
