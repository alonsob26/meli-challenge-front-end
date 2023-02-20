import { Breadcumb } from "../components/Layout/Breadcumb";
import { useLoaderData } from "react-router-dom";
import { Breadcumbs } from "../components/Layout/Breadcumbs";

export const Dashboard = () => {
  const items = useLoaderData();
  let categories = [];
  if (items.data && items.data.categories.length > 0) {
    categories = items.data.categories;
  }
  return (
    <>
      {categories.length > 0 && <Breadcumbs categories={categories} />}
      <div className="page_container">DASHBOARD</div>
    </>
  );
};
