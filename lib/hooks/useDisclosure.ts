import { useEffect, useRef, useState } from "react";

export default function useDisclosure(initialVisible: boolean) {
  const [isOpen, setIsOpen] = useState(initialVisible);
  const ref = useRef(null);
  console.log("isOpen", isOpen);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      console.log("click outside");

      setIsOpen(false);
    } else {
      console.log("click inside");
    }
  };

  useEffect(() => {
    console.log("ran this");

    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
      // reset initial show
    };
  }, []);

  return { ref, isOpen, setIsOpen };
}
