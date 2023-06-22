import { showImg } from '../hidden-img/hidden-img'; // i.a.
import { refs } from '../DOM-refs/refs-DOM.js'; // i.a.
import { createMarkup } from '../takeLocalItems/filter-local';
import { createMarkup } from '../../rendershoppinglist';


export const takeLocalItems = () => {
  const getLocalStorage = localStorage.getItem('bookCard');
  const parseLocalStorage = JSON.parse(getLocalStorage);
  return parseLocalStorage;
};
export function localStorageCheck() {
  const localItem = takeLocalItems();
  showImg(localItem);
  createTemplate(localItem);
}
const createTemplate = value => {
  refs.articlesContainer.innerHTML = createMarkup(value);
};
