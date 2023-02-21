import { useParams } from "react-router-dom";

export const ItemDetal = () => {
  const { id } = useParams();
  //TODO: use this id to search by item for item deconsole.log(id);
  return (
    <>
      {/* {categories.length > 0 && <Breadcumbs categories={categories} />} */}
      <div className="detail_container">ITEM DETAIL</div>
    </>
  );
};
