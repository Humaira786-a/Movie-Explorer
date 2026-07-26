import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../contexts/ThemeContext";

function DarkModeToggle() {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="
        relative
        flex
        items-center
        w-16
        h-8
        rounded-full
        bg-gray-300
        dark:bg-gray-700
        transition-all
        duration-500
      "
    >
      <div
        className={`
          absolute
          w-7
          h-7
          rounded-full
          bg-white dark:bg-gray-950
          dark:shadow-black/40
          flex
          items-center
          justify-center
          transition-all
          duration-500
          ${
            darkMode
              ? "translate-x-8"
              : "translate-x-1"
          }
        `}
      >
        {darkMode ? (
          <FaMoon className="text-red-700" />
        ) : (
          <FaSun className="text-yellow-500" />
        )}
      </div>
    </button>
  );
}

export default DarkModeToggle;