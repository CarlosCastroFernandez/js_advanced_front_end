import "./style.scss";
import { createMain } from "./codeJS/table";
import { createHeader } from "./codeJS/headerTable";

createHeader();
await createMain();



document.addEventListener("click",(e)=>{
 const contextMenu= document.querySelector(".container-menu")
 console.log(contextMenu);
  if (contextMenu!==null) {
    const section=document.querySelector(".section-table");
    section.removeChild(contextMenu);
  }
})

