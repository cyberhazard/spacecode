export default () => {
  const buttons = [...document.querySelectorAll('.portfolio__button')];
  const blocks = [...document.querySelectorAll('.portfolio__block')];
  let out = [];
  const content = document.querySelector('.portfolio__blocks');
  const lastBlock = blocks.slice(-1)[0];
  const selected = 'portfolio__button_selected';
  if(buttons && blocks){
    const render = (tag) => {
      if(tag == 'all') out = blocks
      else out = blocks.filter(block=>block.dataset.tag == tag);
      out.push(lastBlock);
      content.innerHTML = "";
      out.forEach(el=>content.appendChild(el))
    };
    buttons.forEach(button=>button.addEventListener('click', (e)=>{
      let target = e.target;
      if(target.classList.contains(selected)) return null
      buttons.forEach(b=>b.classList.remove(selected))
      target.classList.add(selected)
      render(target.dataset.tag)
    }))
  }
}