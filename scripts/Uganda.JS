/* 
  Author: Rubia Magdalena Francesco
  Course: WDD 131 - Web Development
  File: Uganda.js
  Purpose: Handles dynamic date and wind chill factor for Uganda Country Page
*/

// ✅ Display current year in the footer
document.getElementById("currentYear").textContent = new Date().getFullYear();

// ✅ Display last modification date of the document
document.getElementById("lastModified").textContent = document.lastModified;

// ✅ Calculate Wind Chill (one-line function as per assignment requirement)
function calculateWindChill(t, s) { 
  return 13.12 + 0.6215 * t - 11.37 * Math.pow(s, 0.16) + 0.3965 * t * Math.pow(s, 0.16); 
}

// ✅ Retrieve temperature and wind speed from the page
const temperature = parseFloat(document.getElementById("temperature")?.textContent);
const windSpeed = parseFloat(document.getElementById("windSpeed")?.textContent);

// ✅ Compute wind chill only if valid (temp ≤ 10°C and wind > 4.8 km/h)
if (temperature <= 10 && windSpeed > 4.8) {
  const windChill = calculateWindChill(temperature, windSpeed);
  document.getElementById("windChill").textContent = windChill.toFixed(1) + " °C";
} else {
  document.getElementById("windChill").textContent = "N/A";
}
