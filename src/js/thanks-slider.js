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
  const sources = [...document.querySelectorAll('.slider__wrap img')].map(i => i.src);
  if(images.length === 0) return null
  const lb = document.createElement('div');
  const close = document.createElement('i');
  close.classList.add('fa', 'fa-times');
  close.setAttribute('aria-hidden', true)
  close.style.cssText = 'position: absolute; top: 12px; right: 24px; color: white; font-size: 32px; cursor: pointer;';
  lb.appendChild(close)
  // const img = new Image();
  const lbSlider = `
    <div class="lightbox-slider" style="max-height: 94vh; max-width: 94vw; position: relative; margin: 0 auto;">
      <div class="swiper-wrapper">
        ${sources.map(img => (`
          <div class="swiper-slide">
            <img
              src="${img}"
              style="max-height: 94vh; transform: translateY(3vh); max-width: 94vw; ${window.innerWidth < 500 && 'transform: translateY(12vh)'}"
            />
          </div>
        `)).join('')}
      </div>
      <div class="swiper-button-next" style="top: 50% !important;"></div>
      <div class="swiper-button-prev" style="top: 50% !important;"></div>
    </div>
  `;
  console.log(lbSlider)
  lb.insertAdjacentHTML('beforeend', lbSlider)
  lb.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity:0;
    display: block;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,0.87);
    transition: ${s}s;
    z-index: 10000;`;
  // img.style.cssText = 'wax-width: 84%; max-height: 84%';
  // lb.appendChild(img)
  images.forEach((image, index)=>{
    image.onclick = (e) => {
      document.body.appendChild(lb);
      new Swiper('.lightbox-slider', { initialSlide: index,nextButton: '.swiper-button-next', prevButton: '.swiper-button-prev', });
      [...document.querySelectorAll('.lightbox-slider .swiper-button-next, .lightbox-slider .swiper-button-prev')].forEach(button =>
        button.addEventListener('click', (e) => e.stopPropagation()))
      setTimeout(()=>lb.style.opacity = 1,0)
      // img.src = e.target.closest('.slider__wrap').querySelector('img').src
      document.body.style.paddingRight = window.innerWidth - document.body.clientWidth + 'px';
      document.body.style.overflow = 'hidden';
    }
  });

  const end = () => {
    lb.remove();
    // img.src = '';
    document.body.style.paddingRight = '';
    document.body.style.overflow = '';
    lb.removeEventListener('transitionend', end)
  }

  lb.onclick = () => {
    lb.style.opacity = '0';
    lb.addEventListener('transitionend', end)
  }

  document.body.addEventListener('keyup', (e) => e.keyCode === 27 && (lb.style.opacity = '0', end()))
}

