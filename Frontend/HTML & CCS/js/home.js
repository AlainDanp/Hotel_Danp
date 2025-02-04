const scrollRevealOption = {
    origin: "bottom",
    distance: "50px",
    duration: 1000,
};

ScrollReveal().reveal(".container_card",{
    ...scrollRevealOption,
    interval:500,
});
ScrollReveal().reveal(".journey_card",{
    ...scrollRevealOption,
    origin: "right",
    interval: 500,
});
ScrollReveal().reveal(".showcase_image img", {
    ...scrollRevealOption,
    origin: "left",
});
ScrollReveal().reveal(".showcase_content p", {
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".showcase_content h4", {
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".showcase_btn", {
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".banner_card",{
    ...scrollRevealOption,
    interval: 500,
});
ScrollReveal().reveal(".discover_card",{
    ...scrollRevealOption,
    interval: 500,
});
ScrollReveal().reveal(".wrapper",{
    ...scrollRevealOption,
    interval: 500,
});
ScrollReveal().reveal(".about",{
    ...scrollRevealOption,
    interval: 500,
});
const swiper = new Swiper(".swiper",{
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
})
window.onscroll = function() {
    var backToTopButton = document.getElementById("backToTop");
    var scrollPercentageElem = document.getElementById("scrollPercentage");
    var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
    var documentHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrollPercentage = (scrollPosition / documentHeight) * 100;

    if (scrollPosition > 100) {
        backToTopButton.classList.add("active");
    } else {
        backToTopButton.classList.remove("active");
    }

    // Met à jour le texte du pourcentage dans le bouton
    scrollPercentageElem.textContent = `${Math.round(scrollPercentage)}%`;
};

document.getElementById("backToTop").addEventListener("click", function(event) {
    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

var loader = document.getElementById("loader");

window.addEventListener("load",function (){
    loader.style.display = "none";
})



