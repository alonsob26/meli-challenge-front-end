const getItems = (req, res) => {
  res.send({ listItems: [1, 2, 3] });
};

const searchItems = (req, res) => {};

const getItem = (req, res) => {};

module.exports = { getItems, getItem, searchItems };
