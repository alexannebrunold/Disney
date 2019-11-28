/* Menu burger */
var open = document.getElementById("open");
var close = document.getElementById("close");
var mobileMenu = document.getElementById("mobile-menu");
open.addEventListener("click", open_menu);
close.addEventListener("click", close_menu);

function open_menu() {
  mobileMenu.classList.add("is-open");
  mobileMenu.classList.remove("is-close");
}

function close_menu() {
  mobileMenu.classList.add("is-close");
  mobileMenu.classList.remove("is-open");
}
