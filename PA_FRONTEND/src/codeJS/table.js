import { getAllUser } from "./apiFetch";
import { createContextMenu } from "./contextMenu";

export function createMain() {
  let usuarios;
  if (sessionStorage.getItem("usuarios") === null) {
    usuarios = getAllUser();
  }
  const app = document.querySelector("#app");
  const section = document.createElement("section");
  section.className = "section-table";
  const button = document.createElement("button");

  const containerButton = document.createElement("div");
  containerButton.appendChild(button);
  button.textContent = "Nuevo Usuario";
  button.className = "button-newUser";
  section.appendChild(createTable(usuarios));

  app.appendChild(section);
  app.appendChild(containerButton);
  button.addEventListener("click", (event) => {
    document.querySelector(".modal").style.display = "block";
  });
  eventosModal();
}

export function createTable(usuarios) {
  const table = document.createElement("table");
  table.appendChild(createHeaderTable());
  table.appendChild(createBodyTable(usuarios));
  return table;
}
function createHeaderTable() {
  const header = ["Nombre", "Apellidos", "email", "Role", "password"];
  const tHead = document.createElement("thead");
  const tr = document.createElement("tr");
  for (let i = 0; i < header.length; i++) {
    const th = document.createElement("th");
    th.textContent = header[i];
    tr.appendChild(th);
  }
  tHead.appendChild(tr);
  return tHead;
}

function createBodyTable(usuarios) {
  const tBody = document.createElement("tbody");

  usuarios.forEach((element) => {
    const tr = document.createElement("tr");

    for (let value in element) {
      const td = document.createElement("td");
      td.textContent = element[value];
      tr.appendChild(td);
    }
    tBody.appendChild(tr);

    //Evento para el contextMenu
    tr.addEventListener("contextmenu", (event) => {
      event.preventDefault();
      const section = document.querySelector(".section-table");
      if (section.querySelector(".container-menu") === null) {
        let filaSeleccionada=event.currentTarget;
        const contextMenu = createContextMenu(filaSeleccionada,usuarios);
        contextMenu.style.left = event.pageX + "px";
        contextMenu.style.top = event.pageY + "px";
        section.appendChild(contextMenu);
      }
    });
  });

  return tBody;
}

function eventosModal() {
    const modal=document.getElementById("miModal");
    const botonCerrar=document.querySelector(".cerrar");
    const botonAccion=document.querySelector(".form-newUser")
  botonCerrar.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Cerrar modal al pulsar fuera del contenido
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  // Ejemplo: acción dentro del modal
  botonAccion.addEventListener("click", () => {
    const filas = document.querySelectorAll("tbody");
    const filaNueva = document.createElement("tr");
    //LLamada api que devuelve objeto
  });
}
