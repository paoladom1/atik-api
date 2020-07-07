"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (sequelize, DataTypes) {
    var Role = sequelize.define("rol", {
        role: {
            type: DataTypes.STRING,
            field: "rol"
        }
    });

    Role.associate = function (models) {
        Role.hasMany(models.usuario, {
            foreignKey: "role"
        });
    };

    return Role;
};
//# sourceMappingURL=role.js.map