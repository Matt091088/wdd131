

function calculateWindChill(tempC, windKmh) {
  return (13.12 + 0.6215 * tempC - 11.37 * Math.pow(windKmh, 0.16) + 0.3965 * tempC * Math.pow(windKmh, 0.16)).toFixed(1);
}

document.addEventListener('DOMContentLoaded', () => {
  const tempElem = document.getElementById('temp');
  const windElem = document.getElementById('wind');
  const windChillElem = document.getElementById('windchill');

  const temp = parseFloat(tempElem.textContent);
  const wind = parseFloat(windElem.textContent);

  if (temp <= 10 && wind > 4.8) {
    windChillElem.textContent = calculateWindChill(temp, wind) + ' °C';
  } else {
    windChillElem.textContent = temp.toFixed(1) + ' °C';
  }

  // Actualizar footer año y última modificación
  const yearSpan = document.getElementById("year");
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();

  const lastModifiedSpan = document.getElementById("lastModified");
  if (lastModifiedSpan) lastModifiedSpan.textContent = document.lastModified;
});
