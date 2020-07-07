"use strict";

var _passport = require("passport");

var _passport2 = _interopRequireDefault(_passport);

var _config = require("../config/config");

var _config2 = _interopRequireDefault(_config);

var _routesHelper = require("../services/routesHelper");

var _locations = require("../controllers/locations");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (app) {
    app.post("/api/location/create", _passport2.default.authenticate("jwt", { session: false }), (0, _routesHelper.allowOnly)(_config2.default.accessLevels.admin, _locations.create));

    app.get("/api/locations", _locations.findAllLocations);

    app.get("/api/locations/:locationId", _locations.findById);
};
//# sourceMappingURL=location.js.map