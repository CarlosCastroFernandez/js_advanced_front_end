import { getAllUser } from "./apiFetch";

export function createMain() {
  let usuarios;
  if (sessionStorage.getItem("usuarios") === null) {
    usuarios = getAllUser();
  }
  const app = document.querySelector("#app");
  const section = document.createElement("section");
  section.className = "section-table";
  const button=document.createElement("button");
  
  const containerButton=document.createElement("div");
  containerButton.appendChild(button)
  button.textContent="Nuevo Usuario";
  button.className="button-newUser";
  section.appendChild(createTable(usuarios));
 
app.appendChild(section);
app.appendChild(containerButton) 

}

export function createTable(usuarios) {
  const table = document.createElement("table");
  table.appendChild(createHeaderTable());
  table.appendChild(createBodyTable(usuarios));
  return table;
}
function createHeaderTable() {
const header=["Nombre","Apellidos","email","Role","password"]
  const tHead = document.createElement("thead");
  const tr = document.createElement("tr");
  for (let i = 0; i < header.length; i++) {
    const th = document.createElement("th");
    th.textContent=header[i];
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
  });

  return tBody;
}
