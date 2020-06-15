const hamburger = document.getElementById('hamburger');
let nav = document.getElementById('nav');
let x = document.getElementById('x');
let bars = document.getElementById('bars');

function toggleMenu() {
  nav.classList.toggle('active');
  console.log(innerHeight);
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
