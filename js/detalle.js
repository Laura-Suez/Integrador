// detalle.js
const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id"), 10);

const pelicula = catalogo.find((item) => item.id === id);

const contenedor = document.getElementById("detalle-container");

if (pelicula) {
  contenedor.innerHTML = `
    <h1 class="mb-3">${pelicula.titulo} (${pelicula.Año})</h1>
   
    <p><strong>Descripción:</strong> ${pelicula.Descripcion}</p>
    <p><strong>${
      pelicula.tipo === "pelicula" ? "Director" : "Creador"
    }:</strong> ${pelicula.Director || pelicula.Creador}</p>
    <h4 class="mt-4">Tráiler</h4>
    <div class="ratio ratio-16x9">
      <iframe src="${pelicula.trailer}" title="Tráiler de ${
    pelicula.titulo
  }" allowfullscreen></iframe>
    </div>
  `;
} else {
  contenedor.innerHTML = "<p>No se encontró la película o serie</p>";
}
