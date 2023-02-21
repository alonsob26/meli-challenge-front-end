import { useLoaderData } from "react-router-dom";
import { Breadcumbs } from "../components/Layout/Breadcumbs";
import { ItemResult } from "../components/ItemResult/ItemResult";
import { Link } from "react-router-dom";

export const Dashboard = () => {
  const items = useLoaderData();
  let categories = [];
  if (items.data && items.data.categories.length > 0) {
    categories = items.data.categories;
  }
  return (
    <>
      {categories.length > 0 && <Breadcumbs categories={categories} />}
      <div className="dashboard_container">
        {items.data && items.data.items.length > 0 ? (
          items.data.items.map((item) => {
            return (
              <Link
                className="dashboard_link"
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
