const express = require("express");
const router = express.Router();
//usar fs para leer los archivos de la carpeta
const fs = require("fs");
//obtener la ruta de la carpeta actual
const pathRouter = `${__dirname}`;
//funcion para remover la extension del archivo
const removeExtension = (file) => {
  //shift para obtener el nombre del archivo sin la extension
  return file.split(".").shift();
};

//esta funcion carga las rutas de cada archivo dentro de routes automaticamente
//leer los archivos de la carpeta y filtrar los que no queremos
fs.readdirSync(pathRouter).filter((file) => {
  //obtener el nombre del archivo sin la extension
  const fileWithoutExtension = removeExtension(file);
  //archivos que no queremos cargar
  const skipFiles = ["index"];
  //si el archivo no esta en la lista de archivos a omitir
  if (!skipFiles.includes(fileWithoutExtension)) {
    //cargar la ruta
    router.use(
      `/${fileWithoutExtension}`,
      require(`./${fileWithoutExtension}`)
    );
  }
});

//regresar un not found si no encuentra la ruta
router.get("*", (req, res) => {
  res.status(404).send({ message: "Not found" });
});

module.exports = router;
