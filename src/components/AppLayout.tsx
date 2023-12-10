import { Outlet } from "react-router-dom";
import Header from "./Header";
import { useTheme } from "../context/Theme";

const AppLayout = () => {
  const { theme } = useTheme();

  return (
    <div className={`${theme === "dark" ? "dark" : ""} dark:bg-slate-800`}>
      <Header />
      <main className="max-w-3xl mx-auto h-screen my-10 dark:">
        <Outlet />
      </main>
    </div>
  );
};
export default AppLayout;
