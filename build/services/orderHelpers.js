"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var calculateOrderPrice = exports.calculateOrderPrice = function calculateOrderPrice(_ref) {
    var products = _ref.products,
        promotion = _ref.promotion;
    var discount = promotion.discount;


    var subtotal = products.reduce(function (accumulator, product) {
        return accumulator + product.price;
    }, 0);

    var total = promotion ? subtotal * (discount / 100) : subtotal;

    return { subtotal: subtotal, total: total };
};
//# sourceMappingURL=orderHelpers.js.map