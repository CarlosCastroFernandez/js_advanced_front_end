import "./style.scss";
import { login } from "./codeJS/login";
import { getNewToken } from "./codeJS/apiFetch";
import { createHeader } from "./codeJS/headerTable";
import { createMain } from "./codeJS/table";

if (
  localStorage.getItem("token") === null ||
  localStorage.getItem("token") === "undefined"
) {
  await login();
} else {
  if (await getNewToken()) {
    sessionStorage.clear();
    await createHeader();
    await createMain();
    document.querySelector(".section-login").style.display = "none";
  } else {
    localStorage.clear();
    sessionStorage.clear();
  }
}

document.addEventListener("click", (e) => {
  const contextMenu = document.querySelector(".container-menu");
  console.log(contextMenu);
  if (contextMenu !== null) {
    const section = document.querySelector(".section-table");
    section.removeChild(contextMenu);
  }
});
