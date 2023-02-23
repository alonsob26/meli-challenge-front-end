//cargar variables de entorno
require("dotenv").config();
//cargar express
const express = require("express");
//cargar cors
const cors = require("cors");
//crear la app con express
const app = express();
//cargar puerto
const PORT = process.env.PORT || 3001;
//usa cors para evitar problemas
app.use(cors());
//cargar rutas
app.use("/api", require("./app/routes"));

//iniciar servidor
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});