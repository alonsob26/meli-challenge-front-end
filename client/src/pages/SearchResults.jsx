import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { searchItems } from "../services/items";
import { Breadcumbs } from "../components/Layout/Breadcumbs";
import { ItemResult } from "../components/ItemResult/ItemResult";
import { Link } from "react-router-dom";
import { SEO } from "../components/common/SEO";

export const SearchResults = () => {
  let [searchParams] = useSearchParams();
  let query = searchParams.get("search");
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
        <>
          <SEO
            title={
              searchResult.categories[searchResult.categories.length - 1].name
            }
            keywords={searchResult.categories.map((category) => {
              return category.name;
            })}
          />
          <Breadcumbs categories={searchResult.categories} />
        </>
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
                  picture={item.picture}
                  price={item.price.amount}
                  seller={item.location}
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
