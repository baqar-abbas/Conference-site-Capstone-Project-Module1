/* eslint-disable linebreak-style */

const navMenu = document.querySelector('.nav-menu');
const cross = document.querySelector('#cross');
const mobileMenu = document.querySelector('.mobile-menu');
const ham = document.querySelector('.imageone');

const menuOpen = (event) => {
  navMenu.style.display = 'none';
  mobileMenu.style.display = 'flex';
  event.preventDefault();
};
const menuClose = () => {
  mobileMenu.style.display = 'none';
  navMenu.style.display = 'block';
};

ham.addEventListener('click', menuOpen);
cross.addEventListener('click', menuClose);
mobileMenu.addEventListener('click', menuClose);
