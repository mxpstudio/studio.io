var menuToggle = document.getElementById("menu-toggle");
var menu = document.getElementById("menu");
var menuClose = document.getElementById("menu-close");
var openExternalLink = document.getElementById('open-external-link');

menuToggle.addEventListener("click", function(event) {
  event.preventDefault();
  menu.classList.toggle("open");
});

menuClose.addEventListener("click", function(event) {
  event.preventDefault();
  menu.classList.remove("open");
});

