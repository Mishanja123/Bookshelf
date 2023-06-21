const refs = {
  articlesContainer: document.querySelector('.shopping-list'),
  descriptionBlock: document.querySelector('.shopping-description-block'),
  deleteBtn: document.querySelector('.delete-button'),
};

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

export function createMarkup(books) {
        return books
            .map(
                book =>
                    `<li data-id="${book._id}" class="shopping-item">
            <div class="shopping-card-thumb">
                <img
                    src="${book.book_image}"
                    width=""
                    height=""
                    alt=""
                    class="book-img"
                />
            </div>
            <div class="shopping-card-content">
                <h2 class="book-title">${book.title}</h2>
                    <p class="book-category">${book.list_name}</p>
                <p class="book-description cut-text">
                    ${book.description}
                </p>
                <p class="book-author">${book.author}</p>
                <ul class="buy-links-list list">
                    <li class="buy-links-item">
                         <a target="_blank"
                            href="https://goto.applebooks.apple/9781250144058?at=10lIEQ"
                            class="buy-link"
                        >
                            <img
                                src="./src/images/modal-images/image3.png"
                                width=""
                                height=""
                                alt=""
                            />
                         </a>
                    </li>
                    <li class="buy-links-item">
                        <a target="_blank"
                         href="https://goto.applebooks.apple/9781250144058?at=10lIEQ"
                            class="buy-link"
                         >
                            <img
                            src="./src/images/modal-images/image2.png"
                            width=""
                            height=""
                            alt=""
                            />
                        </a>
                    </li>
                    <li class="buy-links-item">
                         <a target="_blank"
                            href="https://goto.applebooks.apple/9781250144058?at=10lIEQ"
                            class="buy-link"
                        >
                            <img
                            src="./src/images/modal-images/image3.png"
                            width=""
                            height=""
                            alt=""
                            />
                        </a>
                    </li>
                </ul>
            </div>
            <button btn-close-id="${book._id}" class="delete-button" type="button">
            </button>
        </li>                 
        `
            )
            .join('');
    }

// function buyLink(arr) {
//   return  arr.map(buy => buy.url)
// }
