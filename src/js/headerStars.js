const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const starImage = '/img/script-star.png';
const header = document.querySelector('.header')
header.style.position = 'relative';

export const startGlow = () => {
  for(let i = 0; i<50; i++){
    let star = new Image();
    star.src = starImage;
    star.classList.add('star')
    star.style.cssText=`
      position: absolute;
      top:${rand(2,90)}%;
      left:${rand(2,95)}%;
      height:${rand(10,30)}px;
      animation:glow ${rand(20,100)/10}s infinite`
    header.appendChild(star)
  }
}
