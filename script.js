const burger = document.querySelector(".burger");
const navmenu = document.querySelector(".Navbar");
const close = document.querySelector(".close");

burger.addEventListener("click", () =>{
    navmenu.classList.add("active");
})
close.addEventListener("click", () =>{
    navmenu.classList.remove("active");
})