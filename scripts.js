const buttonOpenMenu = document.querySelector(".button-open-menu");
const buttonCloseMenu = document.querySelector(".button-close-menu");
const linksNav = document.querySelectorAll(".link-nav");
const containerMenu = document.querySelector(".container-closebutton-and-menu");

const toggleClassMenu = () => {
  containerMenu.classList.toggle("container-closebutton-and-menu-block");
};

buttonOpenMenu.addEventListener("click", toggleClassMenu);
buttonCloseMenu.addEventListener("click", toggleClassMenu);
linksNav.forEach((linkNav) =>
  linkNav.addEventListener("click", toggleClassMenu)
);

/*-----------------------------------------*/

const buttonSeeMore = document.querySelector(".see-more-btn");
const cardsProjectsHidden = document.querySelectorAll(
  ".card-project:nth-child(n + 4)"
);
const buttonSeeLess = document.querySelector(".see-less-btn");

const showCardsProjects = () => {
  cardsProjectsHidden.forEach((card) => (card.style.display = "block"));
};
const hiddenCardsProjects = () => {
  cardsProjectsHidden.forEach((card) => (card.style.display = "none"));
};
const toggleClassButtonsSeeMoreLess = () => {
  buttonSeeMore.classList.toggle("see-more-btn-none");
  buttonSeeLess.classList.toggle("see-less-btn-block");
};

buttonSeeMore.addEventListener("click", showCardsProjects);
buttonSeeMore.addEventListener("click", toggleClassButtonsSeeMoreLess);
buttonSeeLess.addEventListener("click", hiddenCardsProjects);
buttonSeeLess.addEventListener("click", toggleClassButtonsSeeMoreLess);

/*-------------------------------------------*/

// getComputedStyle(cardsProjectsHidden[0]).getPropertyValue("display") === "none"
//   ? (buttonSeeLess.style.display = "none")
//   : (buttonSeeLess.style.display = "block");
