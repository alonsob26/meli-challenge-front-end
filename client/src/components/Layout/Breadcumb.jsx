import React from "react";
import PropTypes from "prop-types";

export const Breadcumb = ({ id, category }) => {
  return <div className="breadcumb_container">{category}</div>;
};

Breadcumb.propTypes = {
  id: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
};
