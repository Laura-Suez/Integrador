// codigo Lau
const catalogo = [
  {
    id: 1,
    titulo: "Inception",
    tipo: "pelicula",
    img: "assets/img/peliculas/inception.jpg",
    wallPaper: "assets/img/peliculas/wallpaper/inception.jpg",
    Descripcion:
      "Un ladrón que roba secretos a través de la tecnología de los sueños recibe la misión de implantar una idea en la mente de un empresario.",
    Año: 2010,
    Director: "Christopher Nolan",
    trailer: "https://www.youtube.com/embed/YoHD9XEInc0",
  },
  {
    id: 2,
    titulo: "The Dark Knight",
    tipo: "pelicula",
    img: "assets/img/peliculas/batman.jpg",
    wallPaper: "assets/img/peliculas/wallpaper/dark_knight_landscape_new.jpg",
    Descripcion:
      "Batman y el fiscal Harvey Dent intentan acabar con el crimen organizado en Gotham, pero la aparición del Joker lo cambia todo.",
    Año: 2008,
    Director: "Christopher Nolan",
    trailer: "https://www.youtube.com/embed/EXeTwQWrcwY",
  },
  {
    id: 3,
    titulo: "Avatar",
    tipo: "pelicula",
    img: "assets/img/peliculas/avatar.jpg",
    wallPaper: "assets/img/peliculas/wallpaper/avatar.jpg",
    Descripcion:
      "En un exuberante planeta llamado Pandora viven los Na'vi, seres que aparentan ser primitivos pero que en realidad son muy evolucionados. Debido a que el ambiente de Pandora es venenoso, los híbridos humanos/Na'vi, llamados Avatares, están relacionados con las mentes humanas, lo que les permite moverse libremente por Pandora. Jake Sully, un exinfante de marina paralítico se transforma a través de un Avatar, y se enamora de una mujer Na'vi",
    Año: 2009,
    Director: "James Cameron",
    trailer: "https://www.youtube.com/embed/5PSNL1qE6VY",
  },
  {
    id: 4,
    titulo: "Interstellar",
    tipo: "pelicula",
    img: "assets/img/peliculas/interestellar.jpg",
    Descripcion:
      "Un grupo de astronautas viaja a través de un agujero de gusano en busca de un nuevo planeta habitable para la humanidad.",
    Año: 2014,
    Director: "Christopher Nolan",
    trailer: "https://www.youtube.com/embed/zSWdZVtXT7E",
  },
  {
    id: 5,
    titulo: "Titanic",
    tipo: "pelicula",
    img: "assets/img/peliculas/titanic.jpg",
    Descripcion:
      "Una joven aristócrata se enamora de un artista humilde a bordo del Titanic, mientras el barco se dirige a su trágico destino.",
    Año: 1997,
    Director: "James Cameron",
    trailer: "https://www.youtube.com/embed/kVrqfYjkTdQ",
  },
  {
    id: 6,
    titulo: "Pulp Fiction",
    tipo: "pelicula",
    img: "assets/img/peliculas/Pulp_Fiction.jpg",
    Descripcion:
      "Historias entrelazadas de criminales, boxeadores y mafiosos en un relato caótico e icónico ambientado en Los Ángeles.",
    Año: 1994,
    Director: "Quentin Tarantino",
    trailer: "https://www.youtube.com/embed/s7EdQ4FqbhY",
  },
  {
    id: 7,
    titulo: "The Matrix",
    tipo: "pelicula",
    img: "assets/img/peliculas/matrix.jpg",
    Descripcion:
      "Neo descubre que el mundo en el que vive es una simulación y se une a la resistencia para liberar a la humanidad.",
    Año: 1999,
    Director: "Lana y Lilly Wachowski",
    trailer: "https://www.youtube.com/embed/vKQi3bBA1y8",
  },
  {
    id: 8,
    titulo: "Gladiator",
    tipo: "pelicula",
    img: "assets/img/peliculas/gladiador.jpg",
    Descripcion:
      "Un general romano es traicionado y obligado a luchar como gladiador, buscando venganza contra el emperador corrupto.",
    Año: 2000,
    Director: "Ridley Scott",
    trailer: "https://www.youtube.com/embed/owK1qxDselE",
  },
  {
    id: 9,
    titulo: "Parasite",
    tipo: "pelicula",
    img: "assets/img/peliculas/parasite.jpg",
    Descripcion:
      "Una familia pobre se infiltra en la vida de una familia adinerada, pero una serie de secretos y engaños desencadenan el caos.",
    Año: 2019,
    Director: "Bong Joon-ho",
    trailer: "https://www.youtube.com/embed/5xH0HfJHsaY",
  },
  {
    id: 10,
    titulo: "Oppenheimer",
    tipo: "pelicula",
    img: "assets/img/peliculas/oppenheimer.jpg",
    Descripcion:
      "La vida del físico J. Robert Oppenheimer y el desarrollo del Proyecto Manhattan que llevó a la creación de la bomba atómica.",
    Año: 2023,
    Director: "Christopher Nolan",
    trailer: "https://www.youtube.com/embed/uYPbbksJxIg",
  },
  {
    id: 11,
    titulo: "Breaking Bad",
    tipo: "serie",
    img: "assets/img/series/breakingBad.jpg",
    Descripcion:
      "Un profesor de química diagnosticado con cáncer comienza a fabricar metanfetaminas con un exalumno para asegurar el futuro de su familia.",
    Año: 2008,
    Creador: "Vince Gilligan",
    trailer: "https://www.youtube.com/embed/HhesaQXLuRY",
  },
  {
    id: 12,
    titulo: "Game of Thrones",
    tipo: "serie",
    img: "assets/img/series/gameOfThrones.jpg",
    Descripcion:
      "Nobles familias luchan por el control de los Siete Reinos de Westeros mientras una antigua amenaza se cierne desde el norte.",
    Año: 2011,
    Creador: "David Benioff y D. B. Weiss",
    trailer: "https://www.youtube.com/embed/KPLWWIOCOOQ",
  },
  {
    id: 13,
    titulo: "Stranger Things",
    tipo: "serie",
    img: "assets/img/series/strangerThings.jpg",
    Descripcion:
      "En un pequeño pueblo de los años 80, un grupo de niños enfrenta fenómenos sobrenaturales tras la desaparición de uno de sus amigos.",
    Año: 2016,
    Creador: "Los Hermanos Duffer",
    trailer: "https://www.youtube.com/embed/mnd7sFt5c3A",
  },
  {
    id: 14,
    titulo: "The Crown",
    tipo: "serie",
    img: "assets/img/series/theCrown.jpg",
    Descripcion:
      "La vida de la reina Isabel II y los eventos históricos y políticos que marcaron la segunda mitad del siglo XX en el Reino Unido.",
    Año: 2016,
    Creador: "Peter Morgan",
    trailer: "https://www.youtube.com/embed/JWtnJjn6ng0",
  },
  {
    id: 15,
    titulo: "Dark",
    tipo: "serie",
    img: "assets/img/series/Dark}.jpg",
    Descripcion:
      "En un pueblo alemán, la desaparición de un niño expone secretos familiares y una conspiración que abarca varias generaciones.",
    Año: 2017,
    Creador: "Baran bo Odar y Jantje Friese",
    trailer: "https://www.youtube.com/embed/rrwycJ08PSA",
  },
  {
    id: 16,
    titulo: "The Witcher",
    tipo: "serie",
    img: "assets/img/series/theWitcher.jpg",
    Descripcion:
      "El brujo Geralt de Rivia lucha por encontrar su lugar en un mundo donde los humanos suelen ser más perversos que los monstruos.",
    Año: 2019,
    Creador: "Lauren Schmidt Hissrich",
    trailer: "https://www.youtube.com/embed/ndl1W4ltcmg",
  },
  {
    id: 17,
    titulo: "La Casa de Papel",
    tipo: "serie",
    img: "assets/img/series/laCasaDePapel.jpg",
    Descripcion:
      "Un grupo de delincuentes, liderados por 'El Profesor', lleva a cabo el mayor atraco de la historia en la Fábrica Nacional de Moneda y Timbre.",
    Año: 2017,
    Creador: "Álex Pina",
    trailer: "https://www.youtube.com/embed/To_kVMMu-Ls",
  },
  {
    id: 18,
    titulo: "The Mandalorian",
    tipo: "serie",
    img: "assets/img/series/theMandalorian.jpg",
    Descripcion:
      "Un cazarrecompensas solitario navega por la galaxia lejos de la autoridad de la Nueva República, cuidando a un misterioso niño de la especie de Yoda.",
    Año: 2019,
    Creador: "Jon Favreau",
    trailer: "https://www.youtube.com/embed/aOC8E8z_ifw",
  },
  {
    id: 19,
    titulo: "Friends",
    tipo: "serie",
    img: "assets/img/series/Friends.jpg",
    Descripcion:
      "Seis amigos de Nueva York comparten su vida, sus relaciones y sus aventuras a lo largo de diez temporadas llenas de humor y momentos icónicos.",
    Año: 1994,
    Creador: "David Crane y Marta Kauffman",
    trailer: "https://www.youtube.com/embed/hDNNmeeJs1Q",
  },
  {
    id: 20,
    titulo: "The Office",
    tipo: "serie",
    img: "assets/img/series/theOfficr.jpg",
    Descripcion:
      "Una mirada en formato de falso documental a la vida cotidiana de los empleados de la oficina regional de Dunder Mifflin en Scranton.",
    Año: 2005,
    Creador: "Greg Daniels (versión estadounidense)",
    trailer: "https://www.youtube.com/embed/Vmb1tqYqyII",
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

//Buscador
const inputBuscador = document.getElementById("buscador");
const mensajeError = document.getElementById("mensaje-error");

// Simulación de array de películas (o series)
const peliculas = ["Matrix", "Titanic", "Inception", "Shrek", "Avatar"];

inputBuscador.addEventListener("input", () => {
  const texto = inputBuscador.value.toLowerCase().trim();

  // Si está vacío, limpio todo
  if (texto === "") {
    mensajeError.textContent = "";
    return;
  }

  // Filtrar películas
  const resultados = peliculas.filter((peli) =>
    peli.toLowerCase().includes(texto)
  );

  if (resultados.length === 0) {
    mensajeError.textContent = "No se encontró ninguna coincidencia.";
  } else {
    mensajeError.textContent = "";
    // Acá podrías mostrar los resultados en cards o en lista
    console.log("Coincidencias:", resultados);
  }
});
//fin lau
