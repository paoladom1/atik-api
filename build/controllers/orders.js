'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findById = exports.findAllOrders = exports.deleteOrder = exports.update = exports.create = undefined;

var _models = require('../models');

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Order = _models2.default.orden;
var Product = _models2.default.producto;

var findAllOrders = function findAllOrders(req, res) {
  Order.findAll({
    include: [{ model: Product, as: 'products', nested: true }]
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
    return res.status(200).json({ msg: 'Order has been deleted successfully!' });
  }).catch(function (err) {
    return res.status(500).json({ msg: 'Failed to delete!' });
  });
};

var create = function create(req, res) {
  var _req$body2 = req.body,
      type = _req$body2.type,
      products = _req$body2.products,
      deliveryDate = _req$body2.deliveryDate,
      deliveryTime = _req$body2.deliveryTime,
      shipping = _req$body2.shipping,
      inputDate = _req$body2.inputDate;

  var _calculateOrderPrice = calculateOrderPrice({ products: products }),
      subtotal = _calculateOrderPrice.subtotal,
      total = _calculateOrderPrice.total;

  var newOrder = {
    type: type,
    products: products,
    subtotal: 1000,
    total: shipping + 1000,
    deliveryDate: deliveryDate,
    deliveryTime: deliveryTime,
    shipping: shipping,
    inputDate: inputDate,
    state: 'PROCESO'
  };

  Order.create(newOrder).then(function (order) {
    return res.json({ order: order, test: Order });
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