import renderMenu from './menu.js';
import renderHome from './home.js';

renderHome();

const homeBtn = document.getElementById('maple');
homeBtn.addEventListener('click', () => renderHome());

const menuBtn = document.getElementById('menu-btn');
menuBtn.addEventListener('click', () => renderMenu());