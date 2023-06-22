import { takeLocalItems } from '../takeLocalItems/takeLocalitems';
export const filteredLocalItems = value => {
  const localItem = takeLocalItems();
  const myArr = localItem.filter(item => item._id !== value);
  localStorage.setItem('bookCard', JSON.stringify(myArr));
};
