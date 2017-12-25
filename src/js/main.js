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
    //popups cases
  window.cases = function(){
    const portfolio = Array.prototype.slice.call(document.querySelectorAll('.cases__item .cases__more'))
    if(!portfolio) return null;
    portfolio.forEach((el) => el.onclick = function(e){
        e.preventDefault();
        let id = e.currentTarget.closest('.cases__item').dataset.id;
        modal.setContent(modalWrap(portf.find(el => el.id === id)));
        modal.open()
      }
    )
  }
  cases();


}).catch(e => e)
makeModals();
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
    }).then(_ => alertify.success("Ваша заявка отправленна"),form.reset())
  }
};
auditCallback();

// partners form send
const partSend = () => {
  const button = document.querySelector('.part__submit')
  const checkbox = document.querySelector('.part__checkbox')
  if(!button) return null
  const form = button.form
  form.onsubmit = e => {
    e.preventDefault();
    if(form.querySelector('input[name="phone"]').value.indexOf('*') !== -1) return null;
    if(!checkbox.checked){
      alertify.error("Вы не приняли соглашение об обработке персональных данных");
    } else {
      const body = new FormData(form);
      fetch('/mail.php',{
        method:'POST',
        body,
      }).then(_ => alertify.success("Ваша заявка отправленна"),form.reset())
    }
  }
}
partSend();

const partnersPhone = document.querySelector('.part__input[name="phone"]');
partnersPhone && new Inputmask({ mask: '+7 (999) 999-99-99', placeholder: '*', showMaskOnHover: false,}).mask(partnersPhone)

// generate portfolion blocks

const generateBlock = (p,groups) => (`
  <div class="portfolio__block" data-tag="${p.tag}" data-id="${p.id}">
    <div class="portfolio__float">${groups[p.tag]}</div>
    <div class="portfolio__image" style="background-image: url('${p.bg}')"></div>
    <div class="portfolio__content">
      <div class="portfolio__header_min ${p.dark == 'true'? 'portfolio__header_dark' : ''}">${p.header}</div>
      <div class="portfolio__text ${p.dark == 'true'? 'portfolio__text_dark' : ''}">${p.text}</div>
      <div class="portfolio__link">
        <a href="#" class="link__more ${p.dark == 'true'? 'link__more_dark' : ''}">Подробнее</a>
      </div>
    </div>
  </div>
`)

const generatePortfolioBlocks = () => {
  const buttons = document.querySelector('.portfolio__buttons');
  const select = document.querySelector('select.portfolio__select');
  const blocks = document.querySelector('.portfolio__blocks');
  if(!blocks) return null;
  const groups = fetch('/groups.json').then(r => r.json()).then(groups => {
    fetch('/db.json').then(r => r.json()).then(portf => {
      blocks.insertAdjacentHTML('afterbegin', portf.sort((a, b) => Number(a.number) - Number(b.number)).map(el=> generateBlock(el, groups)).join(''));
      buttons.insertAdjacentHTML('afterbegin', Object.keys(groups).map((el, i) =>
        `<button class="portfolio__button ${i==0? 'portfolio__button_selected': ''}" data-tag="${el}">${groups[el]}</button>`).join(''));
      select.insertAdjacentHTML('beforeend', Object.keys(groups).map(el => `<option value="${el}">${groups[el]}</option>`).join(''))
      filter();
      makeModals();
    })
  })
}
generatePortfolioBlocks()

// Табы на странице complex-digital
const tabChange = () => {
  if(!document.querySelector('.tabs__block')) return null
  const tabs = [...document.querySelectorAll('.tabs__button')]
  const contents = [...document.querySelectorAll('.tabs__item')]
  tabs.forEach((tab,ind) => {
    tab.onclick = ({target}) => {
      tabs.forEach(tab=>tab.classList.remove('tabs__button_active'))
      target.classList.add('tabs__button_active');
      contents.forEach(el=>el.classList.remove('tabs__item_active'));
      contents[tabs.findIndex(el=>el===target)].classList.add('tabs__item_active')
    }
  })
}
tabChange();

