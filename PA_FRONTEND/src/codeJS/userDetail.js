export function createUserDetail(usuario) {
  const app = document.querySelector("#app");
  const section = document.createElement("section");
  const container = document.createElement("div");
  container.appendChild(createForm(usuario));
  container.className = "container-data";
  section.appendChild(container);
  app.appendChild(section);
}

function createForm(usuario) {
  const array1 = ["Nombre", "Apellidos", "Correo"];
  const array2 = ["name", "lastName", "email"];
  const form = document.createElement("form");
  form.className = "form-mod";
  for (let i = 0; i < 3; i++) {
    const container = document.createElement("div");
    const label = document.createElement("label");
    label.setAttribute("for", array2[i]);
    label.textContent = array1[i];
    const input = document.createElement("input");

      switch (i) {
        case 0:
          input.value = usuario.nombre;
          input.setAttribute("id", array2[i]);
          input.setAttribute("type", "text");
          input.setAttribute("required", "");
          input.setAttribute("minlength", "3");
          input.setAttribute("maxlength", "30");

          break;
        case 1:
          input.value = usuario.apellido;
          input.setAttribute("id", array2[i]);
          input.setAttribute("type", "text");
          input.setAttribute("required", "");
          input.setAttribute("minlength", "3");
          input.setAttribute("maxlength", "30");
          break;
        case 2:
          input.setAttribute("required", "");
          input.setAttribute("type", "email");
          input.value = usuario.email;
          break;
      }
    
    container.appendChild(label);
    container.appendChild(input);
    form.appendChild(container);
  }
  const select = document.createElement("select");
  const option1 = document.createElement("option");
  option1.textContent = usuario.rol;
  option1.setAttribute("default", "");

  const option2 = document.createElement("option");
  option2.textContent = usuario.rol === "user" ? "admin" : "user";
  select.appendChild(option1);
  select.appendChild(option2);
  form.appendChild(select);
  return form;
}