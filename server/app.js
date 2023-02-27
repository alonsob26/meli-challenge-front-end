//cargar express
const express = require("express");

//cargar cors
const cors = require("cors");

//crear la app con express
const app = express();

//usa cors para evitar problemas
app.use(cors());

//cargar rutas
app.use("/api", require("./app/routes"));

module.exports = app;
