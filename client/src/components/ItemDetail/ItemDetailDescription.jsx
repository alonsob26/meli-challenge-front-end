import propTypes from "prop-types";

const ItemDetailDescription = ({ description }) => {
  return (
    <div className="description_detail">
      <span>{"Descripción del producto"}</span>
      <span>
        {description ? description : "El producto no tiene descripción"}
      </span>
    </div>
  );
};

ItemDetailDescription.propTypes = {
  description: propTypes.string.isRequired,
};

export default ItemDetailDescription;
