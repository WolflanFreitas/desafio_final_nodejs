import {Router} from 'express';

import UsersController from './controllers/UsersController';

const routes = new Router();

routes.post('/users', UsersController.create);

export default routes;