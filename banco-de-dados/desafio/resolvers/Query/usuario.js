const db = require("../../config/db");

module.exports = {
  async usuarios() {
    return db("usuarios");
  },
  async usuario(_, { filtro }) {
    if (!filtro) return null;

    const { id, email } = filtro;

    if (id) {
      return db("usuarios")
        .where({ id })
        .first();
    }

    if (email) {
      return db("usuarios")
        .where({ email })
        .first();
    }

    return null;
  }
};
