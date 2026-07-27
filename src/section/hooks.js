import {
  useEffect,
  useState,
} from "react";


/**
 * Detects whether the current viewport
 * should use the mobile/tablet portfolio layout.
 *
 * We use 1023px because Tailwind switches
 * the ProjectCard to its desktop 2-column
 * layout at the `lg` breakpoint (1024px).
 */

export function useIsMobile(
  query = "(max-width: 1023px)"
) {
  const getMatches = () => {
    if (
      typeof window === "undefined"
    ) {
      return false;
    }

    return window
      .matchMedia(query)
      .matches;
  };


  const [
    isMobile,
    setIsMobile,
  ] = useState(getMatches);


  useEffect(() => {

    if (
      typeof window === "undefined"
    ) {
      return;
    }


    const mediaQuery =
      window.matchMedia(query);


    const handleChange = (event) => {
      setIsMobile(event.matches);
    };


    // Set correct value immediately
    setIsMobile(
      mediaQuery.matches
    );


    /*
      Modern browsers
    */

    if (
      mediaQuery.addEventListener
    ) {
      mediaQuery.addEventListener(
        "change",
        handleChange
      );
    }

    /*
      Older Safari support
    */

    else {
      mediaQuery.addListener(
        handleChange
      );
    }


    return () => {

      if (
        mediaQuery.removeEventListener
      ) {
        mediaQuery.removeEventListener(
          "change",
          handleChange
        );
      }

      else {
        mediaQuery.removeListener(
          handleChange
        );
      }

    };

  }, [query]);


  return isMobile;
}