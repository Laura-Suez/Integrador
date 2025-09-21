// tema.js
// Aplica el tema antes de cualquier render
(function () {
  const body = document.body;
  const toggle = document.getElementById("toggle");

  // Leer tema guardado o usar 'dark' por defecto
  const temaGuardado = localStorage.getItem("tema") || "dark";

  // Aplicar tema inicial
  if (temaGuardado === "light") {
    body.classList.add("light");
    body.classList.remove("dark");
    if (toggle) toggle.checked = true;
  } else {
    body.classList.add("dark");
    body.classList.remove("light");
    if (toggle) toggle.checked = false;
  }

  // Esperar a que el DOM esté cargado para asignar el evento
  document.addEventListener("DOMContentLoaded", () => {
    if (!toggle) return;

    toggle.addEventListener("change", () => {
      if (toggle.checked) {
        body.classList.add("light");
        body.classList.remove("dark");
        localStorage.setItem("tema", "light");
      } else {
        body.classList.add("dark");
        body.classList.remove("light");
        localStorage.setItem("tema", "dark");
      }
    });
  });
})();
