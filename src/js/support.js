import { support_array } from './data-from-support';

const supportEl = document.querySelector('ul.support-list');

const supportUkraineMarkup = support_array
  .map(({ title, url, img, id }, index) => {
    return `<li class="support-item"><span class="item-number">${addNum(
      index + 1
    )}</span>
     <a class="support-link global-link" href=${url} target="_blank">
  <img src=${img} class="support-img support-img-${id}"  alt="${title}">
</a>
</li>
    `;
  })
  .join('');

supportEl.insertAdjacentHTML('afterbegin', supportUkraineMarkup);

function addNum(value) {
  return value.toString().padStart(2, '0');
}

const supportBtn = document.querySelector('.js-support-btn');
let isScrolledToEnd = false;
supportBtn.addEventListener('click', onScrollBtn);

function onScrollBtn() {
  if (isScrolledToEnd) {
    supportEl.scrollTop = 0;
    supportBtn.classList.remove('support-button-rotate');
  } else {
    supportEl.scrollTop = supportEl.scrollHeight;
    supportBtn.classList.add('support-button-rotate');
  }
  
  isScrolledToEnd = !isScrolledToEnd;
};


if (document.querySelector('.shopping-header')) {
  const a = document.querySelector('.support-block')
  a.classList.add('support-block-n')
}