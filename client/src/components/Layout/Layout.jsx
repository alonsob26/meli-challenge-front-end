import { Header } from "./Header";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="layout_container">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
