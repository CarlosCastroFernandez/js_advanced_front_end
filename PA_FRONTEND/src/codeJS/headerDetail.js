

export function createHeaderDetails() {
  const app = document.querySelector("#app");
  const section =document.createElement("section");
  section.className="section-header-detail";
  const head=document.createElement("h1");
  head.textContent="Detalles Del Usuario";
  const img =document.createElement("img");
  img.setAttribute("src","/src/img/arrow.png");
  img.style.width="30px";
  img.style.display="block";
  section.appendChild(img);
  section.appendChild(head)
  app.appendChild(section);
 
}
