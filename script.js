const burger = document.querySelector(".burger");
const navmenu = document.querySelector(".Navbar");
const close = document.querySelector(".close");

burger.addEventListener("click", () =>{
    navmenu.classList.add("active");
    navmenu.style.display = "flex"
})
close.addEventListener("click", () =>{
    navmenu.classList.remove("active");
    navmenu.style.display = "none"

})