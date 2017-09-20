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
    title: 'Aurora Carne',
    typeWork: 'Перед разработкой сайта специалисты SpaceCode детально изучили рынок и проработали портрет ЦА. Было выявлены ключевые потребности аудитории, на основе которого мы разработали сайт. Специалистами из отдела интернет-маркетинга была разработана масштабная контекстная и медийная реклама, группы в социальных сетях.',
    typeSite: 'Корпоративный сайт',
    target: 'Разработка сайта, полный комплекс интернет-маркетинга (SEO, контекстная и медийная реклама, продвижение бренда в соц. сетях). ',
    img: 'img/pop-1.png',
    link: 'aurora-carne.ru',
    results: ['Вывод сайта в топ-3 Яндекса и Гугла за 2,5 месяца по ключевым позициям.','Более X000 целевого трафика в сути','Группа в Facebook с более 3000 лояльных подписчиков.','Яркая, масштабная и запоминающаяся реклама в контекстной и медийных сетях.'],
    warning: '*Точные цифры не можем приводить из-за соглашения конфиденциальности. Заказчик дал согласие на показ только процентных соотношений.'
  },
  modal2:{
    title: 'PROGRESS',
    typeWork: 'Наша команда проделала огромную работу по работе со всеми каналами продаж через интернет. Был создан сайт, создана и раскручена группа в VK, проведено множество рекламных кампаний.',
    typeSite: 'Интернет-магазин',
    target: 'Взрывная работа в сети и захват 30% рынка онлайн-продаж спортивного питания в Ростове-на-Дону',
    img: 'img/pop-2.png',
    link: 'progress161.ru',
    results: ['Рост подписчиков групп в соцсетях в 17 раз','7-ми кратный рост трафика на сайте','9-ти кратный рост продаж через онлайн-каналы','Около 34%* онлайн продаж спортпита в Ростове приходится на Progress161'],
    warning: ''
  },
  modal3:{
    title: 'РЕСУРСНЕРУДСБЫТ',
    typeWork: 'Разработка корпоративного сайта под ключ',
    typeSite: 'Корпоративный сайт',
    target: 'Выход на рынок розничных продаж песка и щебня (до этого компания занималась только крупным оптом). Первым шагом к этой цели стало создание сайта и привлечение клиентов из интернета.',
    img: 'img/pop-3.png',
    link: 'nerud-sbyt.ru',
    results: ['Более Х00* посетителей в сутки','Ежемесячный прирост трафика около 20%','Конверсия 4%*'],
    warning: '*Точные цифры не можем приводить из-за соглашения конфиденциальности. Заказчик дал согласие на показ только процентных соотношений.'

  },
  modal4:{
    title: 'Авангард',
    typeWork: 'Командой Spacecode был создан уникальный и конверсионный сайт. Также были проведены работы по его SEO продвижению и работа с отзывами о стоматологии на различных ресурсах в сети.',
    typeSite: 'Корпоративный сайт',
    target: 'Создание и продвижение сайта. Автоматизация учета заявок и работы с клиентами',
    img: 'img/pop-4.png',
    link: 'avangard-denta.ru',
    results: ['Создание сайта и фирменного стиля','Рост трафика на 35% в течение 8 месяцев','Улучшение средней оценки о стоматологии в сети на 40%'],
    warning: '*Точные цифры не можем приводить из-за соглашения конфиденциальности. Заказчик дал согласие на показ только процентных соотношений.'
  },
  modal5:{
    title: 'STROGO MTM',
    typeWork: 'STROGO MTM - один из лидеров на рынке индивидуального пошива. В 2010 году мы разработали сайт, рекламу и начали SEO-продвижение. За год мы вывели сайт в топ-3 поисковых систем. Большой трафик, высокая конверсия, качество выполняемых работ - это то, благодаря чему мы являемся партнером STROGO MTM уже более 7-и лет.',
    typeSite: 'Корпоративный сайт',
    target: 'Разработка сайта, полный комплекс интернет-маркетинга (SEO, контекстная и медийная реклама, продвижение бренда в соц. сетях).',
    img: 'img/pop-5.png',
    link: 'strogo-mtm.ru',
    results: ['Более 170 запросов в ТОП-3 Яндекса и Google','Более X000 целевого трафика в сутки','Группа в Facebook с более 10000 целевых подписчиков','Яркая, масштабная, запоминающаяся, высококонверсионная реклама в контекстной и медийных сетях.'],
    warning: '*Точные цифры не можем приводить из-за соглашения конфиденциальности. Заказчик дал согласие на показ только процентных соотношений.'
  },
  modal6:{
    title: 'MILITARY UNIFORM',
    typeWork: 'Наша команда в течение пары дней произвела глубокий анализ рынка и выявила наиболее эффективные каналы продаж через интернет. Мы разработали Landng page и дали интерактивную рекламу в самых необычных местах, включавших популярные студенческие сообщества и группы в соцесетях',
    typeSite: 'Корпоративный сайт',
    target: 'Создание сайта и максимально быстрое привлечение клиентов (студентов военных кафедр)',
    img: 'img/pop-6.png',
    link: 'military-uniform.ru',
    results: ['Через 6 дней после старта через сайт реализовали месячную норму всех продаж'],
    warning: '',
  },
  modal7:{
    title: 'ТЕЛОХРАНИТЕЛИ',
    typeWork: 'Разработка дизайна для посадочной страницы (Landing Page)',
    typeSite: 'Посадочная страница',
    target: 'Разработать красивый, легкий, уникальный и продающий дизайн для посадочной страницы курса по похудению',
    img: 'img/pop-7.png',
    link: 'telohraniteli.pro',
    results: ['Конверсия сайта состовляет более 15%*','Значительное повышение заинтересованности курсом','Более X00 посетителей в сутки'],
    warning: '*Точные цифры не можем приводить из-за соглашения конфиденциальности. Заказчик дал согласие на показ только процентных соотношений.'
  },
  modal8:{
    title: 'ИСТОК',
    typeWork: 'Нашей командой был создан сайт с удобной системой бронирования, разработана реклама в Яндекс и Google.',
    typeSite: 'Корпоративный сайт',
    target: 'Создание сайта и фирменного стиля. Разработка и ведение контекстной и медйной рекламы',
    img: 'img/pop-8.png',
    link: 'istok-world.ru',
    results: ['Более 80% новых клиентов приходит через сайт','X000 трафика в сутки','Ежемесячный рост трафика на 20-25%'],
    warning: '*Точные цифры не можем приводить из-за соглашения конфиденциальности. Заказчик дал согласие на показ только процентных соотношений.'

  },
  modal9:{
    title: 'GARMIN',
    typeWork: 'Разработка дизайна для посадочной страницы (Landing Page)',
    typeSite: 'Посадочная страница',
    target: 'Разработать уникальный, стильный и продающий дизайн для посадочной страницы по продаже часов фирмы Garmin',
    img: 'img/pop-17.png',
    link: '',
    results: ['Разработан уникальный дизайн для лендинга в 3-х версиях: для десктопов, планшетов и смартфонов'],
    warning: '',
  },
  modal10:{
    title: 'SPINNERX',
    typeWork: 'Команда SpaceCode за 2 дня произвела брендирование (полностью разработан фирменный стиль, дизайн упаковок, стендов, наружной рекламы и пр.), за 4 дня создан интернет-магазин и разработана масштабная рекламная компания. Нашими силами была внедрена система обработки заявок и работы с клиентами',
    typeSite: 'Интернет-магазин',
    target: 'Максимально быстрое создание бренда спиннеров, разработка сайта и налаживание продаж через интернет',
    img: 'img/pop-10.png',
    link: 'spinnerx.ru',
    results: ['Посещаемость сайта более 5 000 тыс. человек в день','Среднее кол-во заказов в день - 164','Вывод сайта в ТОП 3 по ключевым запросам','Упоминание сайта на 3-х федеральных телеканалах'],
    warning: '*Результаты указаны до падения популярности спиннеров'
  },
  modal11:{
    title: 'STREDIAR',
    typeWork: 'Разработка дизайна для посадочной страницы (Landing Page)',
    typeSite: 'Посадочная страница',
    target: 'Разработать современный, строгий и продающий дизайн посадочной страницы для фирмы, осуществляющей электромонтажные работы в Туле и Тульской области',
    img: 'img/pop-11.png',
    link: 'strediar.ru',
    results: ['Конверсия лендинга состовляет больше 15-20%','Фирма  значительно выделяется на фоне всех конкурентов, что повысило доверие к ней со стороны клиентов'],
    warning: '*Точные цифры не можем приводить из-за соглашения конфиденциальности. Заказчик дал согласие на показ только процентных соотношений.'
  },
  modal12:{
    title: 'DOMANI',
    typeWork: 'Команда SpaceCode провела детальный анализ конкурентов, выявила их сильные и слабые стороны. На основе анализа был создан простой и удобный сайт, детально проработано семантическое ядро и подобраны наиболее эффективные для продвижения запросы.',
    typeSite: 'Корпоративный сайт',
    target: 'Разработка сайта, SEO-продвижение и внедрение CRM-системы',
    img: 'img/pop-12.png',
    link: 'domani-group.ru',
    results: ['Ежемесячный рост трафика на 17%','Конверсии 19%','63% продвигаемых запросов вошли в ТОП 3','87% продвигаемых запросов вошли в ТОП 10'],
    warning: '*Точные цифры не можем приводить из-за соглашения конфиденциальности. Заказчик дал согласие на показ только процентных соотношений.'
  },
  modal13:{
    title: 'АВТОШКОЛА №1',
    typeWork: 'Детально проанализировав рынок, мы создали уникальную стратегию, которая позволила нашему Заказчику стать крупнейшей автошколой города. Были задействованы все каналы привлечения: от рекламы в instagram и соцсетях, до создания и размещения видеоролкиов на YouTube',
    typeSite: 'Корпоративный сайт',
    target: 'Выход на рынок, создание сайта и узнаваемого бренда, привлечение клиентов через интернет в небольшом городе с населением в 250тыс. человек',
    img: 'img/pop-13.png',
    link: 'avto-school1.ru',
    results: ['Автошкола № 1 стала крупнейшей в городе','Доля клиентов, приходящих из интернета - 67%'],
    warning: '*Точные цифры не можем приводить из-за соглашения конфиденциальности. Заказчик дал согласие на показ только процентных соотношений.'
  },
  modal14:{
    title: 'ANARCHI',
    typeWork: 'Фотограф и 3D-визуализатор SpaceCode собрали и обработали необходимые для портфолио материалы, на основе которых был разработан стильный и неординарный сайт',
    typeSite: 'Корпоративный сайт',
    target: 'Разработка стильного сайта, оформление портфолио',
    img: 'img/pop-14.png',
    link: 'anarchi.pro',
    results: ['Адаптивный сайт с портфолио за 5 дней'],
    warning: ''
  },
  modal15:{
    title: 'BREVDE',
    typeWork: 'Команда SpaceCode разработала сайт с удобным администрированием курсов и семинаров. Было создано около 10 макетов email рассылок и продумана стратегия продвижения',
    typeSite: 'Корпоративный сайт',
    target: 'Личное брендирование, разработка сайта и привлечение заинтересованных посетителей на сайт. Формирование клиентской базы для email рассылок',
    img: 'img/pop-15.png',
    link: 'brevde.ru',
    results: ['Удобная и продуманная система администрирования курсов и семинаров (с email и sms рассылкой напоминаний и дополнительных материалов подписчикам','Повышение лояльности аудитории через email рассылки'],
    warning: '*Точные цифры не можем приводить из-за соглашения конфиденциальности. Заказчик дал согласие на показ только процентных соотношений.'
  },
  modal16:{
    title: 'Кварц.БЕЛ',
    typeWork: 'Разработка дизайна для посадочной страницы (Landing Page)',
    typeSite: 'Landing Page',
    target: 'Разработать уникальный, стильный и продающий дизайн для посадочной страницы по продаже часов фирмы Garmin',
    img: 'img/pop-16.png',
    link: 'Сайт в стадии разработки',
    results: ['Разработан уникальный дизайн для лендинга в 3-х версиях: для десктопов, планшетов и смартфонов'],
    warning:''
  },
  modal17:{
    title: 'Юнимед32',
    typeWork: 'Был проведен аудит сайта и на его основе принято решение о создании нового сайта. Исходя из аналитических отчетов Яндекс.Метрики старого сайта, мы создали структуру и концепцию, которые максимизировали конверсии. Отдельно была внедрена CRM-система учета заявок и работы с клиентами.',
    typeSite: 'Корпоративный сайт',
    target: 'Увеличение посещаемости сайта и построение системы работы с клиентами',
    img: 'img/pop-19.png',
    link: 'brevde.ru',
    results: ['Улучшение показателя конверсий на 30%','Автоматизация работы с клиентами','Улучшение количества положительных отзывов на 23%'],
    warning: '*Точные цифры не можем приводить из-за соглашения конфиденциальности. Заказчик дал согласие на показ только процентных соотношений.'
  },
  modal19:{
    title: 'Постулат',
    typeWork: 'Постулат - юридическая компания, оказывающая услуги по земельному праву. Мы детально вникли в услуги заказчика и потребности целевой аудитории. На этой основе разработали сайт и рекламу, максимально отвечающей запросам ЦА.',
    typeSite: 'Корпоративный сайт',
    target: 'Разработка корпоративного сайта, контекстная реклама в Яндекс. Привлечение клиентов на услуги компании',
    img: 'img/pop-21.png',
    link: 'postylat.ru',
    results: ['Удобный, адаптивный сайт за 5 дней','Конверсия в звонки - 17%','Трафик на сайт с рекламы X00'],
    warning: '*Точные цифры не можем приводить из-за соглашения конфиденциальности. Заказчик дал согласие на показ только процентных соотношений.'
  },
  modal18:{
    title: 'Headway',
    typeWork: 'Headway - танцевальная студия. Мы создали сайт на шаблоне WordPress, адаптировав его под нужды заказчика. Разработали дизайн групп в социальных сетях, создали яркие и привлекательные баннеры для рекламы. Запустили рекламу в VK на целевую аудиторию. Поставили фундамент для продвижения сайта.',
    typeSite: 'Корпоративный сайт',
    target: 'Разработка сайта, SEO-продвижение, контекстная и медийная реклама, создание и продвижение групп в социальных сетях',
    img: 'img/pop-20.png',
    link: 'headway-cds.ru',
    results: ['Сайт на шаблоне за 5 дней','Реклама в VK с CTR 0,33% процента и конверсией в звонки 22%','Стоимость звонка - 109 рублей'],
    warning: ''
  },
}

var modal = new tingle.modal({
  stickyFooter: false,
  closeMethods: ['overlay', 'button', 'escape'],
  closeLabel: "Close",
  cssClass: ['custom-class-1', 'custom-class-2']
});

const modalWrap = ({title,typeWork,typeSite,target,img,link,results,warning}) => {
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
            <div class='modal__text'>${typeWork}</div>
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
