import { useNavigate } from "react-router-dom";
import ic_Search from "../../assets/ic_Search.png";
import { useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

export const Search = () => {
  const { register, handleSubmit, setValue } = useForm();
  let [searchParams] = useSearchParams();
  const navigate = useNavigate();

  //setear el valor del input con el valor del query params
  useEffect(() => {
    const search = searchParams.get("q");
    search ? setValue("search", search) : setValue("search", "");
  }, [searchParams, setValue]);

  //funcion para navegar a la ruta items y pasarle el valor del input con query params
  function onSubmit({ search }) {
    //esta condicion valida que el valor del input no sea vacio y que el valor del input sea diferente al valor del input anterior
    if (search !== "" && searchParams !== search) {
      navigate(`/items?q=${search}`);
    }
  }

  return (
    <form className="searchItems_form" onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("search")}
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
