// Footer dinámico
document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelector('#lastModified').textContent = document.lastModified;

// Menú hamburguesa
const menuButton = document.querySelector('#menu');
const nav = document.querySelector('#nav-menu');

menuButton.addEventListener('click', () => {
  nav.classList.toggle('open');
  menuButton.textContent = nav.classList.contains('open') ? '✖' : '☰';
});
