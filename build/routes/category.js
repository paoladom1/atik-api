'use strict';

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _config = require('../config/config');

var _config2 = _interopRequireDefault(_config);

var _routesHelper = require('../services/routesHelper');

var _categories = require('../controllers/categories');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (app) {
  app.post('/api/category/create', _passport2.default.authenticate('jwt', { session: false }), (0, _routesHelper.allowOnly)(_config2.default.accessLevels.admin, _categories.create));

  app.put('/api/categories/:categoryId/', _passport2.default.authenticate('jwt', { session: false }), (0, _routesHelper.allowOnly)(_config2.default.accessLevels.admin, _categories.update));

  app.put('/api/categories/', _passport2.default.authenticate('jwt', { session: false }), (0, _routesHelper.allowOnly)(_config2.default.accessLevels.admin, _categories.updateAll));

  app.get('/api/categories', _categories.findAllCategories);

  app.get('/api/categories/:categoryId', _categories.findById);

  app.get('/api/categories/:categoryId/products', _categories.findCategoryProductsById);
};
//# sourceMappingURL=category.js.map