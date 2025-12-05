import { login } from "./login";

export function createHeader() {
  const main = document.querySelector("#app");
  const header = document.querySelector("#header");
  const buttonLogOut=document.createElement("button")
  buttonLogOut.textContent="Log-Out"
  header.appendChild(buttonLogOut)
  const section = document.createElement("section");
  section.className="section-header-table";

  section.appendChild(createContainerPrincipal());
  section.appendChild(createForm());
  header.appendChild(section);
  buttonLogOut.addEventListener("click",async (e)=>{
    sessionStorage.clear();
    localStorage.clear();
    main.removeChild(document.querySelector(".section-table"))
    document.querySelector(".button-newUser").remove();
    header.innerHTML="";
    document.querySelector(".section-login").style.display="flex"
   await login();
  })

}

function createContainerPrincipal() {
  const head = document.createElement("h1");
  head.textContent = "Panel Administrativo";

  return head;
}

function createForm() {
  const form = document.createElement("form");
  const input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("placeholder", "Buscar...");
  input.addEventListener("input", (event) => {
    const filas = document.querySelectorAll("tbody tr");
    let mensaje = event.target.value.toLowerCase();
    mensaje = mensaje.replace("á", "a");
    mensaje = mensaje.replace("é", "e");
    mensaje = mensaje.replace("í", "i");
    mensaje = mensaje.replace("ó", "o");
    mensaje = mensaje.replace("ú", "u");
    filas.forEach((value) => {
      let obtenido = value.textContent.toLowerCase();
      obtenido = obtenido.replace("á", "a");
      obtenido = obtenido.replace("é", "e");
      obtenido = obtenido.replace("í", "i");
      obtenido = obtenido.replace("ó", "o");
      obtenido = obtenido.replace("ú", "u");

      if (obtenido.toLowerCase().includes(mensaje)) {
        value.style.display = "";
      } else {
        value.style.display = "none";
      }
    });
  });
  form.appendChild(input);
  return form;
}
