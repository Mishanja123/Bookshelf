import { fetchCategoryList, fetchBestSellers, fetchCategory} from './fetchapis.js';

const titleCategories = document.querySelector('.title_categories');

export async function marckUpSideCategories() {
  const marcup = await fetchCategoryList().then(resp => {
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

export async function marckAllCategories() {
  const marcup = await fetchBestSellers().then(resp => {
    return resp
      .map(({ list_name, books }) => {
        allCategoriesTitlePage = `Best Sellers Books`;
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
          `<li><p>${list_name}</p><ul>` +
          books
            .map(
              ({ book_image, author, title, description , _id }) =>
                `<li class="outlineli" data-id="${_id}">
                <img class="book_temp" src="${book_image}" width="335" heigth="485" loading="lazy" alt="${title}">
                <h2>${title}</h2>
                <p>${author}</p>
                </li>`
            )
            .join('') +
          `</ul><button>Load More</button></li>`
        );
      })
      .join('');
  });

  return marcup;
}

export async function marckCategorieItem() {
  const marcup = await fetchCategory().then(resp => {
    return resp
      .map(({ list_name, book_image, title, author, description, _id }) => {
        const startTitle = list_name
          .split(' ')
          .splice(0, list_name.split(' ').length - 1)
          .join(' ');
        const endTitle = list_name.split(' ')[list_name.split(' ').length - 1];
        titleCategories.innerHTML = `${startTitle} <span class="category_title_last_word">${endTitle}<span>`;
        return `
        <li class="outlineli" data-id="${_id}">
        <img class="book_temp" src="${book_image}" width="335" heigth="485" loading="lazy" alt="${title}">
        <h2>${title}</h2>
        <p>${author}</p>
        </li>`;
      })
      .join('');
  });
  return marcup;
}
