import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="w-16 h-8 pr-1 pl-1 ml-1 mr-1 rounded-l-full rounded-r-full 
      dark:border-yellow-600 border-blue-500 sm:ml-12 border-2 dark:transform justify-around dark:bg-gray-400 bg-blue-300 focus:outline outline-none"
      onClick={() =>
        setTheme(
          theme === "dark" || resolvedTheme === "dark" ? "light" : "dark"
        )
      }
    >
      <div className="rounded-full h-6 w-6 bg-gray-200 dark:transform dark:translate-x-7 dark:absolute duration-700 absolute"></div>
      {mounted && (theme === "dark" || resolvedTheme === "dark") ? (
        <>
          <FontAwesomeIcon icon={faSun} size="1x" className="text-yellow-400" />
          <FontAwesomeIcon
            icon={faMoon}
            size="1x"
            className="text-blue-500 ml-4"
          />
        </>
      ) : (
        <div className="">
          <FontAwesomeIcon icon={faSun} size="1x" className="text-yellow-400" />
          <FontAwesomeIcon
            icon={faMoon}
            size="1x"
            className="text-blue-700  ml-4"
          />
        </div>
      )}
    </button>
  );
};

export default ThemeSwitch;
