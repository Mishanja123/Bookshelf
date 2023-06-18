import { fetchCategoryList, fetchBestSellers, fetchCategory, fetchBook} from './fetchapis.js';

const titleCategories = document.querySelector('.title_categories');

export function marckUpSideCategories() {
  const marcup = fetchCategoryList().then(resp => {
    return resp
      .map(
        ({ list_name }) => `
      <li>
      <a href="#">${list_name}</a>
      </li>`
      )
      .join('');
  });

  return marcup;
}

export function marckAllCategories() {
  const marcup = fetchBestSellers().then(resp => {
    return resp
      .map(({ list_name, books }) => {
        const allCategoriesTitlePage = `Best Sellers Books`;
        const startTitle = allCategoriesTitlePage
          .split(' ')
          .splice(0, allCategoriesTitlePage.split(' ').length - 1)
          .join(' ');
        const endTitle =
          allCategoriesTitlePage.split(' ')[
            allCategoriesTitlePage.split(' ').length - 1
          ];
        titleCategories.innerHTML = `${startTitle} <span class="category_title_last_word">${endTitle}<span>`;
        return (
          ` <li class="category-books"><h2 class="adition-category-title">${list_name}</h2><ul class="list-books">` +
          books
            .map(
              ({ book_image = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fru.freepik.com%2Fpremium-psd%2Fblank-cover-book-mockup_6814948.htm&psig=AOvVaw1pv5Qa3fm2txSvUlVovAqz&ust=1687133787207000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKCwj6LFy_8CFQAAAAAdAAAAABAF', author = 'anonymous author', title= 'book without title', description , _id }) =>
                `<li class="outlineli" data-id="${_id}">
                <img class="book_temp" src="${book_image}" width="335" heigth="485" loading="lazy" alt="${title}">
                <div class="book-info">
                <h2 class="book-info-title">${title}</h2>
                <p class="book-info-autor">${author}</p>
                </div>
                </li>`
            )
            .join('') +
          `</ul><button class="load-more-books">see more</button></li>`
        );
      })
      .join('');
  });

  return marcup;
}

export function marckCategorieItem(target) {
  const marcup = fetchCategory(target).then(resp => {
    return resp
      .map(({ list_name, book_image  = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fru.freepik.com%2Fpremium-psd%2Fblank-cover-book-mockup_6814948.htm&psig=AOvVaw1pv5Qa3fm2txSvUlVovAqz&ust=1687133787207000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKCwj6LFy_8CFQAAAAAdAAAAABAF', title  = 'book without title', author  = 'anonymous author', description, _id }) => {
        const startTitle = list_name
          .split(' ')
          .splice(0, list_name.split(' ').length - 1)
          .join(' ');
        const endTitle = list_name.split(' ')[list_name.split(' ').length - 1];
        titleCategories.innerHTML = `${startTitle} <span class="category_title_last_word">${endTitle}<span>`;
        return `
        <li class="outlineli" data-id="${_id}">
        <img class="book_temp" src="${book_image}" width="335" heigth="485" loading="lazy" alt="${title}">
        <div class="book-info">
        <h2 class="book-info-title">${title}</h2>
        <p class="book-info-autor">${author}</p>
        </div>
        </li>`;
      })
      .join('');
  });
  return marcup;
}

// Отрисовка на кнопку See More
// export async function marckCategorieItemMore(target) {
//   const marcup = await fetchCategory(target).then(resp => {
//     return resp
//       .map(({ list_name, book_image, title, author, description, _id }) => {
//         const startTitle = list_name
//           .split(' ')
//           .splice(0, list_name.split(' ').length - 1)
//           .join(' ');
//         const endTitle = list_name.split(' ')[list_name.split(' ').length - 1];
//         titleCategories.innerHTML = `${startTitle} <span class="category_title_last_word">${endTitle}<span>`;
//         return `
//         <li class="outlineli" data-id="${_id}">
//         <img class="book_temp" src="${book_image}" width="335" heigth="485" loading="lazy" alt="${title}">
//         <div class="book-info">
//         <h2 class="book-info-title">${title}</h2>
//         <p class="book-info-autor">${author}</p>
//         </div>
//         </li>`;
//       })
//       .join('');
//   });
//   return marcup;
// }




export function marckModal(bookId) {
  // const marcup =
    return fetchBook(bookId).then(({ data: { _id, book_image } }) => console.log(`<li>${_id}</li><img src="${book_image}>"`));
  // return marcup;
}