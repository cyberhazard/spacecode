export default () => {
  const button  = document.querySelector('#header-button');
  const mobileButton  = document.querySelector('#mobile-menu-button');
  const form = document.querySelector('#callback-form');
  const layout = document.querySelector('.callback');
  const closeButton = document.querySelector('.callback__close');
  if(!button || !form || !layout || !closeButton) return null

  const layoutClose = () =>
    (layout.style.display = '',
    document.body.style.paddingRight = '',
    document.body.style.overflow = '',
    layout.removeEventListener('transitionend', layoutClose));

  closeButton.onclick = () => {
    layout.style.opacity = 0;
    layout.addEventListener('transitionend', layoutClose);
  };

  button.onclick = mobileButton.onclick = () => {
    console.log('click')
    document.querySelector('.callback__title').textContent = 'Заказать обратный звонок';
    layout.style.display = 'flex';
    form.reset();
    document.body.style.paddingRight = window.innerWidth - document.body.clientWidth + 'px';
    document.body.style.overflow = 'hidden';
    setTimeout(()=>layout.style.opacity = 1,0);
  };
}
