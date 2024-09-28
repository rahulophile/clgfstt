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

let lastScrollTop = 0;
const header = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
    const st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
        header.style.transform = 'translateY(0)'; // Hide header on scroll down
    } else {
        header.style.transform = 'translateY(0)'; // Show header on scroll up
    }
    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
});
