// Update with your config settings.

module.exports = {
  client: "mysql",
  connection: {
    database: "projeto-final",
    user: "root",
    password: "@26eg15111990eg"
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: "knex_migrations"
  }
};
