const menuButton = document.getElementById("openMenu")
const sidebar = document.querySelector(".sidebar")
menuButton.addEventListener('click', function(){
    sidebar.style.display = "block"
    menuButton.style.display = "none"
})

const closeMenuButton = document.getElementById("closeMenu")
closeMenuButton.addEventListener("click", function(){
    sidebar.style.display = "none"
    menuButton.style.display = "block"
})