import "./style.scss";
import { login } from "./codeJS/login";







await login();


document.addEventListener("click",(e)=>{
 const contextMenu= document.querySelector(".container-menu")
 console.log(contextMenu);
  if (contextMenu!==null) {
    const section=document.querySelector(".section-table");
    section.removeChild(contextMenu);
  }
})

