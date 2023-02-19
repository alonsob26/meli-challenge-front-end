//fetch nativo de node es un experimento basado en la libreria undici que puede cambiar en el futuro
const { fetch } = require("undici");

const fetchUrl = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

module.exports = { fetchUrl };
