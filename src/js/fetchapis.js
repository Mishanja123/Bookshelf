import axios from 'axios';

let targeturl = '';
const options = {
  method: 'get',
  baseURL: 'https://books-backend.p.goit.global/books/',
  url: targeturl,
};

export async function fetchCategoryList() {
  options.url = 'category-list';
  const test = await axios(options).then(rep => rep.data);
  return test
}

export async function fetchCategory(target) {
  options.url = `category?category=${target}`;
  const test = await axios(options).then(rep => rep.data);
  return test
}

export async function fetchBestSellers() {
  options.url = 'top-books';
  const test = await axios(options).then(rep => rep.data);
  return test
}

export async function fetchBook(bookId) {
  options.url = `${bookId}`;
  const test = await axios(options).then(rep => rep)
  return test
}