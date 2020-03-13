/**
 * @typedef {import('sequelize').Options} sequelizeOptions
 */

/**
 * @module database/config/test
 * @author Yuri Uliam
 * @description Database Configuration for Test Enviroment
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
  }
}
