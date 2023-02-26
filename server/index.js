const app = require("./app");

//cargar puerto
const PORT = process.env.PORT || 3001;

//iniciar servidor
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
