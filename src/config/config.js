import 'dotenv/config';

const { DB_DIALECT, DB_HOST, DB_NAME, DB_USER, DB_PASS } = process.env;

module.exports = {
  database: {
    dialect: DB_DIALECT,
    host: DB_HOST,
    username: DB_USER,
    password: DB_PASS,
    database: DB_NAME,
    define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true,
    },
  },
};
