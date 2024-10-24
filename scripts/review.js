const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;


const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = `Last Modified: ${lastModified}`;


function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    const reviewData = {};
    params.forEach((value, key) => {
        reviewData[key] = value; 
    });
    return reviewData;
}

function displayReviewDetails(reviewData) {
    const reviewDetailsDiv = document.getElementById('reviewDetails');
    for (const [key, value] of Object.entries(reviewData)) {
        reviewDetailsDiv.innerHTML += `<p><strong>${key}:</strong> ${value}</p>`;
    }
}

let reviewCount = localStorage.getItem('reviewCount') || 0;
reviewCount++;
localStorage.setItem('reviewCount', reviewCount);
document.getElementById('reviewCount').textContent = reviewCount;

const reviewData = getQueryParams();
displayReviewDetails(reviewData);

