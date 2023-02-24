import itemNotFound from "../../assets/img_itemNotFound.png";

/* componente que se renderiza cuando no encuentra un producto */

export const ItemNotFound = () => {
  return (
    <div className="itemNotFound">
      <h1>Producto no encontrado</h1>
      <img className="itemNotFound__icon" src={itemNotFound} alt="notFound" />
    </div>
  );
};
