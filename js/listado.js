// Array de películas y series (igual que antes)
const catalogo = [
  {
    id: 1,
    titulo: "Inception",
    tipo: "pelicula",
    img: "assets/img/peliculas/inception.jpg",
    wallPaper: "assets/img/series/wallpaper/inception.jpg",
  },
  {
    id: 2,
    titulo: "Interstellar",
    tipo: "pelicula",
    img: "assets/img/peliculas/interestellar.jpg",
  },
  {
    id: 3,
    titulo: "The Dark Knight",
    tipo: "pelicula",
    img: "assets/img/peliculas/batman.jpg",
  },
  {
    id: 4,
    titulo: "Avatar",
    tipo: "pelicula",
    img: "assets/img/peliculas/avatar.jpg",
  },
  {
    id: 5,
    titulo: "Titanic",
    tipo: "pelicula",
    img: "assets/img/peliculas/titanic.jpg",
  },
  {
    id: 6,
    titulo: "Pulp Fiction",
    tipo: "pelicula",
    img: "assets/img/peliculas/Pulp_Fiction.jpg",
  },
  {
    id: 7,
    titulo: "The Matrix",
    tipo: "pelicula",
    img: "assets/img/peliculas/matrix.jpg",
  },
  {
    id: 8,
    titulo: "Gladiator",
    tipo: "pelicula",
    img: "assets/img/peliculas/gladiador.jpg",
  },
  {
    id: 9,
    titulo: "Parasite",
    tipo: "pelicula",
    img: "assets/img/peliculas/parasite.jpg",
  },
  {
    id: 10,
    titulo: "Oppenheimer",
    tipo: "pelicula",
    img: "assets/img/peliculas/oppenheimer.jpg",
  },
  {
    id: 11,
    titulo: "Breaking Bad",
    tipo: "serie",
    img: "assets/img/series/breakingBad.jpg",
    wallPaper: "assets / img / series / wallpaper / breakingBad.jpg",
  },
  {
    id: 12,
    titulo: "Game of Thrones",
    tipo: "serie",
    img: "assets/img/series/gameOfThrones.jpg",
  },
  {
    id: 13,
    titulo: "Stranger Things",
    tipo: "serie",
    img: "assets/img/series/strangerThings.jpg",
  },
  {
    id: 14,
    titulo: "The Crown",
    tipo: "serie",
    img: "assets/img/series/theCrown.jpg",
  },
  { id: 15, titulo: "Dark", tipo: "serie", img: "assets/img/series/Dark}.jpg" },
  {
    id: 16,
    titulo: "The Witcher",
    tipo: "serie",
    img: "assets/img/series/theWitcher.jpg",
  },
  {
    id: 17,
    titulo: "La Casa de Papel",
    tipo: "serie",
    img: "assets/img/series/laCasaDePapel.jpg",
  },
  {
    id: 18,
    titulo: "The Mandalorian",
    tipo: "serie",
    img: "assets/img/series/theMandalorian.jpg",
  },
  {
    id: 19,
    titulo: "Friends",
    tipo: "serie",
    img: "assets/img/series/Friends.jpg",
  },
  {
    id: 20,
    titulo: "The Office",
    tipo: "serie",
    img: "assets/img/series/theOfficr.jpg",
  },
];

// Carrusel principal (grande)
function carruselPrincipal() {
  const container = document.getElementById("carousel-principal-inner");
  if (!container) return;
  const peliculas = catalogo.filter((p) => p.tipo === "pelicula").slice(0, 3);
  peliculas.forEach((peli, index) => {
    const div = document.createElement("div");
    div.classList.add("carousel-item");
    if (index === 0) div.classList.add("active");
    div.innerHTML = `
      <img src="${peli.wallPaper}" class="d-block w-100" alt="${peli.titulo}" style="height:60vh; object-fit:cover; filter: brightness(70%);">
      <div class="carousel-caption d-none d-md-block">
        <h5>${peli.titulo}</h5>
        <a href="#" class="btn btn-danger">Ver ahora</a>
      </div>
    `;
    container.appendChild(div);
  });
}

// Carrusel horizontal
function carruselHorizontal(idContenedor, lista) {
  const container = document.getElementById(idContenedor);
  if (!container) return;
  lista.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <img src="${item.img}" class="img-fluid rounded" alt="${item.titulo}">
      <h6 class="mt-1">${item.titulo}</h6>
    `;
    container.appendChild(card);
  });
}

// Inicialización
carruselPrincipal();
carruselHorizontal(
  "peliculas-destacadas",
  catalogo.filter((p) => p.tipo === "pelicula").slice(0, 6)
);
carruselHorizontal(
  "series-destacadas",
  catalogo.filter((s) => s.tipo === "serie").slice(0, 6)
);
