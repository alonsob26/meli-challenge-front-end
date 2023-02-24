import PropTypes from "prop-types";
import { Link } from "react-router-dom";

/* Componente para mostrar los breadcrumbs (categorias) */

export const Breadcumbs = ({ categories }) => {
  //eliminar elementos de categories excepto los primeros 4
  if (categories.length > 4) {
    categories.splice(4, categories.length - 4);
  }
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
