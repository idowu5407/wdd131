// Wind Chill Calculation
function calculateWindChill(temp, windSpeed) {
  return (temp <= 10 && windSpeed > 4.8) ?
      (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(1) :
      "N/A";
}

// Static values for temperature and wind speed
let temperature = 10;  // Example static value
let windSpeed = 5;     // Example static value

document.addEventListener('DOMContentLoaded', () => {
  // Calculate and display wind chill
  const windChill = calculateWindChill(temperature, windSpeed);
  document.getElementById('windChill').innerText = windChill;

  // Set current year in footer
  document.getElementById('currentYear').textContent = new Date().getFullYear();

  // Set last modified date in footer
  document.getElementById('lastModified').textContent = document.lastModified;
});