import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { searchItems } from "../apis/items";
import { Breadcumbs } from "../components/Layout/Breadcumbs";
import { ItemResult } from "../components/ItemResult/ItemResult";
import { Link } from "react-router-dom";

export const SearchResults = () => {
  let [searchParams] = useSearchParams();
  let query = searchParams.get("q");
  let category = searchParams.get("category");
  const [searchResult, setSearchResult] = useState({});
  useEffect(() => {
    searchItems(category ? `${query}&category=${category}` : query)
      .then((res) => {
        setSearchResult(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [category, query, searchParams]);
  return (
    <>
      {searchResult.categories && searchResult.categories.length > 0 && (
        <Breadcumbs categories={searchResult.categories} />
      )}
      <div className="page_container">
        {searchResult.items && searchResult.items.length > 0 ? (
          searchResult.items.map((item) => {
            return (
              <Link
                className="searchResults_link"
                key={item.id}
                to={`/items/${item.id}`}
              >
                <ItemResult
                  key={item.id}
                  decimals={item.price.decimals}
                  img={item.picture}
                  price={item.price.amount}
                  seller={`Alonso Burgos`}
                  shipping={item.free_shipping}
                  title={item.title}
                />
              </Link>
            );
          })
        ) : (
          <div>ITEM NOT FOUND</div>
        )}
      </div>
    </>
  );
};
