import { useLoaderData } from "react-router-dom";
import { Breadcumbs } from "../components/Layout/Breadcumbs";
import { ItemResult } from "../components/ItemResult/ItemResult";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { SEO } from "../components/common/SEO";
import { PageContainer } from "../components/common/PageContainer";
import { ItemNotFound } from "../components/common/ItemNotFound";

/* Este componente renderiza la pagina inicial de la app */

export const Dashboard = () => {
  /* useLoaderData hook to get the data from the loader route "getItems()" in client/src/router */
  const items = useLoaderData();
  const [itemResult, setItemResult] = useState();
  const [categories, setCategories] = useState();

  useEffect(() => {
    if (items.data && items.data.items.length > 0) {
      setItemResult(items.data.items);
      setCategories(items.data.categories);
    }
  }, [items.data]);

  return (
    <>
      {/* SEO and Breadcumbs components  */}
      {categories && (
        <>
          <SEO
            title={categories[categories.length - 1].name}
            keywords={categories.map((category) => {
              return category.name;
            })}
          />
          <Breadcumbs categories={categories} />
        </>
      )}
      {/* Dashboard page content */}
      <PageContainer>
        {itemResult && itemResult.length > 0 ? (
          itemResult.map((item) => {
            return (
              <Link
                className="dashboard_link"
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
          <ItemNotFound />
        )}
      </PageContainer>
    </>
  );
};
