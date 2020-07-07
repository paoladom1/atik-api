"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.findById = exports.findAllProducts = exports.deleteProduct = exports.update = exports.create = undefined;

var _jsonwebtoken = require("jsonwebtoken");

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _passport = require("passport");

var _passport2 = _interopRequireDefault(_passport);

var _models = require("../models");

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Product = _models2.default.producto;
var Category = _models2.default.categoria;

// fetch all products
var findAllProducts = function findAllProducts(req, res) {
    Product.findAll({
        include: [{ model: Category, as: "categories", nested: false }]
    }).then(function (products) {
        res.json({ products: products });
    }).catch(function (err) {
        return res.status(500).json({ err: err });
    });
};

var findById = function findById(req, res) {
    var id = req.params.productId;

    Product.findOne({
        where: { id: id },
        include: [{ model: Category, as: "categories", nested: false }]
    }).then(function (product) {
        res.json({ product: product });
    }).catch(function (err) {
        return res.status(500).json({ err: err });
    });
};

var create = function create(req, res) {
    var _req$body = req.body,
        name = _req$body.name,
        price = _req$body.price,
        description = _req$body.description,
        flavor = _req$body.flavor,
        size = _req$body.size,
        indications = _req$body.indications,
        imageUrl = _req$body.imageUrl,
        categories = _req$body.categories;


    var newProduct = {
        name: name,
        price: price,
        description: description,
        flavor: flavor,
        size: size,
        indications: indications,
        imageUrl: imageUrl,
        categories: categories
    };

    Product.create(newProduct).then(function (product) {
        product.setCategories(categories).then(function (rs) {
            return res.json(rs);
        }).catch(function (err) {
            return res.status(500).json({ err: err });
        });
        res.json(product);
    }).catch(function (err) {
        return res.status(500).json({ err: err });
    });
};

var update = function update(req, res) {
    var _req$body2 = req.body,
        name = _req$body2.name,
        price = _req$body2.price,
        description = _req$body2.description,
        flavor = _req$body2.flavor,
        size = _req$body2.size,
        indications = _req$body2.indications,
        imageUrl = _req$body2.imageUrl,
        categories = _req$body2.categories;

    var id = req.params.productId;

    Product.update({
        name: name,
        price: price,
        description: description,
        flavor: flavor,
        size: size,
        indications: indications,
        imageUrl: imageUrl
    }, { where: { id: id } }).then(function (product) {
        if (categories && categories.length > 0) {
            product.setCategories(categories).then(function (rs) {
                return res.json(rs);
            }).catch(function (err) {
                return res.status(500).json({ err: err });
            });
        } else {
            return res.json(product);
        }
    }).catch(function (err) {
        return res.status(500).json({ err: err });
    });
};

var deleteProduct = function deleteProduct(req, res) {
    var id = req.params.productId;

    Product.destroy({ where: { id: id } }).then(function () {
        return res.status(200).json({ msg: "Product has been deleted successfully!" });
    }).catch(function (err) {
        return res.status(500).json({ msg: "Failed to delete!" });
    });
};

exports.create = create;
exports.update = update;
exports.deleteProduct = deleteProduct;
exports.findAllProducts = findAllProducts;
exports.findById = findById;
//# sourceMappingURL=products.js.map