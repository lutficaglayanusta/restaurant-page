const homeButton = document.querySelector('.home');
const menuButton = document.querySelector('.menu');
const aboutButton = document.querySelector('.about');
const content = document.getElementById('content');

import homePage from './js/home.js';
import menuPage from './js/menu.js';
import aboutPage from './js/about.js'

homeButton.addEventListener('click', () => {
  content.innerHTML = '';
  homePage();
});
menuButton.addEventListener('click', () => {
  content.innerHTML = '';
  menuPage();
});
aboutButton.addEventListener('click', () => {
  content.innerHTML = '';
  aboutPage();
})
