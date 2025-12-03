
export function createContextMenu(filaSeleccionada, usuarios) {
   eventosModal();
  const containerMenu = document.createElement("div");

  containerMenu.className = "container-menu";
  const parrafo1 = document.createElement("p");
  parrafo1.className = "view-user";
  parrafo1.textContent = "Ver Detalles";
  parrafo1.addEventListener("click", (event) => {
    let arrayFila = filaSeleccionada.children;
    const object = {
      nombre: arrayFila[0].textContent,
      apellido: arrayFila[1].textContent,
      email: arrayFila[2].textContent,
      rol: arrayFila[3].textContent,
    };
    console.log(object);

    /*document.querySelector("#app").removeChild(document.querySelector(".section-table"));
    document.querySelector("button").remove();
    const sectionHeader=document.querySelector(".section-header-table");
    sectionHeader.parentElement.remove();
    createHeaderDetails();
    createUserDetail(object);*/
    document.body.querySelector(".modal2").style.display = "block";
    mapModal(object);
   
  });
  const parrafo2 = document.createElement("p");
  parrafo2.className = "delete-row";
  parrafo2.textContent = "Eliminar";
  parrafo2.addEventListener("click", (event) => {
    const tBody = document.querySelector("tbody");
    tBody.removeChild(filaSeleccionada);
    let array = Array.from(filaSeleccionada.children);
    if (usuarios.includes(filaSeleccionada)) usuarios.pull(filaSeleccionada);
  });
  containerMenu.appendChild(parrafo1);
  containerMenu.appendChild(parrafo2);
  return containerMenu;
}

function eventosModal() {
  const modal = document.getElementById("miModal2");
  const botonCerrar = document.querySelector(".cerrar2");
  const botonAccion = document.querySelector("#accionModal2");
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
  botonAccion.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("ENTROOOO");
    const object = {};
    const name = document.querySelector("#name2");
    object.name = name.value;
    const lastName = document.querySelector("#lastName2");
    object.lastName = lastName.value;
    const email = document.querySelector("#email2");
    object.email = email.value;
    const password = document.querySelector("#password2");
    object.password = password.value;
    if (document.querySelector("#user-radio2").checked) {
      object.rol = "user";
    } else {
      object.rol = "admin";
    }
    if(confirm("Estas seguro"))  console.log("Subida ");
      //subida a base de datos
     
    modal.style.display="none"

  });
}

function mapModal(filaSeleccionada) {
  const name = document.querySelector("#name2");
  name.value = filaSeleccionada.nombre;
  const lastName = document.querySelector("#lastName2");
  lastName.value = filaSeleccionada.apellido;
  const email = document.querySelector("#email2");
  email.value = filaSeleccionada.email;
  const password = document.querySelector("#password2");
  const role = filaSeleccionada.rol;
  role === "user"
    ? (document.querySelector("#user-radio2").checked = true)
    : (document.querySelector("#admin-radio2").checked = true);
}
