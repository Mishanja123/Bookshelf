const a = document.querySelector('.nav-list');

function addSelect() {
  if (
    window.location.pathname === '/index.html' ||
    window.location.pathname === '/'
  ) {
    [...a.children].map(el => el.classList.remove('nav-link-selected'));
    [...a.children][0].classList.add('nav-link-selected');
  } else if (window.location.pathname === '/shopping.html') {
    [...a.children].map(el => el.classList.remove('nav-link-selected'));
    [...a.children][1].classList.add('nav-link-selected');
  }
}
addSelect();
