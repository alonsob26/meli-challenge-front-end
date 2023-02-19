const API_URL_ITEMS = "https://api.mercadolibre.com/sites/MLA/search?q=";
const API_URL_ITEM = "https://api.mercadolibre.com/sites/MLA/search?q=";
const API_URL_ITEM_DESC = "https://api.mercadolibre.com/sites/MLA/search?q=";

const apis = {
  getItems: `${API_URL_ITEMS}`,
  getItem: `${API_URL_ITEM}`,
  getItemDesc: `${API_URL_ITEM_DESC}`,
};

module.exports = { apis };
