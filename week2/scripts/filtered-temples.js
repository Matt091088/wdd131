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

// Lista de templos
const temples = [
  {
    templeName: "Córdoba Argentina",
    location: "Córdoba, Argentina",
    dedicated: "2015, May, 17",
    area: 32100,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/cordoba-argentina/400x250/cordoba-argentina-temple-lds-1536043-wallpaper.jpg"
  },
  {
    templeName: "Salta Argentina",
    location: "Salta, Argentina",
    dedicated: "2023, September, 3",
    area: 27000,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/b8f1fdf83f87873d842c2ab51c52831cc3c726c2/full/400%2C/0/default"
  },
  {
    templeName: "Buenos Aires Argentina",
    location: "Buenos Aires, Argentina",
    dedicated: "1986, January, 17",
    area: 44000,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/buenos-aires-argentina/400x250/buenos-aires-temple-lds-1108807-wallpaper.jpg"
  },
  {
    templeName: "Recife Brazil",
    location: "Recife, Brazil",
    dedicated: "2000, December, 15",
    area: 37000,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/recife-brazil/400x250/recife-temple-lds-904159-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-lds-782998-wallpaper.jpg"
  },
  {
    templeName: "Sapporo Japan",
    location: "Sapporo, Japan",
    dedicated: "2016, August, 21",
    area: 48480,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sapporo-japan/400x250/sapporo-temple-lds-1901053-wallpaper.jpg"
  },
  {
    templeName: "Santiago Chile",
    location: "Santiago, Chile",
    dedicated: "1983, September, 15",
    area: 20585,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/santiago-chile/400x250/santiago-temple-lds-1068974-wallpaper.jpg"
  },
  // Inventados
  {
    templeName: "Patagonia Temple",
    location: "Bariloche, Argentina",
    dedicated: "2025, March, 1",
    area: 18000,
    imageUrl: "https://via.placeholder.com/400x250?text=Patagonia+Temple"
  },
  {
    templeName: "Montevideo North Temple",
    location: "Montevideo, Uruguay",
    dedicated: "2026, June, 20",
    area: 9500,
    imageUrl: "https://via.placeholder.com/400x250?text=Montevideo+North+Temple"
  },
  {
    templeName: "Templo Andino",
    location: "Mendoza, Argentina",
    dedicated: "2024, April, 15",
    area: 10100,
    imageUrl: "https://via.placeholder.com/400x250?text=Templo+Andino"
  }
];


// Mostrar templos en pantalla
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

// Botones de navegación
document.querySelector("#home").addEventListener("click", () => filterTemples("all"));
document.querySelector("#old").addEventListener("click", () => filterTemples("old"));
document.querySelector("#new").addEventListener("click", () => filterTemples("new"));
document.querySelector("#large").addEventListener("click", () => filterTemples("large"));
document.querySelector("#small").addEventListener("click", () => filterTemples("small"));

// Mostrar todos al cargar
document.addEventListener("DOMContentLoaded", () => {
  outputTemples(temples);
});

