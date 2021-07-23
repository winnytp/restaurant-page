import makeElement from './make.js';

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
}

export default renderContact