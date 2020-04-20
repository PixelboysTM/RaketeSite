const menu = document.querySelector(".menu");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const txt = document.querySelector("nav h1");
const line = document.getElementById("line");

var open = false;
menu.addEventListener("click", () => {
    navLinks.classList.toggle("open");

    if (open) {
        line.src = "img/menu.png";
        open = false;
    } else {
        line.src = "img/close.png";
        open = true;
    }

    links.forEach(link => {
        link.classList.toggle("fade");
    });
});