import { useEffect, useState } from "react";
import { MENU_HEIGHT } from "../../lib/constants";

export default function useScrolledFromTop() {
  const [isScrolling, setIsScrolling] = useState(false);

  const onScroll = (event) => {
    const scrolled = document.scrollingElement.scrollTop;

    if (scrolled >= MENU_HEIGHT) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", onScroll, true);
    return () => {
      document.removeEventListener("scroll", onScroll, true);
    };
  }, [isScrolling]);

  return isScrolling;
}
