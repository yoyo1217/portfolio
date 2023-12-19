import { Outlet } from "react-router-dom";
import Header from "./Header";
import { useTheme } from "../context/Theme";

const AppLayout = () => {
  const { theme } = useTheme();

  return (
    <div className={`${theme === "dark" ? "dark" : ""}`}>
      <div className="h-screen  bg-slate-400 dark:bg-slate-800">
        <Header />
        <main className="w-4/5 mx-auto dark:bg-slate-800">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
export default AppLayout;
