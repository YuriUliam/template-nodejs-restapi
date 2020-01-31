import 'dotenv/config';

const { NODE_ENV = 'development' } = process.env;

const dev = require('./config');
const prod = require('./config.prod');
const test = require('./config.test');

class Enviroment {
  constructor() {
    this.env = '';

    this.getEnv();
  }

  getEnv() {
    switch (NODE_ENV) {
      case 'production':
        this.env = prod;
        break;
      case 'test':
        this.env = test;
        break;
      default:
        this.env = dev;
        break;
    }
  }
}

module.exports = new Enviroment().env;
