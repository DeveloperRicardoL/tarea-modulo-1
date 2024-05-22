import "./style.css";

const botonEnviar = document.querySelector("#boton_enviar");
const resp = document.querySelector("#resp");

function traerNombre() {
  let nom = document.getElementById("nombre").value.toUpperCase();
  console.log(`Hola ${nom}, ¿como estas?`);
  return nom;
}

botonEnviar.addEventListener("click", () => {
  console.log(traerNombre());
  resp.innerText = `Hola ${traerNombre()} 👋​`;
  document.getElementById("nombre").value = "";
});
