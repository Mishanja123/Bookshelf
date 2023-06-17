function fetchBook() {
  const url = 'https://books-backend.p.goit.global/books/{642fd89ac8cf5ee957f12361}';

  return fetch(url).then(responce => {
    if (!responce.ok) {
      throw new Error(responce.status);
    }
    console.log(responce);
    return responce.json();
  });
}
