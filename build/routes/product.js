"use strict";

var _passport = require("passport");

var _passport2 = _interopRequireDefault(_passport);

var _config = require("../config/config");

var _config2 = _interopRequireDefault(_config);

var _routesHelper = require("../services/routesHelper");

var _products = require("../controllers/products");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (app) {
    app.post("/api/products/create", _passport2.default.authenticate("jwt", { session: false }), (0, _routesHelper.allowOnly)(_config2.default.accessLevels.admin, _products.create));

    app.put("/api/products/:productId", _passport2.default.authenticate("jwt", {
        session: false
    }), (0, _routesHelper.allowOnly)(_config2.default.accessLevels.admin, _products.update));

    app.delete("/api/products/:productId", _passport2.default.authenticate("jwt", {
        session: false
    }), (0, _routesHelper.allowOnly)(_config2.default.accessLevels.admin, _products.deleteProduct));

    app.get("/api/products", _products.findAllProducts);

    app.get("/api/products/:productId", _products.findById);
};
//# sourceMappingURL=product.js.map