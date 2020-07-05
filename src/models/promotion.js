export default (sequelize, DataTypes) => {
  const Promotion = sequelize.define("promocion", {
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
    discount: {
      type: DataTypes.INTEGER,
      field: "descuento"
    }
  });

  Promotion.associate = function(models) {
    // associations go here
  };

  return Promotion;
};
