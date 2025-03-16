
import Splide from "@splidejs/splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

export const initializeSplide = () => {
  const carouselElements = document.querySelectorAll(".splide");

  // Iterate through each carousel element
  carouselElements.forEach((carouselElement) => {
    // Initialize a new Splide instance for each carousel
    const splide = new Splide(carouselElement, {
      type: "loop",
      drag: true,
      autoWidth: true,
      gap: 30,
      pagination: false,
      arrows: false,
      autoScroll: {
        speed: 0.5,
        pauseOnHover: true,
      },
    });

    // Mount the Splide instance with the AutoScroll extension
    splide.mount({ AutoScroll });
  });
};