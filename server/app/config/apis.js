// Description: This file contains the API's URL's
const API_GET_ITEMS = "https://api.mercadolibre.com/sites/MLA/search?q=";
const API_GET_ITEM = "https://api.mercadolibre.com/items/";
const API_GET_CATEGORY = "https://api.mercadolibre.com/categories/";

const apis = {
  getItems: `${API_GET_ITEMS}`,
  getItem: `${API_GET_ITEM}`,
  getCategory: `${API_GET_CATEGORY}`,
};

module.exports = { apis };
