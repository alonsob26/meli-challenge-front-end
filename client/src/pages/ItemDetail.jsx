import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getItem } from "../services/items";
import { Breadcumbs } from "../components/Layout/Breadcumbs";
import { ItemPrice } from "../components/common/ItemPrice";
import notFoundImg from "../assets/404.png";
import { SEO } from "../components/common/SEO";
import { PageContainer } from "../components/common/PageContainer";
import { ItemNotFound } from "../components/common/ItemNotFound";

/* Este componente renderiza el detalle de los productos individualmente */

export const ItemDetail = () => {
  /* useParams hook to get the id value from the url */
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
        if (res.data.length === 0) {
          return;
        }
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
      {/* SEO and Breadcumbs components  */}
      {item.path_from_root && (
        <>
          <SEO
            title={item.path_from_root[item.path_from_root.length - 1].name}
            keywords={item.path_from_root.map((category) => {
              return category.name;
            })}
          />
          <Breadcumbs categories={item.path_from_root} />
        </>
      )}
      {/* ItemDetail page content */}
      <PageContainer>
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
          <ItemNotFound />
        )}
      </PageContainer>
    </>
  );
};
