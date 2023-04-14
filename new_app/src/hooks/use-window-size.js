import { useState, useEffect } from "react";

// This custom hook returns the screen size ("l" for large or "m" for medium) based on the window width
export default function useWindowSize() {
  const [screenSize, setWindowSize] = useState();

  useEffect(() => {
    // Event listener for window resizing
    function handleResize() {
      // Set the screen size based on the window width
      let screenSize = window.innerWidth > 992 ? "l" : "m";
      // Update the state with the new screen size
      setWindowSize(screenSize);
    }

    // Add event listener to window resize
    window.addEventListener("resize", handleResize);

    // Call handleResize function once to get the initial screen size
    handleResize();

    // Remove event listener when the component unmounts
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Return the current screen size
  return screenSize;
}
