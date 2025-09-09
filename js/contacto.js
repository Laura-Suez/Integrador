document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactoForm");

  const campos = {
    nombre: {
      input: document.getElementById("nombre"),
      error: document.getElementById("errorNombre"),
      validar: v => v.trim().length >= 3 || "Debe tener al menos 3 caracteres"
    },
    email: {
      input: document.getElementById("email"),
      error: document.getElementById("errorEmail"),
      validar: v => /\S+@\S+\.\S+/.test(v) || "Correo inválido"
    },
    fecha: {
      input: document.getElementById("fecha"),
      error: document.getElementById("errorFecha"),
      validar: v => v !== "" || "Seleccione una fecha"
    },
    telefono: {
      input: document.getElementById("telefono"),
      error: document.getElementById("errorTelefono"),
      validar: v => /^[0-9\s-]+$/.test(v) || "Teléfono inválido"
    },
    opcion: {
      inputs: [document.getElementById("opcion1"), document.getElementById("opcion2")],
      error: document.getElementById("errorOpcion"),
      validar: () => document.querySelector("input[name='opcion']:checked") !== null || "Debe elegir una opción"
    },
    mensaje: {
      input: document.getElementById("mensaje"),
      error: document.getElementById("errorMensaje"),
      validar: v => v.trim().length >= 5 || "Mensaje demasiado corto"
    }
  };

  function validarCampo(campo) {
    let valor;
    if (campo.input) valor = campo.input.value;
    const resultado = campo.validar(valor);
    if (resultado === true) {
      if (campo.error) campo.error.textContent = "";
      if (campo.input) campo.input.classList.remove("invalido");
    } else {
      if (campo.error) campo.error.textContent = resultado;
      if (campo.input) campo.input.classList.add("invalido");
    }
  }

  for (let key in campos) {
    const campo = campos[key];
    if (campo.input) {
      campo.input.addEventListener("input", () => validarCampo(campo));
    }
    if (campo.inputs) {
      campo.inputs.forEach(radio => {
        radio.addEventListener("change", () => validarCampo(campo));
      });
    }
  }

  form.addEventListener("submit", e => {
    let valido = true;
    for (let key in campos) {
      const campo = campos[key];
      validarCampo(campo);
      if (campo.error && campo.error.textContent !== "") {
        valido = false;
      }
    }
    if (!valido) {
      e.preventDefault();
      alert("Corrige los errores antes de enviar.");
    }
  });
});