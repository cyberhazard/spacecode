export default () => {
  const button  = document.querySelector('#header-button');
  const mobileButton  = document.querySelector('#mobile-menu-button');
  const form = document.querySelector('#callback-form');
  const layout = document.querySelector('.callback');
  const closeButton = document.querySelector('.callback__close');
  const phone = form.querySelector('input[name="phone"]');
  const callbackButton = form.querySelector('button span');
  if(!button || !form || !layout || !closeButton) return null

  const layoutClose = () =>
    (layout.style.display = '',
    document.body.style.paddingRight = '',
    document.body.style.overflow = '',
    layout.removeEventListener('transitionend', layoutClose));

  document.body.onkeyup = e => e.keyCode === 27 && layoutClose();

  closeButton.onclick = () => {
    layout.style.opacity = 0;
    layout.addEventListener('transitionend', layoutClose);
  };

  button.onclick = mobileButton.onclick = () => {
    form.querySelector('input[name="subject"]').value = 'Заказать обратный звонок'
    document.querySelector('.callback__title').textContent = 'Заказать обратный звонок';
    layout.style.display = 'flex';
    form.reset();
    document.body.style.paddingRight = window.innerWidth - document.body.clientWidth + 'px';
    document.body.style.overflow = 'hidden';
    setTimeout(()=>layout.style.opacity = 1,0);
  };

  new Inputmask({ mask: '+7 (999) 999-99-99', placeholder: '*' }).mask(phone);

  form.onsubmit = e => {
    e.preventDefault();
    if (phone.value.indexOf('*') !== -1) return null
    callbackButton.textContent = 'Отправка...'
    const data = new FormData(form);
    fetch('/mail.php', {
      method: 'POST',
      body: data,
    }).then(_=>{
      callbackButton.textContent = 'ЗАЯВКА ОТПРАВЛЕНА';
      setTimeout(() => layoutClose(),1500)
    });
  }
}
