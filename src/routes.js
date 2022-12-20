import {Router} from 'express';

import UsersController from './controllers/UsersController';
import UsersValidator from './validators/UsersValidator';

import AuthorsController from './controllers/AuthorsController';
import AuthorsValidator from './validators/AuthorsValidator';

import BooksController from './controllers/BooksController';
import BooksValidator from './validators/BooksValidator';

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

//Books routes
routes.get('/books',BooksController.getAll);
routes.get('/books/:id',BooksController.getOne);
routes.post('/books',BooksValidator.create(), BooksController.create);
routes.put('/books/:id',BooksValidator.create(), BooksController.update);
routes.delete('/books/:id', BooksController.delete);

export default routes;