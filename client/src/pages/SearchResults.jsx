import { useSearchParams } from "react-router-dom";
import { Breadcumb } from "../components/Layout/Breadcumb";

export const SearchResults = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  //TODO: use this to call search api console.log(searchParams.get("q"));
  return (
    <>
      {/* {categories.length > 0 && <Breadcumbs categories={categories} />} */}
      <div className="page_container">SEARCH RESULTS</div>
    </>
  );
};
