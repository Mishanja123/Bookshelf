// const refs = {
//   articlesContainer: document.querySelector('.shopping-list'),
//   descriptionBlock: document.querySelector('.shopping-description-block'),
//   deleteBtn: document.querySelector('.delete-button'),
// };

// refs.deleteBtn.addEventListener('click', clearArticleContainer)

// function fetchData(books) {
//     if (books === []) {
//       refs.descriptionBlock.classList.remove('visually-hidden');
//     return;
//   }
//   refs.descriptionBlock.classList.add('visually-hidden');
//   appendArticleMarkup(books);
// }

// function appendArticleMarkup(books) {
//   refs.articlesContainer.insertAdjacentHTML('beforeend', createMarkup(books));
// }

// function clearArticleContainer(e) {
//   e.preventDefault();

//   e.currentTarget.parentNode.innerHTML = '';
// }

// function createMarkup(books) {
//   const markup = books
//     .map(
//       book =>
//         `<li class="shopping-item">
//             <div class="shopping-card-thumb">
//                 <img
//                     src="${book.image}"
//                     width=""
//                     height=""
//                     alt=""
//                     class="book-img"
//                 />
//             </div>
//             <div class="shopping-card-content">
//                 <h2 class="book-title">${book.title}</h2>
//                 <p class="book-category">${book.category}</p>
//                 <p class="book-description cut-text">
//                     ${book.description}
//                 </p>
//                 <p class="book-author">${book.author}</p>
//                 <ul class="buy-links-list list">
//                     <li class="buy-links-item">
//                          <a
//                             href="${book.buy - links[0]}"
//                             class="buy-link"
//                         >
//                             <img
//                                 src="/src/images/modal-images/image1.png"
//                                 width=""
//                                 height=""
//                                 alt=""
//                             />
//                          </a>
//                     </li>
//                     <li class="buy-links-item">
//                         <a
//                          href="${book.buy - links[1]}"
//                             class="buy-link"
//                          >
//                             <img
//                             src="/src/images/modal-images/image2.png"
//                             width=""
//                             height=""
//                             alt=""
//                             />
//                         </a>
//                     </li>
//                     <li class="buy-links-item">
//                          <a
//                             href="${book.buy - links[2]}"
//                             class="buy-link"
//                         >
//                             <img
//                             src="/src/images/modal-images/image3.png"
//                             width=""
//                             height=""
//                             alt=""
//                             />
//                         </a>
//                     </li>
//                 </ul>
//             </div>
//             <button class="delete-button" type="button">
//                 <svg class="icon" width="16" height="16">
//                     <use href="/src/images/sprite.svg#icon-delete"></use>
//                 </svg>
//             </button>
//         </li>                 
//         `
//     )
//     .join('');
//   return markup;
// }
