const { httpError } = require("../helpers/handleError");
const { fetchUrl } = require("../helpers/fetchUrl");
const {
  parseItems,
  parseItemDetail,
  getCategoryNames,
} = require("../helpers/items");
const { apis } = require("../config/apis");

//obtener los items de la api de mercadolibre
const getItems = async (req, res) => {
  try {
    const items = await fetchUrl(
      `${apis.getItems}${req.query.q}&category=${req.query.category}&limit=4`
    );
    if (items.results.length > 0 && !items.error) {
      let parseResponse = parseItems(items);
      const categoryNames = await getCategoryNames(parseResponse.categories);
      parseResponse.categories = categoryNames;
      res.status(200).send({ status: 200, data: parseResponse });
    } else {
      res.status(200).send({ status: 200, data: [] });
    }
  } catch (error) {
    httpError(res, error);
  }
};

//obtener un item de la api de mercadolibre con su descripcion
const getItem = async (req, res) => {
  try {
    const item = await fetchUrl(`${apis.getItem}${req.params.id}`);
    if (Object.keys(item).length > 0 && !item.error) {
      const parseResponse = await parseItemDetail(item);
      const itemDescription = await fetchUrl(
        `${apis.getItem}${req.params.id}/description`
      );
      (parseResponse.item.description = itemDescription.plain_text),
        res.status(200).send({ status: 200, data: parseResponse });
    } else {
      res.status(200).send({ status: 200, data: [] });
    }
  } catch (error) {
    httpError(res, error);
  }
};

module.exports = { getItems, getItem };
