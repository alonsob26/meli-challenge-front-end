import { Breadcumb } from "../components/Layout/Breadcumb";

export const Dashboard = () => {
  return (
    <>
      <Breadcumb id={1} category={"Category Name"} />
      <div className="page_container">DASHBOARD</div>
    </>
  );
};
