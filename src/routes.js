import {Router} from 'express';

import UsersController from './controllers/UsersController';
import UsersValidator from './validators/UsersValidator';

const routes = new Router();

//Users routes
routes.get('/users',UsersController.getAll);
routes.get('/users/:id',UsersController.getOne);
routes.post('/users',UsersValidator.create(), UsersController.create);
routes.put('/users/:id',UsersValidator.create(), UsersController.update);
routes.delete('/users/:id', UsersController.delete);

export default routes;