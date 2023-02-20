import { Search } from "./SearchItems";
import logo_ml from "../../assets/Logo_ML.png";

export const Header = () => {
  return (
    <div className="searchHeader_container">
      <div>
        <img className="searchHeader_logoML" src={logo_ml} alt="logo_ml" />
        <Search />
      </div>
    </div>
  );
};
