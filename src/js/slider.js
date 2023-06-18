import Swiper, { Navigation, Pagination } from 'swiper';
import '../../node_modules/swiper/swiper.css';

const sliderBtn = document.querySelector('.slider-btn');

// sliderBtn.addEventListener('click', () => {
 
// })

 const mySwiperThree = new Swiper('.swiper', {
  direction: 'vertical',
  autoHeight: true,
  slidesPerView: 6,
  watchOverflow: true,
  // spaceBetween: 20,
  slidesPerGroup: 1,
  freeMode: true,
  speed: 800,
  scrollbar: {
   el: '.swiper-scrollbar',
   draggable: true,
  },
  mousewheel: {
   sensitivity: 1,
   eventsTarget: '.swiper-slide'
  }
 });
