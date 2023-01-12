// Navbar Fixed
window.onscroll = () => {
  const header = document.querySelector('header');
  // const fixedNav = header.offsetTop;

  if(window.scrollY > 0) {
    header.classList.add('navbar-fixed');
  } else {
    header.classList.remove('navbar-fixed');
  }
}

// Menu
const menu = document.querySelector('#menu');
const navbar = document.querySelector('#navbar');

menu.addEventListener('click', () => {
  menu.classList.toggle('menu-active');
  navbar.classList.toggle('hidden');
});