// popup for digital page
window.modalWindow = new tingle.modal({
  stickyFooter: false,
  closeMethods: ['overlay', 'button', 'escape'],
  closeLabel: "Close",
  cssClass: ['tingle__bg'],
  onClose: function() {
    var body = document.querySelector('body');
    var html = document.querySelector('html');
    body.style.overflow = ''
    body.style.height = ''
    html.style.overflow = ''
    html.style.height = ''
  },
  onOpen: function() {
    var body = document.querySelector('body');
    var html = document.querySelector('html');
    body.style.overflow = 'auto'
    body.style.height = '100%'
    html.style.overflow = 'auto'
    html.style.height = '100%'
    const modalSend = () => {
      const button = document.querySelector('.dig__submit')
      const checkbox = document.querySelector('.dig__checkbox')
      if(!button) return null
      const form = button.form
      form.onsubmit = e => {
        e.preventDefault();
        if(form.querySelector('input[name="phone"]').value.indexOf('*') !== -1) return null;
        if(!checkbox.checked){
          alertify.error("Вы не приняли соглашение об обработке персональных данных");
        } else {
          const data = new FormData(form);
          const body = {};
          for(let i of data.keys()) {
            body[i] = data.getAll(i)
          }
          fetch('/form-audit.php',{
            method:'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(body),
          }).then(_ => alertify.success("Ваша заявка отправленна"),form.reset(),modalWindow.close())
        }
      }
    }
    modalSend()
  },
});

window.openDigital = function(item){
  const submit = document.querySelector('.request__submit')
  if(!submit) return null;
  submit.onclick = function(e){
    e.preventDefault()
    modalWindow.setContent(`
      <form class="dig__wrapper">
        <div class="dig__header">
          <div class="dig__title"> Узнать чем </div>
          <img src="../img/logo.png" class="dig__img"/>
          <div class="dig__title"> может помочь Вашему бизнесу </div>
        </div>
        <div class="dig__content">
          <div class="dig__bonus">
            <div class="dig__content_title">Получить бесплатно:</div>
            <div class="dig__bonus_elements">
              <div class="dig__bonus_element"><label><input type="checkbox" name="bonus" value="Аудит сайта"/> <span/> </label> Аудит сайта</div>
              <div class="dig__bonus_element"><label><input type="checkbox" name="bonus" value="План роста посетителей/заявок"/> <span/> </label> План роста посетителей/заявок</div>
              <div class="dig__bonus_element"><label><input type="checkbox" name="bonus" value="Аудит рекламной кампании"/> <span/> </label> Аудит рекламной кампании</div>
              <div class="dig__bonus_element"><label><input type="checkbox" name="bonus" value="Стоимость и сроки работ"/> <span/> </label> Стоимость и сроки работ</div>
              <div class="dig__bonus_element"><label><input type="checkbox" name="bonus" value="Стратегия продвижения"/> <span/> </label> Стратегия продвижения</div>
              <div class="dig__bonus_element"><label><input type="checkbox" name="bonus" value="Презентацию компании SpaceCode"/> <span/> </label> Презентацию компании SpaceCode</div>
            </div>
          </div>
          <div class="dig__contact">
            <div class="dig__content_title">Контактная информация:</div>
            <div class="dig__contact_header">
              <div class="dig__contact_element">
                <input type="text" name="address" class="dig__input" required/>
                <label class="dig__label">Адрес вашего сайта*</label>
              </div>
              <div class="dig__contact_element">
                <input type="text" name="name" class="dig__input" required/>
                <label class="dig__label">Ваше имя*</label>
              </div>
              <div class="dig__contact_element">
                <input type="tel" name="phone" class="dig__input" required/>
                <label class="dig__label">Ваш телефон*</label>
              </div>
              <div class="dig__contact_element">
                <input type="email" name="email" class="dig__input" required/>
                <label class="dig__label">Ваш e-mail</label>
              </div>
            </div>
            <div class="dig__contact_footer">
              <div class="dig__contact_element">
                <input type="text" name="target" class="dig__input" required/>
                <label class="dig__label">Ваши цели</label>
              </div>
            </div>
            <div class="dig__offer">
              <label><input type="checkbox" class="dig__checkbox"/> <span/> </label> <div class="dig__offer_inner">Согласен на обработку персональных данных</div>
            </div>
            <div class="dig__center">
              <button class="feedback__submit dig__submit"> <span>Отправить заявку</span> </button>
            </div>
          </div>
        </div>
      </form>
    `);
    modalWindow.open();
  }
}
window.openDigital();


