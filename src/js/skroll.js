let lastScroll = 0;
const defaultOffset = 100;
const header = document.querySelector('.header');

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains('hide');
window.addEventListener('scroll', () => {
    if (scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
        header.classList.add('hide')
        //scroll down
    }
    else if (scrollPosition() < lastScroll && containHide()) {
        header.classList.add('hide')
        //scroll up
    }
    
    
    lastScroll = scrollPosition();
} )