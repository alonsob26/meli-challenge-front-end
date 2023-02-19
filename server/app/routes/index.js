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

router.get("*", (req, res) => {
  res.status(404).send("Not found");
  res.send({ error: "Not found" });
});

module.exports = router;
