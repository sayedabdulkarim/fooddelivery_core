import { useState, useEffect } from "react";

// Custom hook for sticky behaviort to the top
function useSticky(ref) {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setSticky(entry.intersectionRatio < 1);
      },
      { threshold: [1] }
    );

    const current = ref.current;

    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, [ref]);

  return isSticky;
}

export default useSticky;
