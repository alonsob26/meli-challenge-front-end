import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getItem } from "../services/items";
import { Breadcrumbs } from "../components/Layout/index";
import {
  SEO,
  PageContainer,
  ItemNotFound,
  Spinner,
} from "../components/common/index";
import {
  ItemDetailImg,
  ItemDetailInfo,
  ItemDetailDescription,
} from "../components/ItemDetail/index";

/* Este componente renderiza el detalle de los productos individualmente */

const ItemDetail = () => {
  /* useParams hook to get the id value from the url */
  const { id } = useParams();
  const [item, setItem] = useState({});
  const [itemPriceInfo, setItemPriceInfo] = useState({
    price: 0,
    decimals: 0,
    shipping: false,
  });
  const [loading, setLoading] = useState(true);

  const fetchItem = async () => {
    setLoading(true);
    try {
      const res = await getItem(id);
      if (res.data.length === 0) {
        setLoading(false);
        return;
      }
      setItem(res.data.item);
      setItemPriceInfo({
        price: res.data.item.price.amount,
        decimals: res.data.item.price.decimals,
        shipping: res.data.item.free_shipping,
      });
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.error(err);
    }
  };

  useEffect(() => {
    fetchItem();
  }, [id]);

  if (loading) return <Spinner />;

  return (
    <>
      {/* SEO and Breadcrumbs components  */}
      {item.path_from_root && (
        <>
          <SEO
            title={item.path_from_root[item.path_from_root.length - 1].name}
            keywords={item.path_from_root.map((category) => {
              return category.name;
            })}
          />
          <Breadcrumbs categories={item.path_from_root} />
        </>
      )}
      {/* ItemDetail page content */}
      <PageContainer>
        {item.id ? (
          <>
            <div className="item_detail_container">
              <ItemDetailImg {...item} />
              <ItemDetailInfo {...item} price_info={itemPriceInfo} />
            </div>
            <ItemDetailDescription {...item} />
          </>
        ) : (
          !loading && <ItemNotFound />
        )}
      </PageContainer>
    </>
  );
};

export default ItemDetail;
