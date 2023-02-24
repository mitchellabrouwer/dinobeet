import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import useToggleDark from "../../lib/hooks/useToggleDark";

export default function ToggleDark() {
  const [theme, setTheme] = useToggleDark();

  return (
    <button type="button">
      {theme === "dark" ? (
        <BsFillMoonFill onClick={() => setTheme("light")} />
      ) : (
        <BsFillSunFill onClick={() => setTheme("dark")} />
      )}
    </button>
  );
}
