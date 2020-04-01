const jwt = require("jwt-simple");

module.exports = async ({ req }) => {
  await require("./simularUsuarioLogado")(req);
  const auth = req.headers.authorization;
};
