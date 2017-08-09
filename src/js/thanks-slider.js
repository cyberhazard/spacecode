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

export const lightBox = () => {
  const images = [...document.querySelectorAll('.slider__loop')];
  if(images.length === 0) return null
  const lb = document.createElement('div');
  const img = new Image();
  lb.style.cssText = `position: fixed;top: 0;left: 0;width: 100%;height: 100%;display: none;justify-content: center;align-items: center; background-color: rgba(0,0,0,0.87); z-index: 10;`;
  img.style.cssText = 'wax-width: 84%; max-height: 84%';
  document.body.appendChild(lb);
  lb.appendChild(img)
  images.forEach(image=>{
    image.onclick = (e) => {
      lb.style.display = 'flex';
      img.src = e.target.closest('.slider__wrap').querySelector('img').src
      document.body.style.paddingRight = window.innerWidth - document.body.clientWidth + 'px';
      document.body.style.overflow = 'hidden';
    }
  });
  lb.onclick = () => {
    img.src = '';
    lb.style.display = 'none';
    document.body.style.paddingRight = '';
    document.body.style.overflow = '';
  }
}

