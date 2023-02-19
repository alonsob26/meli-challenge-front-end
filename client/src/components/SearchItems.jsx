import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const Search = () => {
  const [prevSearchValue, setPrevSearchValue] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event) {
    const newSearchValue = event.target.elements[0].value;
    event.preventDefault();
    const params = { search: newSearchValue };
    if (newSearchValue !== "" && prevSearchValue !== newSearchValue) {
      navigate(`/items?search=${params.search}`);
      setPrevSearchValue(newSearchValue);
      console.log("ENTRO");
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <input />
    </form>
  );
};
