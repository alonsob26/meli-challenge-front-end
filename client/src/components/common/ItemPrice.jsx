import { formatMoney } from "../../utils/formatMoney";
import shipping_logo from "../../assets/ic_shipping.png";
import PropTypes from "prop-types";

/* Componente para renderizar el precio del producto */

const ItemPrice = ({ props, styles }) => {
  return (
    <div className={styles}>
      <span>{`$ ${formatMoney({
        price: props.price,
      })}`}</span>
      <span>{props.decimals === 0 ? "00" : props.decimals}</span>
      {props.shipping && (
        <img src={shipping_logo} alt="shipping" title="shipping" />
      )}
    </div>
  );
};

ItemPrice.propTypes = {
  price: PropTypes.number.isRequired,
  decimals: PropTypes.number.isRequired,
  shipping: PropTypes.bool.isRequired,
  styles: PropTypes.string.isRequired,
};

export default ItemPrice;
