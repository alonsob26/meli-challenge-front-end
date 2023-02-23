const { fetchUrl } = require("./fetchUrl");
const { apis } = require("../config/apis");

//función para parsear los items
const parseItems = (items) => {
  const parseResponse = {
    author: {
      name: "Alonso",
      lastname: "Burgos",
    },
    categories: [],
    items: [],
  };

  items.results.map((item) => {
    const price = String(item.price).split(".");
    parseResponse.categories.push(item.category_id);
    parseResponse.items.push({
      id: item.id,
      title: item.title,
      price: {
        currency: item.currency_id,
        amount: Number(price[0]),
        decimals: price.length > 1 ? Number(price[1]) : 0,
      },
      picture: item.thumbnail.replace("-I", "-O"),
      condition: item.condition,
      free_shipping: item.shipping.free_shipping,
    });
  });

  return parseResponse;
};

//función para parsear un item
const parseItemDetail = async (item) => {
  const price = String(item.price).split(".");
  const parseResponse = {
    author: {
      name: "Alonso",
      lastname: "Burgos",
    },
    item: {
      id: item.id,
      title: item.title,
      price: {
        currency: item.currency_id,
        amount: Number(price[0]),
        decimals: price.length > 1 ? Number(price[1]) : 0,
      },
      picture: item.thumbnail.replace("-I", "-O"),
      condition: item.condition,
      free_shipping: item.shipping.free_shipping,
      sold_quantity: item.sold_quantity,
      path_from_root: await getCategoryPath(item.category_id),
    },
  };

  return parseResponse;
};

//función para obtener los nombres de las categorias
const getCategoryNames = async (categories) => {
  const categoryNames = [];
  await Promise.all(
    categories.map(async (id) => {
      const category = await fetchUrl(`${apis.getCategory}${id}`);
      if (!categoryNames.some((category) => category.id === id)) {
        categoryNames.push({
          id: id,
          name: category.name,
        });
      }
    })
  );
  return categoryNames;
};

//función para obtener el path de las categorias
const getCategoryPath = async (category_id) => {
  const categoryPath = [];
  const category = await fetchUrl(`${apis.getCategory}${category_id}`);
  return category.path_from_root;
};
module.exports = {
  parseItems,
  parseItemDetail,
  getCategoryNames,
  getCategoryPath,
};
