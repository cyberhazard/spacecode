import Swiper from 'swiper/dist/js/swiper.min.js';

export const slider = new Swiper('.reviews-slider', {
  pagination: '.reviews-pagination',
  slidesPerView: 3,
  paginationClickable: true,
  spaceBetween: 30,
  nextButton: '.swiper-button-next',
  prevButton: '.swiper-button-prev',
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

export const lightBox = (s=0.5) => {
  const images = [...document.querySelectorAll('.slider__loop')];
  if(images.length === 0) return null
  const lb = document.createElement('div');
  const close = document.createElement('i');
  close.classList.add('fa', 'fa-times');
  close.setAttribute('aria-hidden', true)
  close.style.cssText = 'position: absolute; top: 50px; right: 50px; color: white; font-size: 32px; cursor: pointer;';
  lb.appendChild(close)
  const img = new Image();
  lb.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity:0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,0.87);
    transition: ${s}s;
    z-index: 10000;`;
  img.style.cssText = 'wax-width: 84%; max-height: 84%';
  lb.appendChild(img)
  images.forEach(image=>{
    image.onclick = (e) => {
      document.body.appendChild(lb);
      setTimeout(()=>lb.style.opacity = 1,0)
      img.src = e.target.closest('.slider__wrap').querySelector('img').src
      document.body.style.paddingRight = window.innerWidth - document.body.clientWidth + 'px';
      document.body.style.overflow = 'hidden';
    }
  });
  lb.onclick = () => {
    lb.style.opacity = '0';
    lb.addEventListener('transitionend', function end(){
      lb.remove();
      img.src = '';
      document.body.style.paddingRight = '';
      document.body.style.overflow = '';
      lb.removeEventListener('transitionend', end)
    })
  }
}

