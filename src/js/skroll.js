let lastScroll = 0;
const defaultOffset = 30;
const header = document.querySelector('.header');

const scrollPosition = () =>
  window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains('hidden');
window.addEventListener('scroll', () => {
  if (scrollPosition() > lastScroll && scrollPosition() > defaultOffset) {
    header.classList.add('hidden');
    //scroll down
  } else if (scrollPosition() < lastScroll && containHide()) {
    header.classList.remove('hidden');
    //scroll up
  }

  lastScroll = scrollPosition();
});