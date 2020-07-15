'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findCategoryProductsById = exports.findById = exports.findAllCategories = exports.create = exports.update = exports.updateAll = undefined;

var _models = require('../models');

var _models2 = _interopRequireDefault(_models);

var _category = require('../models/category');

var _category2 = _interopRequireDefault(_category);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Product = _models2.default.producto;
var Category = _models2.default.categoria;

var findAllCategories = function findAllCategories(req, res) {
  Category.findAll({
    include: [{ model: Product, as: 'products', nested: false }]
  }).then(function (categories) {
    res.json(categories);
  }).catch(function (err) {
    return res.status(500).json({ err: err });
  });
};

var findById = function findById(req, res) {
  var id = req.params.categoryId;

  Category.findOne({
    where: { id: id },
    include: [{ model: Product, as: 'products', nested: false }]
  }).then(function (category) {
    res.json({ category: category });
  }).catch(function (err) {
    return res.status(500).json({ err: err });
  });
};

var findCategoryProductsById = function findCategoryProductsById(req, res) {
  var id = req.params.categoryId;

  Category.findOne({
    where: { id: id },
    include: [{ model: Product, as: 'products', nested: false }]
  }).then(function (category) {
    var products = category.products;

    res.json({ products: products });
  }).catch(function (err) {
    return res.status(500).json({ err: err });
  });
};

var create = function create(req, res) {
  var _req$body = req.body,
      name = _req$body.name,
      imageUrl = _req$body.imageUrl;


  var newCategory = {
    name: name,
    imageUrl: imageUrl
  };

  Category.create(newCategory).then(function (category) {
    return res.json(category);
  }).catch(function (err) {
    return res.status(500).json({ err: err });
  });
};

var update = function update(req, res) {
  var _req$body2 = req.body,
      name = _req$body2.name,
      imageUrl = _req$body2.imageUrl;


  var id = req.params.categoryId;

  Category.update({
    name: name,
    imageUrl: imageUrl
  }, { where: { id: id } }).then(function (category) {
    return res.json(category);
  }).catch(function (err) {
    return res.status(500).json({ err: err });
  });
};

var updateAll = function updateAll(req, res) {
  var imageUrl = req.body.imageUrl;


  Category.update({
    imageUrl: imageUrl
  }, {
    where: { imageUrl: null }
  }).then(function (categories) {
    return res.json(categories);
  }).catch(function (err) {
    return res.status(500).json({ err: err });
  });
};

exports.updateAll = updateAll;
exports.update = update;
exports.create = create;
exports.findAllCategories = findAllCategories;
exports.findById = findById;
exports.findCategoryProductsById = findCategoryProductsById;
//# sourceMappingURL=categories.js.map