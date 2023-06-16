import axios, { Axios } from 'axios';

let targeturl = '';
const options = {
  method: 'get',
  baseURL: 'https://books-backend.p.goit.global/books/',
  url: targeturl,
};

export function fetchCategoryList() {
  options.url = 'category-list';
  return axios(options).then(rep => rep.data);
}

export function fetchCategory() {
  options.url = `category?category=${target}`;
  return axios(options).then(rep => rep.data);
}

export function fetchBestSellers() {
  options.url = 'top-books';
  return axios(options).then(rep => rep.data);
}

export function fetchBook() {
  options.url = `${bookId}`;
  return axios(options).then(rep => rep.data);
}