/* Componente contenedor de las paginas */

const PageContainer = ({ children }) => {
  return (
    <div data-testid="page-container" className="page_container">
      {children}
    </div>
  );
};

export default PageContainer;
