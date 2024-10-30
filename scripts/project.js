 // Toggle Mobile Menu
function toggleMenu() {
  document.querySelector('.nav-links').classList.toggle('active');
  if (nav.classList.contains('active')) { hamburger.textContent = '✖'; 
  } 
    else { hamburger.textContent = '☰'; 
  } }

  // DOM Content Loaded Event
  document.addEventListener('DOMContentLoaded', () => {
    // Set the current year
    const currentYear = new Date().getFullYear();
    document.getElementById("currentyear").textContent = currentYear;

    // Set the last modified date
    const lastModified = document.lastModified;
    document.getElementById("lastModified").textContent = "Last Modified: " + lastModified;

});

// Image Slideshow Animation
let currentImageIndex = 0;
const images = document.querySelectorAll('.hero-images img');
setInterval(() => {
  images.forEach((img, index) => {
    img.style.opacity = index === currentImageIndex ? '1' : '0';
  });
  currentImageIndex = (currentImageIndex + 1) % images.length;
}, 3000);

// Gallery Generation
const galleryData = [
  { src: 'gallery1.jpg', name: 'Artwork 1', year: '2021' },
  { src: 'gallery2.jpg', name: 'Artwork 2', year: '2020' },
  { src: 'gallery3.jpg', name: 'Artwork 3', year: '2019' },
  { src: 'gallery4.jpg', name: 'Artwork 4', year: '2018' },
  { src: 'gallery5.jpg', name: 'Artwork 5', year: '2017' }
];

function loadGallery() {
  const galleryGrid = document.getElementById('gallery-grid');
  galleryData.forEach(item => {
    const galleryItem = document.createElement('div');
    galleryItem.classList.add('gallery-item');

    const img = document.createElement('img');
    img.src = item.src;
    img.alt = item.name;
    img.loading = "lazy";

    const caption = document.createElement('p');
    caption.textContent = `${item.name} (${item.year})`;

    galleryItem.appendChild(img);
    galleryItem.appendChild(caption);
    galleryGrid.appendChild(galleryItem);
  });
}

loadGallery();

// Form Submission
function submitForm(event) {
  event.preventDefault();
  const responseMessage = document.querySelector('.response-message');
  responseMessage.textContent = "Thank you for subscribing!";
}