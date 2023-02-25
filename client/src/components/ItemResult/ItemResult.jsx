import PropTypes from "prop-types";
import { ItemPrice } from "../common/index";
import notFoundImg from "../../assets/404.png";

/* componente para retornar un producto en la pagina de busqueda */

const ItemResult = ({ ...props }) => {
  return (
    <div className="item_result_container">
      <div className="item_container">
        <div className="item_img_container">
          <img
            src={props.picture === "" ? notFoundImg : props.picture}
            alt={props.title}
            title={props.title}
          />
        </div>
        <div className="item_info_container">
          <ItemPrice props={props} styles={"item_result_price"} />
          <div className="item_title">{props.title}</div>
        </div>
        <div className="item_seller_container">
          <span>{props.seller}</span>
        </div>
      </div>
      <div className="item_divider">
        <hr />
      </div>
    </div>
  );
};

ItemResult.propTypes = {
  picture: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  seller: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  decimals: PropTypes.number.isRequired,
  shipping: PropTypes.bool.isRequired,
};

export default ItemResult;
