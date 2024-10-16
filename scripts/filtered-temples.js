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
const temples = [
  {
    name: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    name: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    name: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    name: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    name: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    name: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    name: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg," 
  },
  {
    name: "Atlanta Georgia Temple",
    location: "Atlanta Georgia",
    dedicated: "1983, June, 1",
    area:  "34500",
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/atlanta-georgia-temple/atlanta-georgia-temple-13940-main.jpg"
  },
  {
    name: "Denver Colorado Temple",
    location: "Denver, Colorado",
    dedicated: "1986, October, 24",
    area: " 29117",
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/denver-colorado-temple/denver-colorado-temple-42455-main.jpg"
  },
  {
    name: "Bogotá Colombia Temple",
    location: "Bogotá, Colombia",
    dedicated: "1999, April, 26",
    area: "53500",
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/bogota-colombia-temple/bogota-colombia-temple-7733-main.jpg"
  }
];

// Function to generate temple cards
function displayTemples(filteredTemples) {
  const main = document.querySelector('main');
  main.innerHTML = ''; // Clear existing content
  filteredTemples.forEach(temple => {
    const templeCard = document.createElement('div');
    templeCard.classList.add('temple-card');

    templeCard.innerHTML = `
      <figure>
        <img src="${temple.imageUrl}" alt="${temple.name}" loading="lazy">
        <figcaption>${temple.name}</figcaption>
      </figure>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Area:</strong> ${temple.area} sq ft</p>
    `;

    main.appendChild(templeCard);
  });
}

// Filtering functions
function filterOldTemples() {
  const oldTemples = temples.filter(temple => temple.dedicated < 1900);
  displayTemples(oldTemples);
}

function filterNewTemples() {
  const newTemples = temples.filter(temple => temple.dedicated > 2000);
  displayTemples(newTemples);
}

function filterLargeTemples() {
  const largeTemples = temples.filter(temple => temple.area > 90000);
  displayTemples(largeTemples);
}

function filterSmallTemples() {
  const smallTemples = temples.filter(temple => temple.area < 10000);
  displayTemples(smallTemples);
}

// Event listeners for navigation
document.querySelector('nav a[href="#home"]').addEventListener('click', () => displayTemples(temples));
document.querySelector('nav a[href="#old"]').addEventListener('click', filterOldTemples);
document.querySelector('nav a[href="#new"]').addEventListener('click', filterNewTemples);
document.querySelector('nav a[href="#large"]').addEventListener('click', filterLargeTemples);
document.querySelector('nav a[href="#small"]').addEventListener('click', filterSmallTemples);

// Display all temples by default on page load
displayTemples(temples);