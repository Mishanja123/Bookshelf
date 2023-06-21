import './js/support.js';
import './js/mobile-menu.js';

(() => {
  const supportBlock = document.querySelector('.support-block');

  // Close the mobile menu on wider screens if the device orientation changes

  window.matchMedia('(min-width: 1440px)').addEventListener('change', e => {
    if (!e.matches) return;
    supportBlock.style.display = 'block';
  });
  window.matchMedia('(max-width: 1440px)').addEventListener('change', e => {
    if (!e.matches) return;
    supportBlock.style.display = 'none';
  });
})();
