// import { useRef } from "react";
// import { scrollTo } from "../utils/commonHelper";

// function useImageCarousel(images, widthPerSlide = 260) {
//   const carouselViewportRef = useRef(null);

//   const moveCarousel = (directionMultiplier) => {
//     const scrollAmount = widthPerSlide * directionMultiplier;
//     const newPos = carouselViewportRef.current.scrollLeft + scrollAmount;
//     scrollTo({
//       element: carouselViewportRef.current,
//       to: newPos,
//       duration: 300, // Customize this duration as needed
//       scrollDirection: "scrollLeft",
//     });
//   };

//   const moveLeft = () => moveCarousel(-1);
//   const moveRight = () => moveCarousel(1);

//   return {
//     carouselViewportRef,
//     moveLeft,
//     moveRight,
//     images,
//   };
// }

// export default useImageCarousel;

import { useRef, useState, useEffect } from "react";
import { scrollTo } from "../utils/commonHelper";

function useImageCarousel(images, widthPerSlide = 260) {
  const carouselViewportRef = useRef(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  useEffect(() => {
    const checkPosition = () => {
      if (carouselViewportRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } =
          carouselViewportRef.current;
        setIsAtStart(scrollLeft <= 0);
        setIsAtEnd(scrollLeft + clientWidth >= scrollWidth);
      }
    };

    // Check initial position
    checkPosition();

    // Add event listener to update state on scroll
    const element = carouselViewportRef.current;
    element.addEventListener("scroll", checkPosition, { passive: true });

    // Clean up
    return () => {
      element.removeEventListener("scroll", checkPosition);
    };
  }, []);

  const moveCarousel = (directionMultiplier) => {
    const scrollAmount = widthPerSlide * directionMultiplier;
    const newPos = carouselViewportRef.current.scrollLeft + scrollAmount;
    scrollTo({
      element: carouselViewportRef.current,
      to: newPos,
      duration: 300,
      scrollDirection: "scrollLeft",
    });
  };

  const moveLeft = () => moveCarousel(-1);
  const moveRight = () => moveCarousel(1);

  return {
    carouselViewportRef,
    moveLeft,
    moveRight,
    images,
    isAtStart,
    isAtEnd,
  };
}

export default useImageCarousel;
