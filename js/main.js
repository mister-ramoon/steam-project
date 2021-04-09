// Panel lateral desplegable
const btnToggle = document.getElementById("btn-toggle");
btnToggle.addEventListener("click", function () {
  document.getElementById("aside").classList.toggle("active");
  document.getElementById("btn-toggle").classList.toggle("header__menu--close-icon");

  //deshabilitar Scroll
  if(document.getElementById("aside").classList.contains("active")){
    document.getElementsByTagName("html")[0].style.overflow = "hidden";
  } else {
    document.getElementsByTagName("html")[0].style.overflow = "auto";
  }
});
