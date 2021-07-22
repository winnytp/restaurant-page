import makeElement from './make.js';
import renderHome from './home.js';
import renderContact from './contact.js';

function renderMenu() {
    console.log('Loading menu page.');
    document.querySelector('main').innerHTML = '';

    const mainDiv = document.querySelector('main');
    mainDiv.appendChild(makeElement('div', 'menu', 'center-flex'));

    const menuDiv = document.getElementById('menu');
    menuDiv.appendChild(makeElement('h2', '', '', 'Menu'));
    menuDiv.appendChild(makeElement('div', 'a-menu', 'menu-row'));
    menuDiv.appendChild(makeElement('div', 'b-menu', 'menu-row'));

    const rowA = document.getElementById('a-menu');
    rowA.appendChild(makeElement('div', 'item-1'));
    rowA.appendChild(makeElement('div', 'item-2'));

    const item1 = document.getElementById('item-1');
    item1.appendChild(makeElement('h3', '', '', 'Delicious Pancakes'));
    item1.appendChild(makeElement('p', '', '', '$12.5 per stack with toppings.'));

    const item2 = document.getElementById('item-2');
    item2.appendChild(makeElement('h3', '', '', 'Slice of Cake'));
    item2.appendChild(makeElement('p', '', '', '$7.5 per slice.'));

    const rowB = document.getElementById('b-menu');
    rowB.appendChild(makeElement('div', 'item-3'));
    rowB.appendChild(makeElement('div', 'item-4'));

    const item3 = document.getElementById('item-3');
    item3.appendChild(makeElement('h3', '', '', `Dunkin' Donuts`));
    item3.appendChild(makeElement('p', '', '', `$2 plain or $2.5 flavoured.`));

    const item4 = document.getElementById('item-4');
    item4.appendChild(makeElement('h3', '', '', `Any Drink You Want`));
    item4.appendChild(makeElement('p', '', '', `$3 per glass. Unlimited Refills.`));

    menuDiv.appendChild(makeElement('button', '', '', 'Order Now'));

    const footer = document.querySelector('footer');
    footer.classList.add('fixed-bottom');

    // Add event listeners
    const homeBtn = document.getElementById('maple');
    homeBtn.addEventListener('click', () => renderHome());

    const contactBtn = document.getElementById('contact-btn');
    contactBtn.addEventListener('click', () => renderContact());
}

export default renderMenu