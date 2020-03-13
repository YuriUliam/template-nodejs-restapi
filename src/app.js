
import 'dotenv/config'

import Youch from 'youch'
import express from 'express'
import 'express-async-errors'
import morgan from 'morgan'

import routes from './routes'

// Uncomment this for database use
// import './database'

/**
 * @class
 * @module App
 * @author Yuri Uliam
 * This is your Application's Heart,
 * where it starts the express and
 * it's middlewares, routes and also
 * handle exceptions, both in
 * dev and prod enviroments
 */
class App {
  constructor() {
    this.server = express()

    this.middlewares()
    this.routes()
    this.exceptionHandler()
  }

  /**
   * @private
   * @returns {void}
   */
  middlewares() {
    this.server.use(express.json())
    this.server.use(morgan('dev'))
  }

  /**
   * @private
   * @returns {void}
   */
  routes() {
    this.server.use('/api', routes)
  }

  /**
   * @private
   * @returns {void}
   */
  exceptionHandler() {
    this.server.use(
      /**
       * This is a middleware for Errors
       * @private
       * @param {Error} err                   The error to be handled
       * @param {express.Request} req         The request where the error occurred
       * @param {express.Response} res        The Response to this Error
       * @param {express.NextFunction} next   Handle Youch Logs
       */
      async (err, req, res, next) => {
        if (process.env.NODE_ENV === 'development') {
          const error = await new Youch(err, req).toJSON()

          return res
            .status(500)
            .json({ message: 'Internal Server Error', error })
        }

        return res.status(500).json({ message: 'Internal Server Error' })
      }
    )
  }
}

export default new App().server
