"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (sequelize, DataTypes) {
  var Location = sequelize.define("ubicacion", {
    name: {
      type: DataTypes.STRING,
      field: "nombre"
    },
    address: {
      type: DataTypes.STRING,
      field: "direccion"
    }
  });

  Location.associate = function (models) {
    // associations go here
    Location.hasMany(models.orden, {
      foreignKey: 'id_ubicacion',
      as: 'orders'
    });
  };

  return Location;
};
//# sourceMappingURL=locations.js.map