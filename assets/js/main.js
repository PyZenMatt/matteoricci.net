// Main Portfolio JavaScript

document.addEventListener('DOMContentLoaded', function() {
  
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Header background on scroll
  function updateHeaderBackground() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
      header.style.backgroundColor = window.matchMedia('(prefers-color-scheme: dark)').matches 
        ? 'rgba(37, 37, 37, 0.98)' 
        : 'rgba(255, 255, 255, 0.98)';
    } else {
      header.style.backgroundColor = window.matchMedia('(prefers-color-scheme: dark)').matches 
        ? 'rgba(37, 37, 37, 0.95)' 
        : 'rgba(255, 255, 255, 0.95)';
    }
  }

  window.addEventListener('scroll', updateHeaderBackground);
  
  // Listen for system theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateHeaderBackground);

  // Initialize header background
  updateHeaderBackground();

});
