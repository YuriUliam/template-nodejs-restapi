/**
 * @typedef {import('express').Request} Request
 * @typedef {import('express').Response} Response
 */

/**
 * @module controller/api
 * @author Yuri Uliam
 * @description API's Default Controller
 */
module.exports = {
  /**
   * @description Returns an Object with the Date in ms as a Heartbeat
   * @param {Request} req   any
   * @param {Response} res  { now: 1584137692904 }
   */
  index: (req, res) => {
    res
      .status(200)
      .json({
        now: Date.now()
      })
  }
}
