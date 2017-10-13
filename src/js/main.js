import filter from './portfolioFilter';
import { slider, lightBox } from './thanks-slider';
import { startGlow } from './headerStars';
import { calc } from './calc';
import callback from './callback';
import anim from 'animated-scroll-to';
import tingle from 'tingle.js'

const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuClose = document.querySelector('.mobile-menu__close');
const feedbackPhone = document.querySelector('.feedback__input[name="phone"]');
feedbackPhone && new Inputmask({ mask: '+7 (999) 999-99-99', placeholder: '*' }).mask(feedbackPhone);

hamburger.onclick = () => mobileMenu.style.transform = 'translateX(0)'
mobileMenuClose.onclick = () => mobileMenu.style.transform = '';

//polyfil closest
(function(e){
  e.closest = e.closest || function(css){
    var node = this;

    while (node) {
       if (node.matches(css)) return node;
       else node = node.parentElement;
    }
    return null;
  }
 })(Element.prototype);

// Header Mouse animated scroll
const mouse = document.querySelector('.header__mouse');
const scrollToBlock = document.querySelector('.services');
if(mouse && scrollToBlock) mouse.onclick = () => anim(scrollToBlock, {speed: 1500})

filter();
startGlow();
calc();
callback()
lightBox(.5);

// modal windows for portfolio

const makeModals = () => fetch('/db.json').then(r => r.json()).then(portf => {
  window.modal = new tingle.modal({
    stickyFooter: false,
    closeMethods: ['overlay', 'button', 'escape'],
    closeLabel: "Close",
    cssClass: ['custom-class-1', 'custom-class-2']
  });

  window.modalWrap = ({title,type,typesite,target,img,link,results,warning}) => {
    return `
      <div class='modal__wrapper'>
        <div class='modal__grid modal__grid_basis'>
          <div class='modal__wraps'>
            <div class='modal__title'> ${title} </div>
            <div class='modal__elem'>
              <div class='modal__subtitle'>Цель:</div>
              <div class='modal__text'>${target}</div>
            </div>
            <div class='modal__elem'>
              <div class='modal__subtitle'>Виды работ:</div>
              <div class='modal__text'>${type}</div>
            </div>
          </div>
          <div class='modal__results'>
            <div class='modal__elem'>
              <div class='modal__subtitle'>Результаты*:</div>
              ${results.map(el=> `<div class='modal__text modal__text_plus'>${el}</div>`).join('')}
            </div>
            <div class='modal__elem'>
             ${ warning && `<div class="modal__warning"> ${warning} </div>`}
          </div>

          </div>
        </div>
        <div class='modal__grid'>
          <div class="modal__imgwrap">
            <img src="${img}" class="modal__img"/>
          </div>
          ${ link && `<div class="modal__site">Сайт: <a class="modal__link" href="http://${link}"> ${link}</a></div>`}
        </a>
      </div>
    `
  }
  window.popup = function(){
    const portfolio = Array.prototype.slice.call(document.querySelectorAll('.portfolio__block .link__more'))
    if(!portfolio) return null;
    portfolio.forEach((el) => el.onclick = function(e){
        e.preventDefault();
        let id = e.currentTarget.closest('.portfolio__block').dataset.id;
        modal.setContent(modalWrap(portf.find(el => el.id === id)));
        modal.open()
      }
    )
  }
  popup();

  window.cyrclePopup = function(){
    const cyrclePortfolio = Array.prototype.slice.call(document.querySelectorAll('.made__item'))
    if(!cyrclePortfolio) return null;
    cyrclePortfolio.forEach((el) => el.onclick = function(e){
        e.preventDefault();
        let id = e.currentTarget.dataset.id;
        modal.setContent(modalWrap(portf.find(el => el.id === id)));
        modal.open()
      }
    )
  }
  cyrclePopup();

}).catch(e => e)

var servicePopup = function(){
  let services = Array.prototype.slice.call(document.querySelectorAll('.feedback__submit:not(.exclude)'))
  const rocketButton = document.querySelector('.rocket__button');
  rocketButton && services.push(rocketButton);
  //
  const form = document.querySelector('#callback-form');
  const layout = document.querySelector('.callback');
  const closeButton = document.querySelector('.callback__close');
  if(!services) return null;
  services.forEach((el) => el.onclick = function(e){
      if(el.classList.contains('services__scroll')) return null;
      e.preventDefault();

      var service = el.getAttribute('data-service')
      if (service) {
        document.querySelector('.callback__title').innerHTML = service;
        form.querySelector('input[name="subject"]').value = service;
      } else {
        document.querySelector('.callback__title').innerHTML = 'Отправить заявку';
        form.querySelector('input[name="subject"]').value = 'Отправить заявку';
      }
      layout.style.display = 'flex';
      form.reset();
      document.body.style.paddingRight = window.innerWidth - document.body.clientWidth + 'px';
      document.body.style.overflow = 'hidden';
      setTimeout(()=>layout.style.opacity = 1,0);
    }
  )
}
servicePopup();
const buttonServices = document.querySelector('.services__scroll');
const scrollToPrices = document.querySelector('.prices');
if(buttonServices && scrollToPrices) buttonServices.onclick = () => anim(scrollToPrices, {speed: 1500})


const showMoreButton = () => {
  const button = document.querySelector('.about__show_more');
  const mainBlock = document.querySelector('.about__height');
  if(!button || !mainBlock) return null;
  button.onclick = () => (
    mainBlock.style.height = mainBlock.scrollHeight + 'px',
    button.style.opacity = 0
  )
  mainBlock.addEventListener('transitionend', () => button.style.display = 'none')
};
showMoreButton();

const headerTop = document.querySelector('.header__top');
window.addEventListener('scroll', () => {
  if (!headerTop) return null;
  var scrollTop = window.scrollY || document.documentElement.scrollTop;
  if (scrollTop > headerTop.clientHeight && !headerTop.classList.contains('header__active')) headerTop.classList.add('header__active');
  else if (scrollTop < headerTop.clientHeight && headerTop.classList.contains('header__active')) headerTop.classList.remove('header__active');
});

const auditCallback = () => {
  const button = document.querySelector('.feedback__submit.feedback__submit_float.exclude');
  if(!button) return null;
  const form = button.form;
  form.onsubmit = e => {
    e.preventDefault();
    if (form.querySelector('input[name="phone"]').value.indexOf('*') !== -1) return null;
    const body = new FormData(form);
    fetch('/audit.php', {
      method: 'POST',
      body,
    }).then(_ => form.reset())
  }
};
auditCallback();

// generate portfolion blocks

