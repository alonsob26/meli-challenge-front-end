import { useEffect } from "react";
import { Breadcumb } from "../components/Layout/Breadcumb";
import { searchItems } from "../apis/items";

export const Dashboard = () => {
  useEffect(() => {
    async function fetchData() {
      const response = await searchItems("Apple");
      console.log(response);
    }
    fetchData();
  }, []);
  return (
    <>
      <Breadcumb id={1} category={"Category Name"} />
      <div className="page_container">DASHBOARD</div>
    </>
  );
};
