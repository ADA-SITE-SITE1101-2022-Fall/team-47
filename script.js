const checkbox = document.getElementById("ChangeTheme");
const links = document.getElementsByTagName("a");
const header = document.querySelector("header");
const h1 = document.getElementsByTagName("h1");
const p = document.getElementsByTagName("p");


if (sessionStorage.getItem("mode") == "dark") {
  darkmode();
} else {
  nodark();
}

checkbox.addEventListener("click", function() {
  if (checkbox.checked) {
      nodark();
} else {
      darkmode();
  }
});

function darkmode() {
  document.body.classList.add("dark-mode-bg"); 
  header.style.backgroundColor = "#292E33";
  checkbox.checked = false; 
  sessionStorage.setItem("mode", "dark"); 
  for(let i = 0; i < links.length; i++){
    links[i].style.color = "#fff";
    }
    for(let i = 0; i < h1.length; i++){
    h1[i].style.color = "#fff";
    }
    for(let i = 0; i < p.length; i++){
    p[i].style.color = "#fff";
    }
}

function nodark() {
  document.body.classList.remove("dark-mode-bg"); 
  header.style.backgroundColor = "#fff";
  checkbox.checked = true; 
  sessionStorage.setItem("mode", "light"); 
  for(let i = 0; i < links.length; i++){
    links[i].style.color = "#292E33";

}
for(let i = 0; i < h1.length; i++){
    h1[i].style.color = "#292E33";
    }
    for(let i = 0; i < p.length; i++){
    p[i].style.color = "#292E33";
    }
    
}




console.log(h1)