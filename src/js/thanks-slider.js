import Swiper from 'swiper/dist/js/swiper.min.js';

export const slider = new Swiper('.reviews-slider', {
  pagination: '.reviews-pagination',
  slidesPerView: 3,
  paginationClickable: true,
  spaceBetween: 30
});
