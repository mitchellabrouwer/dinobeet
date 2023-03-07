import { useEffect, useState } from "react";

export default function () {
  const [scrollState, setScrollState] = useState("top");

  const onScroll = (event) => {
    console.log(event);

    const scrolled = document.scrollingElement.scrollTop;
    console.log(scrolled);

    // if (scrolled >= 120) {
    //   if (scrollState !== "amir") setScrollState("amir");
    // } else if (scrollState !== "top") setScrollState("top");
  };

  useEffect(() => {
    document.addEventListener("scroll", onScroll, true);
    return () => {
      document.removeEventListener("scroll", onScroll, true);
    };
  }, [scrollState]);

  return scrollState;
}
