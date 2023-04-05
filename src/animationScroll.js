export default function animationScroll() {
  window.addEventListener("scroll", () => {
    const elements = document.getElementsByClassName("animation-scroll-elem");
    const screenSize = window.innerHeight;

    for (let i = 0; i < elements.length; i += 1) {
      const element = elements[i];

      if (element.getBoundingClientRect().top < screenSize) {
        element.classList.add("animation-scroll-elem-visible");
      } else {
        element.classList.remove("animation-scroll-elem-visible");
      }
    }
  });
}
