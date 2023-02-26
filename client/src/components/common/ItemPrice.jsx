import { formatMoney } from "../../utils/formatMoney";
import shipping_logo from "../../assets/ic_shipping.png";
import PropTypes from "prop-types";

/* Componente para renderizar el precio del producto */

const ItemPrice = ({ props, styles }) => {
  const { price, decimals, shipping } = props;
  return (
    <div data-testid="item-price" className={styles}>
      <span>{`$ ${formatMoney({
        price,
      })}`}</span>
      <span>{decimals === 0 ? "00" : String(decimals).padEnd(2, "0")}</span>
      {shipping && <img src={shipping_logo} alt="shipping" title="shipping" />}
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
