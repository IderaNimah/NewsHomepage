const harmburger = document.querySelector(".menu_bar");
const navBar = document.querySelector(".navBar");

// Adding and removing the class
function toggleBar(){
    navBar.classList.toggle("open");
}
harmburger.addEventListener('click',toggleBar)