import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const timeout = setTimeout(() => {
        const element = document.getElementById(hash.replace("#", ""));
        element?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 50);
      return () => clearTimeout(timeout);
    }

    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}