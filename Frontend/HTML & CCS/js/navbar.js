const menuHotel = document.querySelector(".menu-hotel")
const navLinks = document.querySelector(".nav-link")

    menuHotel.addEventListener('click',()=>{
    navLinks.classList.toggle('mobile-menu')
})