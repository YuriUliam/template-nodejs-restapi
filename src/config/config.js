const { DB_HOST, DB_NAME, DB_USER, DB_PASS } = process.env

/**
 * @typedef {import('sequelize').Options} sequelizeOptions
 */

/**
 * @module database/config/dev
 * @author Yuri Uliam
 * @description Database Configuration for Development Enviroment
 */
module.exports = {
  /**
   * @type {sequelizeOptions}
   */
  database: {
    dialect: '',
    host: DB_HOST,
    username: DB_USER,
    password: DB_PASS,
    database: DB_NAME,
    define: {
      timestamps: true,
      underscored: true,
    },
  },
}
