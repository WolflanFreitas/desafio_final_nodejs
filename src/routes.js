import {Router} from 'express';

import UsersController from './controllers/UsersController';
import UsersValidator from './validators/UsersValidator';

import AuthorsController from './controllers/AuthorsController';
import AuthorsValidator from './validators/AuthorsValidator';

const routes = new Router();

//Users routes
routes.get('/users',UsersController.getAll);
routes.get('/users/:id',UsersController.getOne);
routes.post('/users',UsersValidator.create(), UsersController.create);
routes.put('/users/:id',UsersValidator.create(), UsersController.update);
routes.delete('/users/:id', UsersController.delete);

//Authors routes
routes.get('/authors',AuthorsController.getAll);
routes.get('/authors/:id',AuthorsController.getOne);
routes.post('/authors',AuthorsValidator.create(), AuthorsController.create);
routes.put('/authors/:id',AuthorsValidator.create(), AuthorsController.update);
routes.delete('/authors/:id', AuthorsController.delete);

export default routes;