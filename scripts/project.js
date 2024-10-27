// Initialize cart count in localStorage
let cartCount = localStorage.getItem("cartCount") || 0;
document.querySelector(".cart-btn").textContent = `Cart (${cartCount})`;

// Add item to cart and update cart count
function addToCart() {
    cartCount++;
    localStorage.setItem("cartCount", cartCount);
    document.querySelector(".cart-btn").textContent = `Cart (${cartCount})`;
}

// Event listener for chat button
document.getElementById("chat-btn").addEventListener("click", () => {
    alert("Chat with us!");
});

// Example function to lazy load images
document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll("img");
    images.forEach((img) => {
        img.loading = "lazy";
    });
});

  // Set current year in footer
  document.getElementById('currentYear').textContent = new Date().getFullYear();

  // Set last modified date in footer
  document.getElementById('lastModified').textContent = document.lastModified;
});