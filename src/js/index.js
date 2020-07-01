import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('HELLO 🚀')

// const NAV = document.querySelector('nav');
//const ITEM = document.querySelectorAll('nav ul li');
//const HBUTTON = document.querySelector('#hamburger');

//HBUTTON.onclick = function() {
//    this.classList.toggle('trans');
//   NAV.classList.toggle('show');
//};

//function actionMenu() {
//    NAV.classList.remove('show');
//   HBUTTON.classList.remove('trans');
//}

//ITEM[0].onclick = actionMenu;
//ITEM[1].onclick = actionMenu;
//ITEM[2].onclick = actionMenu;


const hamburger = document.querySelector('.hamburger--js');
const navigationX = document.querySelector('.navigation__list--js');

hamburger.addEventListener('click', (e) => {
    const navigationList = document.querySelector('.navigation__list--js');
    navigationList.classList.toggle('navigation__list--visible');
    if (navigationX.classList.contains('navigation__list--visible')) {
        hamburger.innerHTML = 'X';
    } else {
        hamburger.innerHTML = '≡';
    }
});