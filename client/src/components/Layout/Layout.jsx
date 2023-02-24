import { Header } from "./Header";
import { Outlet } from "react-router-dom";

/* Componente Layout que contiene el Header y el Outlet 
donde se muestran las paginas */

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
