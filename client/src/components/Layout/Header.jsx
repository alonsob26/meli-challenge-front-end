import SearchInput from "./SearchInput";
import logo_ml from "../../assets/Logo_ML.png";

/* Componente para renderizar el header de la pagina (buscador) */

const Header = () => {
  return (
    <div className="searchHeader_container">
      <div>
        <a href="https://www.mercadolibre.com/">
          <img
            className="searchHeader_logoML"
            src={logo_ml}
            alt="logo_ml"
            title="https://www.mercadolibre.com/"
          />
        </a>
        <SearchInput />
      </div>
    </div>
  );
};

export default Header;
