import 'dotenv/config'

const { NODE_ENV = 'development' } = process.env

import { database as dev } from './config'
import { database as prod } from './config.prod'
import { database as test } from './config.test'

/**
 * @typedef {import('sequelize').Options} sequelizeOptions
 */

/**
 * @class
 * @namespace
 */
class DatabaseEnviroment {
  constructor() {
    /**
     * @type {sequelizeOptions}
     */
    this.env = null

    this.getEnv()
  }

  /** @private */
  getEnv() {
    switch (NODE_ENV) {
      case 'production':
        this.env = prod
        break
      case 'test':
        this.env = test
        break
      default: // case 'development'
        this.env = dev
        break
    }
  }
}

export default new DatabaseEnviroment().env
