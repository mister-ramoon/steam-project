// Panel lateral desplegable
const btnToggle = document.getElementById("btn-toggle");
btnToggle.addEventListener("click", function () {
  document.getElementById("aside").classList.toggle("active");
  document.getElementById("btn-toggle").classList.toggle("header__menu--close-icon");
});