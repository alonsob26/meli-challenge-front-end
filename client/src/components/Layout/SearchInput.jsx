import { useNavigate } from "react-router-dom";
import ic_Search from "../../assets/ic_Search.png";
import { useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

/* Componente para ingresar los valores de busqueda de la pagina */

const SearchInput = () => {
  const { register, handleSubmit, setValue } = useForm();
  let [searchParams] = useSearchParams();
  const navigate = useNavigate();

  //setear el valor del input con el valor del query params
  useEffect(() => {
    const searchValue = searchParams.get("search");
    searchValue
      ? setValue("searchValue", searchValue)
      : setValue("searchValue", "");
  }, [searchParams, setValue]);

  //funcion para navegar a la ruta items y pasarle el valor del input con query params
  function onSubmit({ searchValue }) {
    //esta condicion valida que el valor del input no sea vacio y que el valor del input sea diferente al valor del input anterior
    if (searchValue !== "" && searchParams !== searchValue) {
      navigate(`/items?search=${searchValue}`);
    }
  }

  return (
    <form className="searchItems_form" onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("searchValue")}
        className="searchItems_input"
        placeholder="Nunca dejes de buscar"
        spellCheck="false"
      />
      <button className="searchItems_button">
        <img
          src={ic_Search}
          alt="search_logo"
          title="search mercado libre logo"
        />
      </button>
    </form>
  );
};

export default SearchInput;
