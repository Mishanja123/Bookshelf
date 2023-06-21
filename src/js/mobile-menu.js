const { Loading } = require('notiflix');

(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const burger = document.querySelector('.burger');
  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');
    document.body.classList.toggle('mt');
    openMenuBtn.classList.toggle(`.active_btn`);
    burger.classList.toggle(`cross-burger`);
    burger.nextElementSibling.classList.toggle(`cross-burger`);

    // const scrollLockMethod = !isMenuOpen
    //   ? 'disableBodyScroll'
    //   : 'enableBodyScroll';
    // bodyScrollLock[scrollLockMethod](document.body);
  };

  openMenuBtn.addEventListener('click', toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) { 
      return;
    } 
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    document.body.classList.remove('mt');
    if(burger.classList.contains((`cross-burger`))){
      burger.classList.toggle(`cross-burger`);
      burger.nextElementSibling.classList.toggle(`cross-burger`)
    }
  });
})();

const navLink = document.querySelectorAll('.nav-link');
const sL = document.querySelector('.shopping-section');

if (sL) {
  navLink[1].classList.toggle('nav-selected');
} else {
  navLink[0].classList.toggle('nav-selected');
}

const navLinkM = document.querySelectorAll('.nav-link-m');

if (sL) {
  navLinkM[1].classList.toggle('nav-selected-m');
} else {
  navLinkM[0].classList.toggle('nav-selected-m');
}
