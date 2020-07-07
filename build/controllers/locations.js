"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.findById = exports.findAllLocations = exports.create = undefined;

var _models = require("../models");

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Locations = _models2.default.ubicacion;

var findAllLocations = function findAllLocations(req, res) {
    Locations.findAll().then(function (locations) {
        res.json({ locations: locations });
    }).catch(function (err) {
        return res.status(500).json({ err: err });
    });
};

var findById = function findById(req, res) {
    var id = req.params.locationId;

    Locations.findOne({
        where: { id: id }
    }).then(function (location) {
        res.json({ location: location });
    }).catch(function (err) {
        return res.status(500).json({ err: err });
    });
};

var create = function create(req, res) {
    var _req$body = req.body,
        name = _req$body.name,
        address = _req$body.address;


    var newLocation = {
        name: name,
        address: address
    };

    Locations.create(newLocation).then(function (location) {
        return res.json(location);
    }).catch(function (err) {
        return res.status(500).json({ err: err });
    });
};

exports.create = create;
exports.findAllLocations = findAllLocations;
exports.findById = findById;
//# sourceMappingURL=locations.js.map