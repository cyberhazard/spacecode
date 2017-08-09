import filter from './portfolioFilter';
import { slider, lightBox } from './thanks-slider';
import { startGlow } from './headerStars';
import { calc } from './calc';
import callback from './callback';
import anim from 'animated-scroll-to';

const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuClose = document.querySelector('.mobile-menu__close');

hamburger.onclick = () => mobileMenu.style.transform = 'translateX(0)'
mobileMenuClose.onclick = () => mobileMenu.style.transform = '';

// Header Mouse animated scroll
const mouse = document.querySelector('.header__mouse');
const scrollToBlock = document.querySelector('.services');
if(mouse && scrollToBlock){
  mouse.onclick = () => {
    const bodyScroll = document.body.scrollTop;
    const scroll = scrollToBlock.getBoundingClientRect().top + bodyScroll;
    anim(scroll)
  }
}

filter();
startGlow();
calc();
callback()
lightBox(.3);
