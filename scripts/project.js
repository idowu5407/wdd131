const nav = document.querySelector('.nav-links');
const hamburger = document.querySelector('.hamburger');

function toggleMenu() {
    nav.classList.toggle('active');
    hamburger.textContent = nav.classList.contains('active') ? '✖' : '☰';
}

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', () => {
    const currentYear = new Date().getFullYear();
    document.getElementById("currentyear").textContent = currentYear;

    const lastModified = document.lastModified;
    document.getElementById("lastModified").textContent = "Last Modified: " + lastModified;
});

function showDetails(artPiece) {
    const details = artPiece.querySelector('.details');
    details.style.display = details.style.display === "block" ? "none" : "block";
}