// Mostrar año actual en footer
document.getElementById('year').textContent = new Date().getFullYear();

// Array con todos los productos y sus imágenes
const products = [
  {
    name: "Panel TV with Slots",
    images: ["images/paneltv-ranuras.webp", "images/paneltvconranuras.webp"],
    description: "TV panel with slots for good air flow.",
    stock: 4
  },
  {
    name: "Rack TV with Drawers",
    images: ["images/racktvcajones.webp"],
    description: "TV rack with storage drawers for extra space.",
    stock: 5
  },
  {
    name: "Deluxe Kitchen Set",
    images: ["images/cocinadeluxe2.webp"],
    description: "Modern deluxe kitchen with nice design.",
    stock: 2
  },
  {
    name: "L-Shaped Kitchen",
    images: ["images/cocinaenl.jpeg", "images/cocinaenl2.JPG"],
    description: "Elegant L-shaped kitchen with bright finish.",
    stock: 2
  },
  {
    name: "Prototype Itaembeguazu Kitchen",
    images: ["images/cocinaprotipoitaembeguazu.webp"],
    description: "Prototype kitchen design from Itaembeguazu.",
    stock: 1
  },
  {
    name: "Glass Decoration",
    images: ["images/deco-vidrio.webp", "images/florerovidrio.jpeg", "images/cuadrovidrio.jpeg"],
    description: "Beautiful glass decoration pieces.",
    stock: 6
  },
  {
    name: "Ceramic & Striped Decorations",
    images: ["images/adornoceramica.jpeg", "images/adornosrayados.jpeg"],
    description: "Handmade ceramic and stylish striped decorative items.",
    stock: 5
  }
];

// Crear carousel con miniaturas debajo (sin botones encima)
function createImageCarousel(images) {
  let currentIndex = 0;

  // Contenedor principal
  const container = document.createElement("div");
  container.classList.add("product-images-container");

  // Imagen principal
  const img = document.createElement("img");
  img.classList.add("product-image");
  img.src = images[0];
  img.alt = "Product image";
  container.appendChild(img);

  if (images.length > 1) {
    // Contenedor de miniaturas
    const thumbsContainer = document.createElement("div");
    thumbsContainer.classList.add("thumbnail-container");
    thumbsContainer.style.display = "flex";
    thumbsContainer.style.justifyContent = "center";
    thumbsContainer.style.gap = "8px";
    thumbsContainer.style.marginTop = "8px";

    images.forEach((src, index) => {
      const thumb = document.createElement("img");
      thumb.src = src;
      thumb.alt = `Thumbnail ${index + 1}`;
      thumb.style.width = "50px";
      thumb.style.height = "50px";
      thumb.style.objectFit = "contain";
      thumb.style.cursor = "pointer";
      thumb.style.border = index === 0 ? "2px solid #ffd700" : "1px solid #ccc";
      thumb.style.borderRadius = "4px";

      thumb.addEventListener("click", () => {
        img.src = src;

        // Remover borde de todos
        thumbsContainer.querySelectorAll("img").forEach(i => {
          i.style.border = "1px solid #ccc";
        });

        // Poner borde al seleccionado
        thumb.style.border = "2px solid #ffd700";
      });

      thumbsContainer.appendChild(thumb);
    });

    container.appendChild(thumbsContainer);
  }

  return container;
}

// Mostrar productos en la página
function displayProducts() {
  const container = document.getElementById("product-list");
  if (!container) return;

  container.innerHTML = ""; // limpiar contenido previo

  products.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("product-card");

    const carousel = createImageCarousel(product.images);

    const name = document.createElement("h3");
    name.textContent = product.name;

    const desc = document.createElement("p");
    desc.textContent = product.description;

    const stock = document.createElement("p");
    stock.innerHTML = `<strong>In stock:</strong> ${product.stock > 0 ? product.stock : 'Out of stock'}`;

    const button = document.createElement("button");
    button.textContent = "Add to Cart";
    if (product.stock === 0) button.disabled = true;

    button.addEventListener("click", () => {
      alert(`Added ${product.name} to your cart!`);
    });

    card.appendChild(carousel);
    card.appendChild(name);
    card.appendChild(desc);
    card.appendChild(stock);
    card.appendChild(button);

    container.appendChild(card);
  });
}

displayProducts();

// Formulario contacto con localStorage y contador
const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    const thanksMessage = document.getElementById("thanks");

    if (name && email && message) {
      let count = Number(localStorage.getItem("messageCount")) || 0;
      count++;
      localStorage.setItem("messageCount", count);

      thanksMessage.textContent = `Thanks, ${name}! You have sent ${count} messages so far.`;
      form.reset();
    } else {
      thanksMessage.textContent = "Please fill out all fields.";
    }
  });
}
