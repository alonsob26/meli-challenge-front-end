import { useLoaderData } from "react-router-dom";
import { Breadcrumbs } from "../components/Layout/index";
import { ItemResult } from "../components/ItemResult/index";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  SEO,
  PageContainer,
  ItemNotFound,
  Spinner,
} from "../components/common/index";

/* Este componente renderiza la pagina inicial de la app */

const Dashboard = () => {
  /* useLoaderData hook to get the data from the loader route "getItems()" in client/src/router */
  const items = useLoaderData();
  const [itemResult, setItemResult] = useState();
  const [categories, setCategories] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    if (items.data && items.data.items.length > 0) {
      setItemResult(items.data.items);
      setCategories(items.data.categories);
    }
    setLoading(false);
  }, [items.data]);

  if (loading) return <Spinner />;

  return (
    <div data-testid="dashboard">
      {/* SEO and Breadcrumbs components  */}
      {categories && (
        <>
          <SEO
            title={categories[categories.length - 1].name}
            keywords={categories.map((category) => {
              return category.name;
            })}
          />
          <Breadcrumbs categories={categories} />
        </>
      )}
      {/* Dashboard page content */}
      <PageContainer>
        {itemResult && itemResult.length > 0
          ? itemResult.map((item) => {
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
          : !loading && <ItemNotFound />}
      </PageContainer>
    </div>
  );
};

export default Dashboard;
