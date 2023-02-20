import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Breadcumb = ({ id, name }) => {
  return (
    <Link className="breadcumb_link" to={`/items?category=${id}`} key={id}>
      {name}
      <span className="breadcumb_separator">{">"}</span>
    </Link>
  );
};

Breadcumb.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
