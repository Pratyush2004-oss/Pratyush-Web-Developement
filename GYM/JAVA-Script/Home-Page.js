var menu = document.querySelector(".header .menu");
var sidebar = document.querySelector(".sidebar");
var close1 = document.querySelector(".sidebar .ance .close");

menu.addEventListener("click", function () {
    sidebar.style.display = "block";
    menu.style.opacity = 0;
})

close1.addEventListener("click", function () {
    sidebar.style.display = "none";
    menu.style.opacity = 1;
})