import { useEffect, useState } from "react";

/**
 * Tracks whether a media query currently matches.
 * Defaults to `(max-width:639px)` — Tailwind's `sm` breakpoint.
 */
export function useIsMobile(query = "(max-width:639px)") {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" && window.matchMedia(query).matches
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQueryList = window.matchMedia(query);
    const handleChange = (event) => setIsMobile(event.matches);

    // Safari < 14 only supports addListener/removeListener.
    if (mediaQueryList.addEventListener) {
      mediaQueryList.addEventListener("change", handleChange);
    } else {
      mediaQueryList.addListener(handleChange);
    }

    setIsMobile(mediaQueryList.matches);

    return () => {
      if (mediaQueryList.removeEventListener) {
        mediaQueryList.removeEventListener("change", handleChange);
      } else {
        mediaQueryList.removeListener(handleChange);
      }
    };
  }, [query]);

  return isMobile;
}
