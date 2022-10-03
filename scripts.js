const buttonOpenMenu = document.querySelector(".button-open-menu")
const buttonCloseMenu = document.querySelector(".button-close-menu")
const linksNav = document.querySelectorAll(".link-nav")
const containerMenu = document.querySelector(".container-closebutton-and-menu")

const toggleClassMenu = () => {
    containerMenu.classList.toggle("container-closebutton-and-menu-block");
  };

buttonOpenMenu.addEventListener("click", toggleClassMenu)
buttonCloseMenu.addEventListener("click", toggleClassMenu)
linksNav.forEach(linkNav => linkNav.addEventListener("click", toggleClassMenu))
