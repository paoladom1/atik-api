"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.findById = exports.findAllCategories = exports.create = undefined;

var _models = require("../models");

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Product = _models2.default.producto;
var Category = _models2.default.categoria;

var findAllCategories = function findAllCategories(req, res) {
    Category.findAll({
        include: [{ model: Product, as: "products", nested: false }]
    }).then(function (categories) {
        res.json({ categories: categories });
    }).catch(function (err) {
        return res.status(500).json({ err: err });
    });
};

var findById = function findById(req, res) {
    var id = req.params.categoryId;

    Category.findOne({
        where: { id: id },
        include: [{ model: Product, as: "products", nested: false }]
    }).then(function (category) {
        res.json({ category: category });
    }).catch(function (err) {
        return res.status(500).json({ err: err });
    });
};

var create = function create(req, res) {
    var _req$body = req.body,
        name = _req$body.name,
        description = _req$body.description;


    var newCategory = {
        name: name,
        description: description
    };

    Category.create(newCategory).then(function (category) {
        return res.json(category);
    }).catch(function (err) {
        return res.status(500).json({ err: err });
    });
};

exports.create = create;
exports.findAllCategories = findAllCategories;
exports.findById = findById;
//# sourceMappingURL=categories.js.map