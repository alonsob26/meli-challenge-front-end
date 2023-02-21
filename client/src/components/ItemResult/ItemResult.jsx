import PropTypes from "prop-types";
import shipping_logo from "../../assets/ic_shipping.png";
import { formatMoney } from "../../utils/formatMoney";

export const ItemResult = ({
  img,
  title,
  shipping,
  price,
  seller,
  decimals,
}) => {
  return (
    <div className="item_result_container">
      <div className="item_container">
        <div className="item_img_container">
          <img src={img} alt={title} />
        </div>
        <div className="item_info_container">
          <div className="item_price">
            <span>{`$ ${formatMoney({
              amount: price,
            })}`}</span>
            <span className="item_price_decimals">
              {decimals === 0 ? "00" : decimals}
            </span>
            {shipping && (
              <img
                className="item_shipping"
                src={shipping_logo}
                alt="shipping"
              />
            )}
          </div>
          <div className="item_title">{title}</div>
        </div>
        <div className="item_seller_container">
          <div className="item_seller">{seller}</div>
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
