import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { searchItems } from "../services/items";
import { Breadcrumbs } from "../components/Layout/index";
import { ItemResult } from "../components/ItemResult/index";
import { Link } from "react-router-dom";
import {
  SEO,
  PageContainer,
  ItemNotFound,
  Spinner,
} from "../components/common/index";

/* Este componente renderiza la pagina de resultados de busqueda */

const SearchResults = () => {
  /* useSearchParams hook to get the query params from the url */
  let [searchParams] = useSearchParams();
  let query = searchParams.get("search");
  let category = searchParams.get("category");
  const [searchResult, setSearchResult] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchItems = async () => {
    setLoading(true);
    try {
      const res = await searchItems(
        category ? `${query}&category=${category}` : query
      );
      if (res.data.error) {
        setLoading(false);
        return;
      }
      setSearchResult(res.data);
    } catch (err) {
      setLoading(false);
      console.error(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchItems();
  }, [searchParams]);

  if (loading) return <Spinner />;

  return (
    <>
      {/* SEO and Breadcrumbs components  */}
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
          <Breadcrumbs categories={searchResult.categories} />
        </>
      )}
      {/* SearchResults page content */}
      <PageContainer>
        {searchResult.items && searchResult.items.length > 0
          ? searchResult.items.map((item) => {
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
          : !loading && <ItemNotFound />}
      </PageContainer>
    </>
  );
};

export default SearchResults;
