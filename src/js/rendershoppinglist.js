// const refs = {
//   articlesContainer: document.querySelector('.shopping-list'),
//   descriptionBlock: document.querySelector('.shopping-description-block'),
//   deleteBtn: document.querySelector('.delete-button'),
// };




import image1 from '../images/modal-images/image1.png';
import image2 from '../images/modal-images/image2.png';
import image3 from '../images/modal-images/image3.png';
import removeIcon from '../images/modal-images/iconRemove.png';


export function createMarkup(books) {
    return books.map(book => {
        const { _id, book_image, title, list_name, description, author } = book;

        return `
            <li id="${_id}" data-id="${_id}" class="shopping-item">
                <div class="shopping-card-thumb">
                    <img src="${book_image}" alt="" class="book-img">
                </div>
                <div class="shopping-card-content">
                    <h2 class="book-title">${title}</h2>
                    <p class="book-category">${list_name}</p>
                    <p class="book-description cut-text">${description}</p>
                    <p class="book-author">${author}</p>
                    <ul class="buy-links-list list">
                        <li class="buy-links-item">
                            <a target="_blank" href="https://goto.applebooks.apple/9781250144058?at=10lIEQ" class="buy-link">
                                <img src="${image1}" alt="">
                            </a>
                        </li>
                        <li class="buy-links-item">
                            <a target="_blank" href="https://goto.applebooks.apple/9781250144058?at=10lIEQ" class="buy-link">
                                <img src="${image2}" alt="">
                            </a>
                        </li>
                        <li class="buy-links-item">
                            <a target="_blank" href="https://goto.applebooks.apple/9781250144058?at=10lIEQ" class="buy-link">
                                <img src="${image3}" alt="">
                            </a>
                        </li>
                    </ul>
                </div>
                <button btn-close-id="${_id}" class="delete-button" type="button">
                    <img btn-close-id="${_id}" class="remove-card-img" src="${removeIcon}" alt="">
                </button>
            </li>
        `;
    }).join('');
}