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

buttonOpenMenu.addEventListener(
  "click",
  () => (document.body.style.overflow = "hidden")
);
buttonCloseMenu.addEventListener(
  "click",
  () => (document.body.style.overflow = "")
);
linksNav.forEach((linkNav) =>
  linkNav.addEventListener("click", () => (document.body.style.overflow = ""))
);

addEventListener(
  "resize",
  () =>
    document.documentElement.clientWidth >= 768 &&
    (document.body.style.overflow = "")
);

/*-----------------------------------------*/

const buttonSeeMore = document.querySelector(".see-more-btn");
const cardsProjectsHidden = document.querySelectorAll(
  ".card-project:nth-child(n + 4)"
);
const cardProjectFour = document.querySelector(".card-project:nth-child(4)");
const buttonSeeLess = document.querySelector(".see-less-btn");
const containerProjects = document.querySelector(
  ".container-projects-bg-image"
);

const showCardsProjects = () => {
  cardsProjectsHidden.forEach((card) => (card.style.display = "flex"));
  cardProjectFour.scrollIntoView({
    behavior: "smooth",
  });
};
const hiddenCardsProjects = () => {
  cardsProjectsHidden.forEach((card) => (card.style.display = "none"));
  containerProjects.scrollIntoView({
    behavior: "smooth",
  });
};
const togglesHandles = () => {
  buttonSeeMore.classList.toggle("see-more-btn-none");
  buttonSeeLess.classList.toggle("see-less-btn-block");
  containerProjects.classList.toggle("container-projects-bg-image-height");
};

buttonSeeMore.addEventListener("click", showCardsProjects);
buttonSeeMore.addEventListener("click", togglesHandles);
buttonSeeLess.addEventListener("click", hiddenCardsProjects);
buttonSeeLess.addEventListener("click", togglesHandles);

/*-------------------------------------------*/

var form = document.getElementById("my-form");

async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        status.innerHTML = "Thanks for your submission!";
        form.reset();
      } else {
        response.json().then((data) => {
          if (Object.hasOwn(data, "errors")) {
            status.innerHTML = data["errors"]
              .map((error) => error["message"])
              .join(", ");
          } else {
            status.innerHTML = "Oops! There was a problem submitting your form";
          }
        });
      }
    })
    .catch((error) => {
      status.innerHTML = "Oops! There was a problem submitting your form";
    });
}
form.addEventListener("submit", handleSubmit);
