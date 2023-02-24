import notFoundImg from "../../assets/404.png";
import propTypes from "prop-types";

const ItemDetailImg = ({ picture, title }) => {
  return (
    <div className="item_detail_img">
      <img
        src={picture === "" ? notFoundImg : picture}
        alt="item_img"
        title={title}
      />
    </div>
  );
};

ItemDetailImg.propTypes = {
  picture: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
};

export default ItemDetailImg;
