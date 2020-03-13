import { Router } from 'express';

import apiController from './app/controllers/api.controller'

const routes = Router();

routes.get('/', apiController.index);

export default routes;
