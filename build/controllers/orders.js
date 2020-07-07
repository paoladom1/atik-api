"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.findById = exports.findAllOrders = exports.deleteOrder = exports.update = exports.create = undefined;

var _models = require("../models");

var _models2 = _interopRequireDefault(_models);

var _orderHelpers = require("../services/orderHelpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Order = _models2.default.orden;
var Product = _models2.default.producto;
var Promotion = _models2.default.promocion;

var findAllOrders = function findAllOrders(req, res) {
    Order.findAll({
        include: [{ model: Product, as: "products", nested: true }]
    }).then(function (orders) {
        return res.json({ orders: orders });
    }).catch(function (err) {
        return res.status(500).json({ err: err });
    });
};

var findById = function findById(req, res) {
    var id = req.params.orderId;

    Order.findOne({
        where: { id: id }
    }).then(function (order) {
        res.json({ order: order });
    }).catch(function (err) {
        return res.status(500).json({ err: err });
    });
};

var update = function update(req, res) {
    var _req$body = req.body,
        type = _req$body.type,
        deliveryDate = _req$body.deliveryDate,
        deliveryTime = _req$body.deliveryTime,
        subtotal = _req$body.subtotal,
        total = _req$body.total,
        inputDate = _req$body.inputDate,
        state = _req$body.state;

    var id = req.params.orderId;

    Order.update({
        type: type,
        deliveryDate: deliveryDate,
        deliveryTime: deliveryTime,
        subtotal: subtotal,
        total: total,
        inputDate: inputDate,
        state: state
    }, { where: { id: id } }).then(function (promotion) {
        return res.status(200).json({ promotion: promotion });
    }).catch(function (err) {
        return res.status(500).json({ err: err });
    });
};

var deleteOrder = function deleteOrder(req, res) {
    var id = req.params.orderId;

    Order.destroy({ where: { id: id } }).then(function () {
        return res.status(200).json({ msg: "Order has been deleted successfully!" });
    }).catch(function (err) {
        return res.status(500).json({ msg: "Failed to delete!" });
    });
};

var create = function create(req, res) {
    var user = req.user;
    var _req$body2 = req.body,
        type = _req$body2.type,
        products = _req$body2.products,
        promotionId = _req$body2.promotionId;

    Promotion.findByPk(promotionId).then(function (promotion) {
        var _calculateOrderPrice = (0, _orderHelpers.calculateOrderPrice)({
            products: products,
            promotion: promotion
        }),
            subtotal = _calculateOrderPrice.subtotal,
            total = _calculateOrderPrice.total;

        console.log(subtotal);

        var newOrder = {
            type: type,
            products: products,
            subtotal: subtotal,
            total: total
        };

        Order.create(newOrder).then(function (order) {
            return res.status(200).json({ order: order });
        }).catch(function (err) {
            return res.status(500).json({ err: err });
        });
    }).catch(function (err) {
        return res.status(500).json({ err: err });
    });
};

exports.create = create;
exports.update = update;
exports.deleteOrder = deleteOrder;
exports.findAllOrders = findAllOrders;
exports.findById = findById;
//# sourceMappingURL=orders.js.map