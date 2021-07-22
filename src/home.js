import makeElement from './make.js';
import renderMenu from './menu.js';
import renderContact from './contact.js';

function renderHome() {
    console.log('Loading home page.')

    const content = document.querySelector('#content');
    content.innerHTML = '';
    content.appendChild(makeElement('nav'));

    const nav = document.querySelector('nav');
    nav.appendChild(makeElement('ul'));

    const navUl = document.querySelector('ul');
    navUl.appendChild(makeElement('li', 'maple', '', `Maple's`));
    navUl.appendChild(makeElement('li', 'menu-btn', 'right', 'Menu'));
    navUl.appendChild(makeElement('li', 'contact-btn', '', 'Contact'));

    content.appendChild(makeElement('main'));

    const main = document.querySelector('main');
    main.appendChild(makeElement('div', '', 'hero center-flex'));

    const hero = document.querySelector('.hero');
    hero.appendChild(makeElement('h2', '', '', `<span>Welcome to</span><br>Maple's Restaurant.`));
    hero.appendChild(makeElement('div', 'hero-btn'));

    const heroBtn = document.getElementById('hero-btn');
    heroBtn.appendChild(makeElement('button', '', '', 'Delivery'));
    heroBtn.appendChild(makeElement('button', 'blue-btn', '', 'Book Now'));

    main.appendChild(makeElement('div', '', 'container'));

    const container = document.querySelector('.container');
    container.appendChild(makeElement('div', '', 'side-margin center-flex'));

    const containerContent = document.querySelector('.side-margin');
    containerContent.appendChild(makeElement('h2', '', '', 'Pancakes are our <br><span>obsession.</span>'));
    containerContent.appendChild(makeElement('p', '', '', `There's nothing like some fluffy, warm pancakes for breakfast, lunch, and dinner.`));
    containerContent.appendChild(makeElement('p', '', '', `We're open from <strong>dawn 'til dusk</strong>, so come on in and grab a pancake stacked with fresh fruit, Nutella choc, and our signature Maple Special Syrup.`));

    container.appendChild(makeElement('div', 'pancake-image', 'center-flex'));

    const pancakeImageDiv = document.getElementById('pancake-image');
    let pancakeImage = document.createElement('img');
    pancakeImage.setAttribute('src', './assets/pancake.png');
    pancakeImage.setAttribute('width', '256');
    pancakeImage.setAttribute('height', '256');
    pancakeImageDiv.appendChild(pancakeImage);

    content.appendChild(makeElement('footer'));
    const footer = document.querySelector('footer');
    footer.classList.remove('fixed-bottom');
    footer.appendChild(makeElement('p', '', '', `Coded by <a href='https://github.com/winnytp/restaurant-page'>@winnytp`));
    footer.appendChild(makeElement('p', '', '', `Maple's © 2021 | All Rights Reserved`));

    // Add event listeners
    const menuBtn = document.getElementById('menu-btn');
    menuBtn.addEventListener('click', () => renderMenu());

    const contactBtn = document.getElementById('contact-btn');
    contactBtn.addEventListener('click', () => renderContact());
}

export default renderHome