// offer modals

const offerModal = function(){
  const popup = document.querySelector('.offer-popup');
  const contentBox = document.querySelector('.offer-popup__content');
  const closeButton = document.querySelector('.offer-popup__close');
  const buttons = [...document.querySelectorAll('.garants__offer')];
  if(buttons.length === 0 && !closeButton) return null
  const offers = {
    first: '3.2. В случае невыполнения прогноза трафика, представленного Исполнителем, Исполнитель, компенсирует недополученный трафик посредством подключения таких рекламных каналов, как Яндекс.Директ и/или Google.AdWords, без увеличения бюджета при условии своевременного согласования Заказчиком рекомендаций Исполнителя или предоставления необходимой информации для работы по договору в срок, не превышающий 3 (три) рабочих дня.',
    second: 'В случае невыполнения прогноза по продвижению запросов, представленного Исполнителем, Исполнитель компенсирует все расходы, понесенные Заказчиком в связи с исполнением обязательств по данному Договору.',
    third: 'При попадании Сайта под фильтр «Минусинск» или поведенческий фильтр абонентская плата, указанная в Приложении №1, снижается до 0 (нуля) рублей, НДС не облагается (п. 2., ст. 346.11 НК РФ) до момента выведения ресурса из-под фильтра. При этом Исполнитель обязуется вывести сайт из-под фильтра в течение 2 (двух) месяцев с момента его попадания под фильтр «Минусинск» или поведенческий фильтр.'
  }
  buttons.forEach(button => button.onclick = (e) => {
    e.preventDefault()
    const offer = e.currentTarget.getAttribute('data-offer');
    const content = offers[offer];
    contentBox.querySelector('.offer-popup__text').textContent = content;
    popup.style.display = 'flex';
    setTimeout(() => popup.style.opacity = 1,0)
    popup.addEventListener('transitionend', function end() {
      contentBox.classList.add('offer-popup__content_show')
      popup.removeEventListener('transitionend', end)
    })
  })

  closeButton.onclick = () => {
    contentBox.classList.remove('offer-popup__content_show');
    const transition = parseFloat(getComputedStyle(contentBox).transitionDuration) * 1000;
    setTimeout(() => {
      popup.style.opacity = '';
      popup.addEventListener('transitionend', function end() {
        popup.removeEventListener('transitionend', end);
        popup.style.display = '';
      })
    },transition)
  }

}
offerModal()

// Браузерные фиксы

const changeBackgroundOnOld = function(){
  if(is.ios() || is.ie()){
    const videoBg = document.querySelector('.header__video');
    const header = document.querySelector('.header');
    videoBg.style.display = 'none';
    header.classList.add('header__ios')
  }
}
changeBackgroundOnOld();

[...document.querySelectorAll('a')].forEach(link => {
  if (link.getAttribute('href') && link.getAttribute('href')[0] == '/') {
    link.onclick = e => {
      e.preventDefault();
      document.querySelector('.wrapper').style.opacity = 0;
      setTimeout(() => window.location.href = link.getAttribute('href') ,320)
    }
  }
})
