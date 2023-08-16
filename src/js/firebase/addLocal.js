export function addToLocalStorage(bookCard) {
  const all = getBookCardToLocalStorage();
  if (all.some(el => el._id === bookCard._id)) {
    return
  }
  all.push(bookCard);
  localStorage.setItem('bookCard', JSON.stringify(all));
}

export function getBookCardToLocalStorage() {
  return JSON.parse(localStorage.getItem('bookCard') || '[]');
}