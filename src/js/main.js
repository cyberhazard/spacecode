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
lightBox(.3);

// modal windows for portfolio
const modalStore = {
  modal1:{
    title: 'ТЕЛОХРАНИТЕЛИ',
    typeWork: 'Разработка крупного корпоративного сайта с возможностью бронирования и множеством точек лидогенерации',
    typeSite: 'Посадочная страница',
    target: 'Наличие полной информации о компании в сети Интернет',
    img: 'img/pop-7.png',
    link: 'telohraniteli.pro'
  },
  modal2:{
    title: 'PROGRESS',
    typeWork: 'Разработка крупного корпоративного сайта с возможностью бронирования и множеством точек лидогенерации',
    typeSite: 'Интернет-магазин',
    target: 'Наличие полной информации о компании в сети Интернет',
    img: 'img/pop-2.png',
    link: 'progress161.ru'
  },
  modal3:{
    title: 'STROGO MTM',
    typeWork: 'Разработка крупного корпоративного сайта с возможностью бронирования и множеством точек лидогенерации',
    typeSite: 'Корпоративный сайт',
    target: 'Наличие полной информации о компании в сети Интернет',
    img: 'img/pop-5.png',
    link: 'strogo-mtm.ru'
  },
  modal4:{
    title: 'STREDIAR',
    typeWork: 'Разработка крупного корпоративного сайта с возможностью бронирования и множеством точек лидогенерации',
    typeSite: 'Интернет-магазин',
    target: 'Наличие полной информации о компании в сети Интернет',
    img: 'img/pop-11.png',
    link: 'strediar.ru'
  },
  modal5:{
    title: 'DOMANI',
    typeWork: 'Разработка крупного корпоративного сайта с возможностью бронирования и множеством точек лидогенерации',
    typeSite: 'Интернет-магазин',
    target: 'Наличие полной информации о компании в сети Интернет',
    img: 'img/pop-12.png',
    link: 'domani-group.ru'
  },
  modal6:{
    title: 'РЕСУРСНЕРУДСБЫТ',
    typeWork: 'Разработка крупного корпоративного сайта с возможностью бронирования и множеством точек лидогенерации',
    typeSite: 'Корпоративный сайт',
    target: 'Наличие полной информации о компании в сети Интернет',
    img: 'img/pop-3.png',
    link: 'nerud-sbyt.ru'
  },
  moda7:{
    title: 'Авангард',
    typeWork: 'Разработка крупного корпоративного сайта с возможностью бронирования и множеством точек лидогенерации',
    typeSite: 'Корпоративный сайт',
    target: 'Наличие полной информации о компании в сети Интернет',
    img: 'img/pop-4.png',
    link: 'avangard-denta.ru'
  },
  modal8:{
    title: 'MILITARY UNIFORM',
    typeWork: 'Разработка крупного корпоративного сайта с возможностью бронирования и множеством точек лидогенерации',
    typeSite: 'Интернет-магазин',
    target: 'Наличие полной информации о компании в сети Интернет',
    img: 'img/pop-6.png',
    link: 'military-uniform.ru'
  },
  modal9:{
    title: 'ИСТОК',
    typeWork: 'Разработка крупного корпоративного сайта с возможностью бронирования и множеством точек лидогенерации',
    typeSite: 'Корпоративный сайт',
    target: 'Наличие полной информации о компании в сети Интернет',
    img: 'img/pop-8.png',
    link: 'istok-world.ru'
  },
  modal10:{
    title: 'GARMIN',
    typeWork: 'Разработка крупного корпоративного сайта с возможностью бронирования и множеством точек лидогенерации',
    typeSite: 'Интернет-магазин',
    target: 'Посадочная страница',
    img: 'img/pop-9.png',
    link: ''
  },
  modal11:{
    title: 'Aurora Carne',
    typeWork: 'Разработка крупного корпоративного сайта с возможностью бронирования и множеством точек лидогенерации',
    typeSite: 'Корпоративный сайт',
    target: 'Наличие полной информации о компании в сети Интернет',
    img: 'img/pop-1.png',
    link: 'aurora-carne.ru'
  },
  modal12:{
    title: 'SPINNERX',
    typeWork: 'Разработка крупного корпоративного сайта с возможностью бронирования и множеством точек лидогенерации',
    typeSite: 'Интернет-магазин',
    target: 'Наличие полной информации о компании в сети Интернет',
    img: 'img/pop-10.png',
    link: 'spinnerx.ru'
  },
  modal13:{
    title: 'АВТОШКОЛА №1',
    typeWork: 'Разработка крупного корпоративного сайта с возможностью бронирования и множеством точек лидогенерации',
    typeSite: 'Интернет-магазин',
    target: 'Наличие полной информации о компании в сети Интернет',
    img: 'img/pop-13.png',
    link: 'avto-school1.ru'
  },
  modal14:{
    title: 'ANARCHI',
    typeWork: 'Разработка крупного корпоративного сайта с возможностью бронирования и множеством точек лидогенерации',
    typeSite: 'Интернет-магазин',
    target: 'Наличие полной информации о компании в сети Интернет',
    img: 'img/pop-14.png',
    link: 'anarchi.pro'
  },
  modal15:{
    title: 'ANARCHI',
    typeWork: 'Разработка крупного корпоративного сайта с возможностью бронирования и множеством точек лидогенерации',
    typeSite: 'Интернет-магазин',
    target: 'Наличие полной информации о компании в сети Интернет',
    img: 'img/pop-14.png',
    link: 'anarchi.pro'
  },
  modal16:{
    title: 'BREVDE',
    typeWork: 'Разработка крупного корпоративного сайта с возможностью бронирования и множеством точек лидогенерации',
    typeSite: 'Интернет-магазин',
    target: 'Наличие полной информации о компании в сети Интернет',
    img: 'img/pop-14.png',
    link: 'anarchi.pro'
  },
  modal17:{
    title: 'IFC',
    typeWork: 'Разработка крупного корпоративного сайта с возможностью бронирования и множеством точек лидогенерации',
    typeSite: 'Интернет-магазин',
    target: 'Наличие полной информации о компании в сети Интернет',
    img: 'img/pop-14.png',
    link: 'anarchi.pro'
  },
  modal18:{
    title: 'Кварц.БЕЛ',
    typeWork: 'Разработка крупного корпоративного сайта с возможностью бронирования и множеством точек лидогенерации',
    typeSite: 'Landing Page',
    target: 'Наличие полной информации о компании в сети Интернет',
    img: 'img/pop-14.png',
    link: 'anarchi.pro'
  },
  modal19:{
    title: 'ANARCHI',
    typeWork: 'Разработка крупного корпоративного сайта с возможностью бронирования и множеством точек лидогенерации',
    typeSite: 'Интернет-магазин',
    target: 'Наличие полной информации о компании в сети Интернет',
    img: 'img/pop-14.png',
    link: 'anarchi.pro'
  },
  modal20:{
    title: 'ANARCHI',
    typeWork: 'Разработка крупного корпоративного сайта с возможностью бронирования и множеством точек лидогенерации',
    typeSite: 'Интернет-магазин',
    target: 'Наличие полной информации о компании в сети Интернет',
    img: 'img/pop-14.png',
    link: 'anarchi.pro'
  }
}

