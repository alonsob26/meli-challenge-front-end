const { httpError } = require("../helpers/handleError");
const { fetchUrl } = require("../helpers/fetchUrl");
const { apis } = require("../config/apis");

//obtener los items de la api de mercadolibre
const getItems = async (req, res) => {
  try {
    const items = await fetchUrl(`${apis.getItems}${req.query.search}&limit=4`);
    res.send({ data: items });
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
