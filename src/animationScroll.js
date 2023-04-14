export default function animationScroll() {
  const elements = document.getElementsByClassName("animation-scroll-elem");

  for (let i = 0; i < elements.length; i += 1) {
    const element = elements[i];

    if (element.getBoundingClientRect().top < window.innerHeight) {
      element.classList.add("animation-scroll-elem-visible");
    }
  }

  window.addEventListener("scroll", () => {
    for (let i = 0; i < elements.length; i += 1) {
      const element = elements[i];

      if (element.getBoundingClientRect().top < window.innerHeight) {
        element.classList.add("animation-scroll-elem-visible");
      } else {
        element.classList.remove("animation-scroll-elem-visible");
      }
    }
  });
}
