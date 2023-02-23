import PropTypes from "prop-types";
import { ItemPrice } from "../common/ItemPrice";

export const ItemResult = ({ ...props }) => {
  return (
    <div className="item_result_container">
      <div className="item_container">
        <div className="item_img_container">
          <img src={props.img} alt={props.title} />
        </div>
        <div className="item_info_container">
          <ItemPrice props={props} styles={"item_result_price"} />
          <div className="item_title">{props.title}</div>
        </div>
        <div className="item_seller_container">
          <div className="item_seller">{props.seller}</div>
        </div>
      </div>
      <div className="item_divider">
        <hr />
      </div>
    </div>
  );
};

ItemResult.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  shipping: PropTypes.bool.isRequired,
  price: PropTypes.number.isRequired,
  decimals: PropTypes.number.isRequired,
  seller: PropTypes.string.isRequired,
};
