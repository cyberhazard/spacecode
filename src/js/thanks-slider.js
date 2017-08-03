import Swiper from 'swiper/dist/js/swiper.min.js';

export const slider = new Swiper('.reviews-slider', {
  pagination: '.reviews-pagination',
  slidesPerView: 3,
  paginationClickable: true,
  spaceBetween: 30,
  breakpoints: {
    // when window width is <= 320px
    740: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    // when window width is <= 480px
    1000: {
      slidesPerView: 2,
      spaceBetween: 0
    },
    // when window width is <= 640px
    1200: {
      slidesPerView: 3,
      spaceBetween: 0
    }
  }
});
