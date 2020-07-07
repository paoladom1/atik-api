"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.findById = exports.findAllPromotions = exports.deletePromotion = exports.update = exports.create = undefined;

var _models = require("../models");

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Promotions = _models2.default.promocion;

var create = function create(req, res) {
    var _req$body = req.body,
        name = _req$body.name,
        discount = _req$body.discount;


    var newPromotion = {
        name: name,
        discount: discount
    };

    Promotions.create(newPromotion).then(function (promotion) {
        return res.json(promotion);
    }).catch(function (err) {
        return res.status(500).json({ err: err });
    });
};

var update = function update(req, res) {
    var _req$body2 = req.body,
        name = _req$body2.name,
        discount = _req$body2.discount;

    var id = req.params.promotionId;

    Promotions.update({
        name: name,
        discount: discount
    }, { where: { id: id } }).then(function (promotion) {
        return res.status(200).json({ promotion: promotion });
    }).catch(function (err) {
        return res.status(500).json({ err: err });
    });
};

var deletePromotion = function deletePromotion(req, res) {
    var id = req.params.promotionId;

    Promotions.destroy({ where: { id: id } }).then(function () {
        return res.status.json({ msg: "Promotion has been deleted successfully!" });
    }).catch(function (err) {
        return res.status(500).json({ msg: "Failed to delete!" });
    });
};

var findAllPromotions = function findAllPromotions(req, res) {
    Promotions.findAll().then(function (promotions) {
        res.json({ promotions: promotions });
    }).catch(function (err) {
        return res.status(500).json({ err: err });
    });
};

var findById = function findById(req, res) {
    var id = req.params.promotionId;

    Promotions.findOne({
        where: { id: id }
    }).then(function (promotion) {
        res.json({ promotion: promotion });
    }).catch(function (err) {
        return res.status(500).json({ err: err });
    });
};

exports.create = create;
exports.update = update;
exports.deletePromotion = deletePromotion;
exports.findAllPromotions = findAllPromotions;
exports.findById = findById;
//# sourceMappingURL=promotions.js.map