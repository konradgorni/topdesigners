const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');
const x = document.getElementById('x');
const bars = document.getElementById('bars');

function toggleMenu() {
  nav.classList.toggle('active');
  x.classList.toggle('xactive');
  x.style.color = 'white';
  bars.classList.toggle('hamburgerActive');
}
hamburger.addEventListener('click', toggleMenu, false);
const links = document.querySelectorAll('.header__nav__list__item');
links.forEach((element) =>
  element.addEventListener('click', toggleMenu, false)
);
