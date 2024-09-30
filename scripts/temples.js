
// Get the current year and display it in the footer
const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

// Get the last modified date and display it in the footer
const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = `Last Modified: ${lastModified}`;


// Toggle navigation menu
document.getElementById('hamburger').addEventListener('click', function() {
  var navMenu = document.getElementById('navMenu');
  navMenu.classList.toggle('active');
  this.textContent = navMenu.classList.contains('active') ? 'X' : '\u2630'; // Unicode for hamburger menu
});
