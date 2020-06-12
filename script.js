// document.addEventListener(
//   'DOMContentLoaded',
//   function () {
//     let icon = document.getElementById('icon');
//     if (window.innerWidth < 1024) {
//       icon.src = 'img/bars.png';
//     } else {
//       icon.src = 'img/bars-white.png';
//     }
//   },
//   false
// );

// const button = document.getElementById('hamburger');
// let toggle = false;
// function openMenu() {
//   toggle = !toggle;
//   let nav = document.getElementById('nav');
//   nav.classList.toggle('active');

//   if (toggle == true) {
//     document.getElementById('icon');
//     icon.src = 'img/iks.svg';
//   } else {
//     document.getElementById('icon');
//     if (window.innerWidth < 1024) {
//       icon.src = 'img/bars.png';
//     } else {
//       icon.src = 'img/bars-white.png';
//     }
//   }
// }
// button.addEventListener('click', openMenu);
// const menuButton = document.getElementById('buttonClose');
// function closeMenuFromMenu() {
//   let nav = document.getElementById('nav');
//   nav.classList.toggle('active');
// }
// menuButton.addEventListener('click', openMenu);

// const links = document.getElementsByClassName('header__nav__list__item');
// function closeMenuByLink() {
//   let nav = document.getElementById('nav');
//   nav.classList.toggle('active');
//   let icon = document.getElementById('icon');
//   if (window.innerWidth < 1024) {
//     icon.src = 'img/bars.png';
//   } else {
//     icon.src = 'img/bars-white.png';
//   }
// }
// for (var i = 0; i < links.length; i++) {
//   links[i].addEventListener('click', closeMenuByLink, false);
// }
const hamburger = document.getElementById('hamburger');
let nav = document.getElementById('nav');
let x = document.getElementById('x');
let bars = document.getElementById('bars');

function toggleMenu() {
  nav.classList.toggle('active');
  x.classList.toggle('xactive');
  bars.classList.toggle('hamburgerActive');
}
hamburger.addEventListener('click', toggleMenu, false);

const links = document.getElementsByClassName('header__nav__list__item');
function closeMenuByLink() {
  nav.classList.toggle('active');
  x.classList.toggle('xactive');
  bars.classList.toggle('hamburgerActive');
}
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener('click', closeMenuByLink, false);
}
