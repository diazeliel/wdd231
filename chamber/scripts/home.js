//hamburguer menu
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

// Set last modified date in footer
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('lastModified').textContent = document.lastModified;
});