const handleSeeMoreLessProjects = () => {
  const buttonSeeMore = document.querySelector(".see-more-btn");
  const buttonSeeLess = document.querySelector(".see-less-btn");
  const cardsProjectsHidden = document.querySelectorAll(
    ".card-project:nth-child(n + 4)"
  );
  const cardProjectFour = document.querySelector(".card-project:nth-child(4)");
  const containerProjects = document.querySelector(
    ".container-projects-bg-image"
  );

  const showCard = (card) => {
    card.style.display = "flex";
  };

  const hideCard = (card) => {
    card.style.display = "none";
  };

  const scrollToShownCards = () => {
    cardProjectFour.scrollIntoView({
      behavior: "smooth",
    });
  };

  const scrollToProyectContainerStart = () => {
    containerProjects.scrollIntoView({
      behavior: "smooth",
    });
  };

  const showProjectCards = () => {
    cardsProjectsHidden.forEach((card) => showCard(card));
    scrollToShownCards();
  };

  const hideProjectCards = () => {
    cardsProjectsHidden.forEach((card) => hideCard(card));
    scrollToProyectContainerStart();
  };

  const handleDisplayButtons = () => {
    buttonSeeMore.classList.toggle("see-more-btn-none");
    buttonSeeLess.classList.toggle("see-less-btn-block");
  };

  const handleDisplayProjectCardsAndButtons = (e) => {
    handleDisplayButtons();
    if (e.target.classList.contains("see-more-btn")) {
      showProjectCards();
    }
    if (e.target.classList.contains("see-less-btn")) {
      hideProjectCards();
    }
  };

  buttonSeeMore.addEventListener("click", handleDisplayProjectCardsAndButtons);
  buttonSeeLess.addEventListener("click", handleDisplayProjectCardsAndButtons);
};

export default handleSeeMoreLessProjects;
