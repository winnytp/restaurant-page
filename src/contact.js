import makeElement from './make.js';
import renderHome from './home.js';
import renderMenu from './menu.js';

function renderContact() {
    console.log('Loading contact page.');
    document.querySelector('main').innerHTML = '';

    const mainDiv = document.querySelector('main');
    mainDiv.appendChild(makeElement('div', 'contact', 'center-flex vertical-align'));

    const contactDiv = document.getElementById('contact');
    contactDiv.appendChild(makeElement('h2', '', '', 'Contact'));
    contactDiv.appendChild(makeElement('h3', '', '', 'Call us: +61 123 456 789'));
    contactDiv.appendChild(makeElement('p', '', '', 'E: winny@outlook.com.au'));

    const footer = document.querySelector('footer');
    footer.classList.add('fixed-bottom');

    // Event Listeners
    const menuBtn = document.getElementById('menu-btn');
    menuBtn.addEventListener('click', () => renderMenu());

    const homeBtn = document.getElementById('maple');
    homeBtn.addEventListener('click', () => renderHome());
}

export default renderContact