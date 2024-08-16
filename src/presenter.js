import saludar from "./saludador";

const nombre = document.querySelector("#nombre");
const form = document.querySelector("#user-form");
const div = document.querySelector("#divNombre");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombreUsuario = nombre.value

  div.innerHTML = "<p>" + saludar(nombreUsuario) + "</p>";
});
