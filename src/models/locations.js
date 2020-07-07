export default (sequelize, DataTypes) => {
  const Location = sequelize.define("ubicacion", {
    name: {
      type: DataTypes.STRING,
      field: "nombre"
    },
    address: {
      type: DataTypes.STRING,
      field: "direccion"
    }
  });

  Location.associate = function(models) {
    // associations go here
    Location.hasMany(models.orden, {
      foreignKey: 'id_ubicacion',
      as: 'orders'
    });
  };

  return Location;
};
