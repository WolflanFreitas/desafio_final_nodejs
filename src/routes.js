import {Router} from 'express';

import UsersController from './controllers/UsersController';
import UsersValidator from './validators/UsersValidator';

const routes = new Router();

routes.post('/users',UsersValidator.create(), UsersController.create);

export default routes;