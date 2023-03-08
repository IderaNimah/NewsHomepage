// const burger = document.querySelector(".burger");
// const navmenu = document.querySelector(".Navbar");
// const close = document.querySelector(".close");

// burger.addEventListener("click", () =>{
//     navmenu.classList.add("active");
// })
// close.addEventListener("click", () =>{
//     navmenu.classList.remove("active");
// })
const harmburger = document.querySelector(".menu_bar");
const navBar = document.querySelector(".navBar");

// Adding and removing the class
function toggleBar(){
    navBar.classList.toggle("open");
}
harmburger.addEventListener('click',toggleBar)