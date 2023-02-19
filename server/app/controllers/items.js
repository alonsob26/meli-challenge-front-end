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
    const items = await fetchUrl(`${apis.getItems}${req.query.search}&limit=4`);
    if (items.results.length > 0) {
      let parseResponse = parseItems(items);
      const categoryNames = await getCategoryNames(parseResponse.categories);
      parseResponse.categories = categoryNames;
      res.send({ data: parseResponse });
    } else {
      res.send({ data: [] });
    }
  } catch (error) {
    httpError(res, error);
  }
};

//obtener un item de la api de mercadolibre con su descripcion
const getItem = async (req, res) => {
  try {
    const item = await fetchUrl(`${apis.getItem}${req.params.id}`);
    const parseResponse = await parseItemDetail(item);
    const itemDescription = await fetchUrl(
      `${apis.getItem}${req.params.id}/description`
    );
    (parseResponse.item.description = itemDescription.plain_text),
      res.send({ data: parseResponse });
  } catch (error) {
    httpError(res, error);
  }
};

module.exports = { getItems, getItem };
