export default (sequelize, DataTypes) => {
  const Location = sequelize.define("ubicacion", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: "id_promocion"
    },
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
  };

  return Location;
};
