/**
 * @typedef {import('sequelize').Options} sequelizeOptions
 */

/**
 * @module database/config/prod
 * @author Yuri Uliam
 * @description Database Configuration for Production Enviroment
 */
module.exports = {
  /**
   * @type {sequelizeOptions}
   */
  database: {
    dialect: '',
    host: '',
    database: '',
    username: '',
    password: '',
    define: {},
  },
}