var modal = new tingle.modal({
  stickyFooter: false,
  closeMethods: ['overlay', 'button', 'escape'],
  closeLabel: "Close",
  cssClass: ['custom-class-1', 'custom-class-2']
});

const modalWrap = ({title,typeWork,typeSite,target,img,link}) => {
  return `
    <div class='modal__wrapper'>
      <div class='modal__grid'>
        <div class='modal__title'> ${title} </div>
        <div class='modal__elem'>
          <div class='modal__subtitle'>Вид работ:</div>
          <div class='modal__text'>${typeWork}</div>
        </div>
        <div class='modal__elem'>
          <div class='modal__subtitle'>Тип сайта:</div>
          <div class='modal__text'>${typeSite}</div>
        </div>
        <div class='modal__elem'>
          <div class='modal__subtitle'>Цель:</div>
          <div class='modal__text'>${target}</div>
        </div>
      </div>
      <div class='modal__grid'>
        <div class="modal__imgwrap">
          <img src="${img}" class="modal__img"/>
        </div>
        <div class="modal__site">Сайт: <a class="modal__link" href="http://${link}"> ${link}</a></div>
      </a>
    </div>
  `
}
var popup = function(){
  const portfolio = Array.prototype.slice.call(document.querySelectorAll('.portfolio__block .link__more'))
  if(!portfolio) return null;
  portfolio.forEach((el) => el.onclick = function(e){
      e.preventDefault();
      let id = e.currentTarget.closest('.portfolio__block').dataset.id;
      modal.setContent(modalWrap(modalStore[id]));
      modal.open()
    }
  )
}
popup();

var cyrclePopup = function(){
  const cyrclePortfolio = Array.prototype.slice.call(document.querySelectorAll('.made__item'))
  if(!cyrclePortfolio) return null;
  cyrclePortfolio.forEach((el) => el.onclick = function(e){
      e.preventDefault();
      let id = e.currentTarget.dataset.id;
      modal.setContent(modalWrap(modalStore[id]));
      modal.open()
    }
  )
}
cyrclePopup();

var servicePopup = function(){
  const services = Array.prototype.slice.call(document.querySelectorAll('.feedback__submit'))
  //
  const form = document.querySelector('#callback-form');
  const layout = document.querySelector('.callback');
  const closeButton = document.querySelector('.callback__close');
  if(!services) return null;
  services.forEach((el) => el.onclick = function(e){
      e.preventDefault();

      var service = el.getAttribute('data-service')
      console.log(service);
      if (service)
        document.querySelector('.callback__title').innerHTML = service;
      else
        document.querySelector('.callback__title').innerHTML = 'Отправить заявку';
      layout.style.display = 'flex';
      form.reset();
      document.body.style.paddingRight = window.innerWidth - document.body.clientWidth + 'px';
      document.body.style.overflow = 'hidden';
      setTimeout(()=>layout.style.opacity = 1,0);
    }
  )
}
servicePopup();




