import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getItem } from "../apis/items";
import { Breadcumbs } from "../components/Layout/Breadcumbs";
import { ItemResult } from "../components/ItemResult/ItemResult";

export const ItemDetail = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  useEffect(() => {
    getItem(id)
      .then((res) => {
        setItem(res.data.item);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  return (
    <>
      {item.path_from_root && <Breadcumbs categories={item.path_from_root} />}
      <div className="dashboard_container">
        {item.id ? (
          <ItemResult
            key={item.id}
            decimals={item.price.decimals}
            img={item.picture}
            price={item.price.amount}
            seller={`Alonso Burgos`}
            shipping={item.free_shipping}
            title={item.title}
          />
        ) : (
          <div>ITEM NOT FOUND</div>
        )}
      </div>
    </>
  );
};
