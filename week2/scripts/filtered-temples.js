// Footer dinámico
document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelector('#lastModified').textContent = document.lastModified;

// Menú hamburguesa
const menuButton = document.querySelector('#menu');
const nav = document.querySelector('#nav-menu');

menuButton.addEventListener('click', () => {
  nav.classList.toggle('open');
  menuButton.textContent = nav.classList.contains('open') ? '✖' : '☰';
});

  const temples = [
  {
    templeName: "Córdoba Argentina",
    location: "Córdoba, Argentina",
    dedicated: "2015, May, 17",
    area: 32100,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Templo_de_C%C3%B3rdoba_Argentina_2015.jpg"
  },
  {
    templeName: "Salta Argentina",
    location: "Salta, Argentina",
    dedicated: "2023, September, 3",
    area: 27000,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Salta_Catedral.JPG"
  },
  {
    templeName: "Buenos Aires Argentina",
    location: "Buenos Aires, Argentina",
    dedicated: "1986, January, 17",
    area: 44000,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/54/Buenos_Aires_-_Templo_Morm%C3%B3n_01.jpg"
  },
  {
    templeName: "Recife Brazil",
    location: "Recife, Brazil",
    dedicated: "2000, December, 15",
    area: 37000,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/90/Templo_de_Recife_-_Brasil.JPG"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Mexico_City_Mormon_Temple.JPG"
  },
  {
    templeName: "Sapporo Japan",
    location: "Sapporo, Japan",
    dedicated: "2016, August, 21",
    area: 48480,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Sapporo_Mormon_Temple_02.jpg"
  },
  {
    templeName: "Santiago Chile",
    location: "Santiago, Chile",
    dedicated: "1983, September, 15",
    area: 20585,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/04/Templo_Morm%C3%B3n_de_Santiago.jpg"
  },
  {
    templeName: "Patagonia Temple",
    location: "Bariloche, Argentina",
    dedicated: "2025, March, 1",
    area: 18000,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/76/Temple_in_Chile.jpg"
  },
  {
    templeName: "Montevideo North Temple",
    location: "Montevideo, Uruguay",
    dedicated: "2026, June, 20",
    area: 9500,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Temple_in_Cochabamba.jpg"
  },
  {
    templeName: "Templo Andino",
    location: "Mendoza, Argentina",
    dedicated: "2024, April, 15",
    area: 10100,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Temple_Buenos_Aires.jpg"
  }
];

// Mostrar templos
function outputTemples(temples) {
  const container = document.querySelector("#temples");
  container.innerHTML = "";

  temples.forEach((temple) => {
    const card = document.createElement("section");

    const name = document.createElement("h2");
    name.textContent = temple.templeName;

    const location = document.createElement("p");
    location.textContent = `Location: ${temple.location}`;

    const dedication = document.createElement("p");
    dedication.textContent = `Dedicated: ${temple.dedicated}`;

    const area = document.createElement("p");
    area.textContent = `Area: ${temple.area} sq ft`;

    const image = document.createElement("img");
    image.setAttribute("src", temple.imageUrl);
    image.setAttribute("alt", `${temple.templeName}`);
    image.setAttribute("loading", "lazy");

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(area);
    card.appendChild(image);

    container.appendChild(card);
  });
}

// Filtros
function filterTemples(criteria) {
  let filtered = [];

  switch (criteria) {
    case "old":
      filtered = temples.filter(t => new Date(t.dedicated).getFullYear() < 1900);
      break;
    case "new":
      filtered = temples.filter(t => new Date(t.dedicated).getFullYear() > 2000);
      break;
    case "large":
      filtered = temples.filter(t => t.area > 90000);
      break;
    case "small":
      filtered = temples.filter(t => t.area < 10000);
      break;
    default:
      filtered = temples;
  }

  outputTemples(filtered);
}

// Botones
document.querySelector("#home").addEventListener("click", () => filterTemples("all"));
document.querySelector("#old").addEventListener("click", () => filterTemples("old"));
document.querySelector("#new").addEventListener("click", () => filterTemples("new"));
document.querySelector("#large").addEventListener("click", () => filterTemples("large"));
document.querySelector("#small").addEventListener("click", () => filterTemples("small"));

// Cargar templos por defecto
document.addEventListener("DOMContentLoaded", () => {
  outputTemples(temples);
});
