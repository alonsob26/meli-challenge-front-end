// descripcion: este helper se encarga de manejar los errores de las peticiones http
const hhtpError = (res, error) => {
  console.log(error);
  res.status(500).send({ message: error.message });
};

module.exports = { hhtpError };
