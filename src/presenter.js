import saludar from "./saludador";

const nombre = document.querySelector("#nombre");
const genero = document.querySelector("#genero");
const edad = document.querySelector("#edad")
const form = document.querySelector("#user-form");
const div = document.querySelector("#divNombre");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombreUsuario = nombre.value
  const generoUsuario = genero.value
  const edadUsuario = Number.parseInt(edad.value)

  div.innerHTML = "<p>" + saludar(nombreUsuario, generoUsuario, edadUsuario) + "</p>";
});
