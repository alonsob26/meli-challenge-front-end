import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ic_Search from "../../assets/ic_Search.png";

export const Search = () => {
  const [prevSearchValue, setPrevSearchValue] = useState("");
  const navigate = useNavigate();

  //funcion para navegar a la ruta items y pasarle el valor del input con query params
  function handleSubmit(event) {
    const newSearchValue = event.target.elements[0].value;
    event.preventDefault();
    const params = { search: newSearchValue };
    //esta condicion valida que el valor del input no sea vacio y que el valor del input sea diferente al valor del input anterior
    if (newSearchValue !== "" && prevSearchValue !== newSearchValue) {
      navigate(`/items?search=${params.search}`);
      setPrevSearchValue(newSearchValue);
    }
  }
  return (
    <form className="searchItems_form" onSubmit={handleSubmit}>
      <input
        className="searchItems_input"
        placeholder="Nunca dejes de buscar"
        spellCheck="false"
      />
      <button className="searchItems_button">
        <img src={ic_Search} alt="search_logo" />
      </button>
    </form>
  );
};
