import { Outlet } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

export const SearchResults = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  //TODO: use this to call search api console.log(searchParams.get("search"));
  return (
    <div>
      SearchResults <Outlet />
    </div>
  );
};
