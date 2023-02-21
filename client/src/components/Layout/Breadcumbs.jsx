import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Breadcumbs = ({ categories }) => {
  return (
    <div className="breadcumb_container">
      {categories.length > 0 &&
        categories.map((category) => (
          <Link
            className="breadcumb_link"
            to={`/items?category=${category.id}`}
            key={category.id}
          >
            {category.name}
            <span className="breadcumb_separator">{">"}</span>
          </Link>
        ))}
    </div>
  );
};

Breadcumbs.propTypes = {
  categories: PropTypes.array.isRequired,
};
