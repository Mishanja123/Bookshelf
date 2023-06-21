export function addToLocalStorage(bookCard) {
  const all = getBookCardToLocalStorage();
  all.push(bookCard);
  localStorage.setItem('bookCard', JSON.stringify(all));
}

export function getBookCardToLocalStorage() {
  return JSON.parse(localStorage.getItem('bookCard') || '[]');
}