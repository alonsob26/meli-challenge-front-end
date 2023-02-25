import propTypes from "prop-types";
import { BuyButton, ItemPrice } from "../common/index";

const ItemDetailInfo = ({ condition, sold_quantity, title, price_info }) => {
  return (
    <div data-testid="item-detail-info" className="item_detail_info_container">
      <span className="condition_quantity">
        {condition === "new" ? "Nuevo" : condition} - {sold_quantity} vendidos
      </span>
      <span className="item_detail_name">{title}</span>
      <ItemPrice props={price_info} styles={"item_detail_price"} />
      <BuyButton />
    </div>
  );
};

ItemDetailInfo.propTypes = {
  condition: propTypes.string.isRequired,
  sold_quantity: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
  price_info: propTypes.shape({
    shipping: propTypes.bool.isRequired,
    price: propTypes.number.isRequired,
    decimals: propTypes.number.isRequired,
  }).isRequired,
};

export default ItemDetailInfo;
