import { useTheme } from "../context/Theme";

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      className="w-12 h-6 rounded-full border border-black dark:bg-slate-50 p-1 dark:gray-600 relative transition-colors duration-500 ease-in focus:outline-none"
      onClick={toggleTheme}
    >
      <div className="rounded-full w-4 h-4 bg-black  relative ml-0 dark:ml-6 pointer-events-none transition-all duration-300 ease-out"></div>
    </button>
  );
};
export default ThemeToggle;
