import filter from './portfolioFilter';
import { slider, lightBox } from './thanks-slider';
import { startGlow } from './headerStars';
import { calc } from './calc';
import callback from './callback';

const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuClose = document.querySelector('.mobile-menu__close');

hamburger.onclick = () => mobileMenu.style.transform = 'translateX(0)'
mobileMenuClose.onclick = () => mobileMenu.style.transform = ''

filter();
startGlow();
calc();
callback()
lightBox();
