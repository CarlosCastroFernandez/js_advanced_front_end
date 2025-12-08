import { deleteUser, editUser } from "./apiFetch";
import { createMain } from "./table";

export function createContextMenu(filaSeleccionada, usuarios) {
  const containerMenu = document.createElement("div");

  containerMenu.className = "container-menu";
  const parrafo1 = document.createElement("p");
  parrafo1.className = "view-user";
  parrafo1.textContent = "Ver Detalles";
  parrafo1.addEventListener("click", (event) => {
    let arrayFila = filaSeleccionada.children;
    const object = {
      _id: arrayFila[0].textContent,
      nombre: arrayFila[1].textContent,
      apellido: arrayFila[2].textContent,
      email: arrayFila[3].textContent,
      rol: arrayFila[4].textContent,
      isActive: arrayFila[5].textContent,
    };
    sessionStorage.setItem("idMod", object._id);
    console.log(object);
    document.body.querySelector(".modal2").style.display = "block";
    mapModal(object);
  });
  const parrafo2 = document.createElement("p");
  parrafo2.className = "delete-row";
  parrafo2.textContent = "Eliminar";
  parrafo2.addEventListener("click", async (event) => {
    const tBody = document.querySelector("tbody");
    if (
      confirm(
        "Si borras el ususario " +
          filaSeleccionada.children[3].textContent +
          " se borrara de la base de datos, ¿estas seguro?"
      )
    ) {
      const response = await deleteUser(
        filaSeleccionada.children[0].textContent
      );
      if (response === "Success") {
        tBody.removeChild(filaSeleccionada);
        let array = Array.from(filaSeleccionada.children);
        console.log(array);
        const object = {
          _id: array[0].textContent,
          nombre: array[1].textContent,
          apellido: array[2].textContent,
          email: array[3].textContent,
          rol: array[4].textContent,
          isActive: array[5].textContent,
        };

        const index = usuarios.findIndex((value) => value._id === object._id);
        if (index !== -1) usuarios.splice(index, 1);
        sessionStorage.setItem("usuarios", JSON.stringify(usuarios));
      }
    }
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
  botonAccion.addEventListener("click", async (e) => {
    e.preventDefault();
    const object = {};
    object._id = sessionStorage.getItem("idMod");
    const name = document.querySelector("#name2");
    object.name = name.value;
    const lastName = document.querySelector("#lastName2");
    object.lastName = lastName.value;
    const email = document.querySelector("#email2");
    object.email = email.value;
    const password = document.querySelector("#password2").value;

    if (password !== "") object.password = password;

    if (document.querySelector("#user-radio2").checked) {
      object.rol = "user";
    } else {
      object.rol = "admin";
    }
    object.isActive = document.querySelector("#active").checked;
    console.log(object);

    if (confirm("Estas seguro")) {
      const data = await editUser(object);

      const usersOld = JSON.parse(sessionStorage.getItem("usuarios"));
      const pos = usersOld.findIndex((value) => value._id === object._id);
      if (pos !== -1) usersOld[pos] = data;
      sessionStorage.setItem("usuarios", JSON.stringify(usersOld));
      document.getElementById("app").innerHTML = "";
      await createMain();
    }

    modal.style.display = "none";
  });
}

function mapModal(filaSeleccionada) {
  const name = document.querySelector("#name2");
  console.log("FILAAAA" + JSON.stringify(filaSeleccionada));
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
  const isActive = filaSeleccionada.isActive;
  document.querySelector("#active2").checked = isActive === "Activo";
}
eventosModal();
