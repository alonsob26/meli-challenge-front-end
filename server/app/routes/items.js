const express = require("express");
const router = express.Router();
//cargar controlador
const { getItems, getItem, searchItems } = require("../controllers/items");

//items routes
router.get("/", getItems);
router.get("/​:id", getItem);

module.exports = router;
