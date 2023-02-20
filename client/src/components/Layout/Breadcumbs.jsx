import { Breadcumb } from "./Breadcumb";
import PropTypes from "prop-types";
export const Breadcumbs = ({ categories }) => {
  return (
    <div className="breadcumb_container">
      {categories.length > 0 &&
        categories.map((category) => (
          <Breadcumb key={category.id} id={category.id} name={category.name} />
        ))}
    </div>
  );
};

Breadcumbs.propTypes = {
  categories: PropTypes.array.isRequired,
};
