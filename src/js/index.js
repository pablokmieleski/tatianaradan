import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('HELLO 🚀')

const NAV = document.querySelector('nav');
const ITEM = document.querySelectorAll('nav ul li');
const HBUTTON = document.querySelector('#hamburger');

HBUTTON.onclick = function() {
    this.classList.toggle('trans');
    NAV.classList.toggle('show');
};

function actionMenu() {
    NAV.classList.remove('show');
    HBUTTON.classList.remove('trans');
}

ITEM[0].onclick = actionMenu;
ITEM[1].onclick = actionMenu;
ITEM[2].onclick = actionMenu;
