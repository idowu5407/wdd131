// Display the current year and last modified date
window.onload = function() {
  var currentYear = new Date().getFullYear();
  document.getElementById("currentyear").textContent = currentYear;

  var lastModified = document.lastModified;
  document.getElementById("lastModified").textContent = "Last Modified: " + lastModified;
}


document.addEventListener('DOMContentLoaded', () => {
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

