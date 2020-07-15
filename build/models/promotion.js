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
        },
        description: {
            type: DataTypes.STRING,
            field: "descripcion"
        }
    });

    return Promotion;
};
//# sourceMappingURL=promotion.js.map