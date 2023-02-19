const API_URL_ITEMS = "https://api.mercadolibre.com/sites/MLA/search?q=";
const API_URL_ITEM = "https://api.mercadolibre.com/items/";
const API_URL_CATEGORY = "https://api.mercadolibre.com/categories/";

const apis = {
  getItems: `${API_URL_ITEMS}`,
  getItem: `${API_URL_ITEM}`,
  getCategory: `${API_URL_CATEGORY}`,
};

module.exports = { apis };
