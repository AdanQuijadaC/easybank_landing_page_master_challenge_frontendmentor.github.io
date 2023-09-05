/********* Menu Hambuger Trigger **********/

const menuCheckbox = document.querySelector(".menu-checkbox");
const navbarMenu = document.querySelector(".navbar__menu");

menuCheckbox.addEventListener("change", () => {
  if (menuCheckbox.checked) {
    navbarMenu.style.visibility = "visible";
  } else {
    navbarMenu.style.visibility = "hidden";
  }
});
