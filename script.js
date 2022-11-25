// const checkbox = document.getElementById("ChangeTheme");
// const links = document.getElementsByTagName("a");
// const header = document.querySelector("header");
// const h1 = document.getElementsByTagName("h1");
// const p = document.getElementsByTagName("p");
// const small = document.getElementsByTagName("small");


// if (sessionStorage.getItem("mode") == "dark") {
//   darkmode();
// } else {
//   nodark();
// }

// checkbox.addEventListener("click", function() {
//   if (checkbox.checked) {
//       nodark();
// } else {
//       darkmode();
//   }
// });

// function darkmode() {
//     document.body.classList.remove("light-mode-bg"); 
//   document.body.classList.add("dark-mode-bg"); 
//   header.style.backgroundColor = "#181A1B";
//   checkbox.checked = false; 
//   sessionStorage.setItem("mode", "dark"); 
//   for(let i = 0; i < links.length; i++){
//     links[i].style.color = "#fff";
//     }
//     for(let i = 0; i < h1.length; i++){
//     h1[i].style.color = "#fff";
//     }
//     for(let i = 0; i < p.length; i++){
//     p[i].style.color = "#fff";
//     }
//     for(let i = 0; i < small.length; i++){
//         small[i].style.color = "#a2ff00e2";
//         }
    
// }

// function nodark() {
//   document.body.classList.remove("dark-mode-bg");
//   document.body.classList.add("light-mode-bg"); 
//   header.style.backgroundColor = "#fff";
//   checkbox.checked = true; 
//   sessionStorage.setItem("mode", "light"); 
//   for(let i = 0; i < links.length; i++){
//     links[i].style.color = "#181A1B";

// }
//     for(let i = 0; i < h1.length; i++){
//     h1[i].style.color = "#181A1B";
//     }
//     for(let i = 0; i < p.length; i++){
//     p[i].style.color = "#181A1B";
//     }
//     for(let i = 0; i < small.length; i++){
//         small[i].style.color = "#12A708";
//         }

// }





window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 60);
}
)


window.addEventListener("scroll", function() {
    console.log(window.scrollY)
    var headerNav = document.querySelector(".header-nav")
    var aboutNav = document.querySelector(".about-nav")
    headerNav.classList.toggle("current" ,window.scrollY < 590)
    aboutNav.classList.toggle("current" ,window.scrollY >= 590)
})



