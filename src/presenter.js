import saludar from "./saludador";

const nombre = document.querySelector("#nombre");
const genero = document.querySelector("#genero")
const form = document.querySelector("#user-form");
const div = document.querySelector("#divNombre");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombreUsuario = nombre.value
  const generoUsuario = genero.value

  div.innerHTML = "<p>" + saludar(nombreUsuario, generoUsuario) + "</p>";
});
