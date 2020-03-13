import { Sequelize } from 'sequelize'

import database from '../config';

class Database {
  constructor() {
    this.models = [];

    this.init();
  }

  init() {
    this.connection = new Sequelize(database);

    this.models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
