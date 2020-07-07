"use strict";

var _passport = require("passport");

var _passport2 = _interopRequireDefault(_passport);

var _config = require("../config/config");

var _config2 = _interopRequireDefault(_config);

var _routesHelper = require("../services/routesHelper");

var _promotions = require("../controllers/promotions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (app) {
    app.post("/api/promotions/create", _passport2.default.authenticate("jwt", { session: false }), (0, _routesHelper.allowOnly)(_config2.default.accessLevels.admin, _promotions.create));

    app.put("/api/promotions/:promotionId", _passport2.default.authenticate("jwt", {
        session: false
    }), (0, _routesHelper.allowOnly)(_config2.default.accessLevels.admin, _promotions.update));

    app.delete("/api/promotions/:promotionId", _passport2.default.authenticate("jwt", {
        session: false
    }), (0, _routesHelper.allowOnly)(_config2.default.accessLevels.admin, _promotions.deletePromotion));

    app.get("/api/promotions", _promotions.findAllPromotions);

    app.get("/api/promotions/:promotionId", _promotions.findById);
};
//# sourceMappingURL=promotion.js.map