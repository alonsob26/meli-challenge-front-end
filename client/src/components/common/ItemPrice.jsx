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
      <span>
        {props.decimals === 0 ? "00" : String(props.decimals).padEnd(2, "0")}
      </span>
      {props.shipping && (
        <img src={shipping_logo} alt="shipping" title="shipping" />
      )}
    </div>
  );
};

ItemPrice.propTypes = {
  props: PropTypes.shape({
    decimals: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    shipping: PropTypes.bool.isRequired,
  }).isRequired,
  styles: PropTypes.string.isRequired,
};

export default ItemPrice;
