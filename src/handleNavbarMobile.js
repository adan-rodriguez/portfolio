const handleNavbarMobile = () => {
  const buttonOpenMenu = document.querySelector(".button-open-menu");
  const buttonCloseMenu = document.querySelector(".button-close-menu");
  const linksNav = document.querySelectorAll(".link-nav");
  const containerMenu = document.querySelector(
    ".container-closebutton-and-menu"
  );

  const toggleDisplayMenu = () => {
    containerMenu.classList.toggle("container-closebutton-and-menu-block");
  };

  const hideScrollBar = () => {
    document.body.style.overflow = "hidden";
  };

  const showScrollBar = () => {
    document.body.style.overflow = "";
  };

  buttonOpenMenu.addEventListener("click", () => {
    toggleDisplayMenu();
    hideScrollBar();
  });

  buttonCloseMenu.addEventListener("click", () => {
    toggleDisplayMenu();
    showScrollBar();
  });

  linksNav.forEach((linkNav) =>
    linkNav.addEventListener("click", () => {
      toggleDisplayMenu();
      showScrollBar();
    })
  );

  window.addEventListener("resize", () => {
    if (
      document.documentElement.clientWidth >= 768 &&
      containerMenu.classList.contains("container-closebutton-and-menu-block")
    ) {
      showScrollBar();
    }

    if (
      document.documentElement.clientWidth <= 768 &&
      containerMenu.classList.contains("container-closebutton-and-menu-block")
    ) {
      hideScrollBar();
    }
  });
};

export default handleNavbarMobile;
