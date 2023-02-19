const parseItems = (items) => {
  const parseResponse = {
    //TODO: Preguntar que es lo que significa esto
    author: {
      name: "alonso",
      lastname: "burgos",
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
        amount: Number(price.shift()),
        decimals: price.length > 1 ? Number(price.pop()) : 0,
      },
      picture: `http://http2.mlstatic.com/D_${item.thumbnail_id}-O.jpg`,
      condition: item.condition,
      free_shipping: item.shipping.free_shipping,
    });
  });

  return parseResponse;
};

const parseItemDetail = (item) => {
  const price = String(item.price).split(".");
  const parseResponse = {
    //TODO: Preguntar que es lo que significa esto
    author: {
      name: "alonso",
      lastname: "burgos",
    },
    item: {
      id: item.id,
      title: item.title,
      price: {
        currency: item.currency_id,
        amount: Number(price.shift()),
        decimals: price.length > 1 ? Number(price.pop()) : 0,
      },
      picture: `http://http2.mlstatic.com/D_${item.thumbnail_id}-O.jpg`,
      condition: item.condition,
      free_shipping: item.shipping.free_shipping,
      sold_quantity: item.sold_quantity,
    },
  };

  return parseResponse;
};

module.exports = { parseItems, parseItemDetail };
