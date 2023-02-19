const { httpError } = require("../helpers/handleError");

//obtener los items de la api de mercadolibre
const getItems = (req, res) => {
  //TODO: call https://api.mercadolibre.com/sites/MLA/search?q=​:query console.log(req.query);
  try {
    res.send({ listItems: [1, 2, 3] });
  } catch (error) {
    httpError(res, error);
  }
};

//obtener un item de la api de mercadolibre con su descripcion
const getItem = (req, res) => {
  //TODO: call https://api.mercadolibre.com/items/​:id
  //and https://api.mercadolibre.com/items/​:id​/description console.log(req.params.id);
  try {
    res.send({ item: req.params.id });
  } catch (error) {
    httpError(res, error);
  }
};

module.exports = { getItems, getItem };
