const express = require("express");
const router = express.Router();
//cargar controlador
const { getItems, getItem, searchItems } = require("../controllers/items");

//items routes
router.get("/items", getItems);
router.get("/items/​:id", getItem);

module.exports = router;
