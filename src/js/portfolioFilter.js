export default () => {
  const buttons = [...document.querySelectorAll('.portfolio__button')];
  const blocks = [...document.querySelectorAll('.portfolio__block')];
  const mobileSelect = document.querySelector('.portfolio__select');
  let out = [];
  const content = document.querySelector('.portfolio__blocks');
  if(!content) return null;
  const lastBlock = blocks.slice(-1)[0];
  const selected = 'portfolio__button_selected';
  content.style.overflow = 'hidden';
  if(buttons && blocks){
    const render = (tag) => {
      if(tag == 'all') out = blocks
      else out = blocks.filter(block=>block.dataset.tag == tag);
      out.push(lastBlock);
      content.innerHTML = "";
      out.forEach((el, i) => {
        el.style.position = 'relative';
        el.style.opacity = 0;
        el.style.transition = '.5s';
        if(i%2==0) el.style.transform = 'translateX(-140px)';
        else el.style.transform = 'translateX(140px)';
      });
      out.forEach(el=>content.appendChild(el));
      out.forEach(el=>setTimeout(()=>(el.style.transform = 'translateX(0)',el.style.opacity = 1),0))
    };
    buttons.forEach(button=>button.addEventListener('click', (e)=>{
      let target = e.target;
      if(target.classList.contains(selected)) return null
      buttons.forEach(b=>b.classList.remove(selected))
      target.classList.add(selected)
      render(target.dataset.tag)
    }))
    mobileSelect.onchange = (e) => render([...mobileSelect.children].filter(el=>el.selected)[0].value)
  }
}
