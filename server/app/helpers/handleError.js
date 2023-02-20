// descripcion: este helper se encarga de manejar los errores de las peticiones http
const httpError = (res, error) => {
  res.status(500).send({ code: 500, message: "Algo salió mal" });
};

module.exports = { httpError };
