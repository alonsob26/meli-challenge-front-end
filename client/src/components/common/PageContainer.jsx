import PropTypes from "prop-types";

/* Componente contenedor de las paginas */

const PageContainer = ({ children }) => {
  return <div className="page_container">{children}</div>;
};

PageContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageContainer;
