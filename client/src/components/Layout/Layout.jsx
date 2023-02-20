import { Header } from "./SearchHeader";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="layout_container">
      <Header />
      <main className="layout_main">
        <div className="outlet_container">
          <Outlet />
        </div>
      </main>
    </div>
  );
};
