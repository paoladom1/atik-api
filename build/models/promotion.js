"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (sequelize, DataTypes) {
    var Promotion = sequelize.define("promocion", {
        name: {
            type: DataTypes.STRING,
            field: "nombre"
        },
        discount: {
            type: DataTypes.INTEGER,
            field: "descuento"
        }
    });

    Promotion.associate = function (models) {
        // associations go here
        Promotion.hasMany(models.orden, {
            as: "orders",
            foreignKey: "promotion_id"
        });
    };

    return Promotion;
};
//# sourceMappingURL=promotion.js.map