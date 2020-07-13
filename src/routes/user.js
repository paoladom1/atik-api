import passport from 'passport';
import config from '../config/config';
import {allowOnly} from '../services/routesHelper';
import {
  create,
  login,
  me,
  findAllUsers,
  findById,
  update,
  deleteUser,
} from '../controllers/user';

module.exports = app => {
  // create a new user
  app.post(
    '/api/users/create',
    passport.authenticate('jwt', {session: false}),
    allowOnly(config.accessLevels.admin, create),
  );

  // user login
  app.post('/api/users/login', login);

  // get current user
  app.get('/api/me', passport.authenticate('jwt', {session: false}), me);

  //retrieve all users
  app.get(
    '/api/users',
    passport.authenticate('jwt', {
      session: false,
    }),
    allowOnly(config.accessLevels.admin, findAllUsers),
  );

  // retrieve user by id
  app.get(
    '/api/users/:userId',
    passport.authenticate('jwt', {
      session: false,
    }),
    allowOnly(config.accessLevels.client, findById),
  );

  // update a user with id
  app.put(
    '/api/users/:userId',
    passport.authenticate('jwt', {
      session: false,
    }),
    allowOnly(config.accessLevels.client, update),
  );

  // delete a user
  app.delete(
    '/api/users/:userId',
    passport.authenticate('jwt', {
      session: false,
    }),
    allowOnly(config.accessLevels.admin, deleteUser),
  );
};
