const saludar = () => {
  alert(
    "Hola gracias por probar mi challenge de meli :D saludos! \nAlonso Burgos Astorga 2023"
  );
};

const BuyButtom = () => {
  return (
    <button
      className="buy_button"
      onClick={() => {
        saludar();
      }}
    >
      Comprar
    </button>
  );
};

export default BuyButtom;
