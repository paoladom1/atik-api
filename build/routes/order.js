"use strict";

var _passport = require("passport");

var _passport2 = _interopRequireDefault(_passport);

var _config = require("../config/config");

var _config2 = _interopRequireDefault(_config);

var _routesHelper = require("../services/routesHelper");

var _orders = require("../controllers/orders");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (app) {
    app.post("/api/orders/create", _passport2.default.authenticate("jwt", { session: false }), (0, _routesHelper.allowOnly)(_config2.default.accessLevels.client, _orders.create));

    app.put("/api/orders/:orderId", _passport2.default.authenticate("jwt", {
        session: false
    }), (0, _routesHelper.allowOnly)(_config2.default.accessLevels.client, _orders.update));

    app.delete("/api/orders/:orderId", _passport2.default.authenticate("jwt", {
        session: false
    }), (0, _routesHelper.allowOnly)(_config2.default.accessLevels.admin, _orders.deleteOrder));

    app.get("/api/orders", _passport2.default.authenticate("jwt", { session: false }), _orders.findAllOrders);

    app.get("/api/orders/:orderId", _orders.findById);
};
//# sourceMappingURL=order.js.map