function closeMenuWhenClickOnLink(){
  const links = view.querySelectorAll(".view a.goto");
  for (const link of links){
    link.onclick = (e) =>{
      e.preventDefault();
      overlay.classList.remove("show");
      const href = link.getAttribute("href");
      setTimeout(() =>{
        window.location.href = href;
      } 20);
    }
  }
}
function addLinksToMenu(){
  const view = document.getElementById("view");
  const allReferenceLinks = document.querySelectorAll(".goto");
  for (const link of allReferenceLinks){
    const string = link.parentElement.id;
    const p = document.createElement("p");
    const a = document.createElement("a");
    a.textContent = "#";
    a.href = "#" + String(link.parentElement.id);
    a.classList.add("goto");
    p.appendChild(a);
    p.innerHTML += String(string);
   view.appendChild(p);
  }
}
export function loadMenu(){
  const menu = document.getElementById("menu");
  const overlay = document.getElementById("overlay");
  menu.addEventListener("click", () =>{
    overlay.classList.toggle("show");
  });
  addLinksToMenu();
  closeMenuWhenClickOnLink();
}
