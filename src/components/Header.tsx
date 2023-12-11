import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <div className="p-2 dark:bg-slate-800">
      <div className="flex items-center justify-end">
        {/* <span className="dark:text-slate-200">yoyo1217</span> */}
        <div className="dark:text-slate-200">
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};
export default Header;
