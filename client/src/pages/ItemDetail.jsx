import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getItem } from "../services/items";
import { Breadcumbs } from "../components/Layout/Breadcumbs";
import { ItemPrice } from "../components/common/ItemPrice";
import notFoundImg from "../assets/404.png";

export const ItemDetail = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const [itemPriceInfo, setItemPriceInfo] = useState({
    price: 0,
    decimals: 0,
    shipping: false,
  });
  useEffect(() => {
    getItem(id)
      .then((res) => {
        setItem(res.data.item);
        setItemPriceInfo({
          price: res.data.item.price.amount,
          decimals: res.data.item.price.decimals,
          shipping: res.data.item.free_shipping,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  return (
    <>
      {item.path_from_root && <Breadcumbs categories={item.path_from_root} />}
      <div className="page_container">
        {item.id ? (
          <>
            <div className="item_detail_container">
              <div className="item_detail_img">
                <img
                  src={item.picture === "" ? notFoundImg : item.picture}
                  alt="item_img"
                  title={item.title}
                />
              </div>
              <div className="item_detail_info_container">
                <span className="condition_quantity">
                  {item.condition === "new" ? "Nuevo" : item.condition} -{" "}
                  {item.sold_quantity} vendidos
                </span>
                <span className="item_detail_name">{item.title}</span>
                <ItemPrice props={itemPriceInfo} styles={"item_detail_price"} />
                <button className="buy_button">Comprar</button>
              </div>
            </div>
            <div className="description_detail">
              <span className="description_title">
                {"Descripción del producto"}
              </span>
              <span className="description_text">
                {item.description
                  ? item.description
                  : "El producto no tiene descripción"}
              </span>
            </div>
          </>
        ) : (
          <div>ITEM NOT FOUND</div>
        )}
      </div>
    </>
  );
};
