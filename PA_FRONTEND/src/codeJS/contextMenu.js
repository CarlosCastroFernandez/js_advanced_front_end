import { createHeaderDetails } from "./headerDetail";
import { createUserDetail } from "./userDetail";

export function createContextMenu(filaSeleccionada,usuarios) {
  const containerMenu = document.createElement("div");
  
  containerMenu.className = "container-menu";
  const parrafo1 = document.createElement("p");
  parrafo1.className = "view-user";
  parrafo1.textContent = "Ver Detalles";
  parrafo1.addEventListener("click",(event)=>{
    let arrayFila=filaSeleccionada.children;
    const object={
        nombre:arrayFila[0].textContent,
        apellido:arrayFila[1].textContent,
        email:arrayFila[2].textContent,
        rol:arrayFila[3].textContent
        
    }
    console.log(object);
    
    document.querySelector("#app").removeChild(document.querySelector(".section-table"));
    document.querySelector("button").remove();
    const sectionHeader=document.querySelector(".section-header-table");
    sectionHeader.parentElement.remove();
    createHeaderDetails();
    createUserDetail(object);
  })
  const parrafo2 = document.createElement("p");
  parrafo2.className = "delete-row";
  parrafo2.textContent = "Eliminar";
  parrafo2.addEventListener("click",(event)=>{
    const tBody=document.querySelector("tbody");
    tBody.removeChild(filaSeleccionada);
    let array=Array.from(filaSeleccionada.children);
    if(usuarios.includes(filaSeleccionada)) usuarios.pull(filaSeleccionada)
  })
  containerMenu.appendChild(parrafo1);
  containerMenu.appendChild(parrafo2);
  return containerMenu;
}
