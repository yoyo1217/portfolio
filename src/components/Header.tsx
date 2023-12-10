import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <div className="p-2 dark:bg-black">
      <div className="flex items-center justify-between">
        <span className="dark:text-white">yoyo1217</span>
        <div className="dark:text-white">
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};
export default Header;
