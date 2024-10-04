document.addEventListener('DOMContentLoaded', () => {
  // Set the current year
  var currentYear = new Date().getFullYear();
  document.getElementById("currentyear").textContent = currentYear;

  // Set the last modified date
  var lastModified = document.lastModified;
  document.getElementById("lastModified").textContent = "Last Modified: " + lastModified;

  // Hamburger menu functionality
  const nav = document.querySelector('nav ul');
  const hamburger = document.createElement('button');
  hamburger.innerText = '☰';  // Hamburger icon
  hamburger.classList.add('hamburger');
  document.querySelector('header').prepend(hamburger);
  hamburger.addEventListener('click', () => {
      nav.classList.toggle('open');
      hamburger.innerText = hamburger.innerText === '☰' ? 'X' : '☰'; // Toggle icon
  });
});
