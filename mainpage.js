document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector("nav");

    menuToggle.addEventListener("click", function() {
        menu.classList.toggle("active");
    });
});