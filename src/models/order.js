export default (sequelize, DataTypes) => {
  const Orden = sequelize.define("orden", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: "id_orden"
    },
    type: {
      type: DataTypes.STRING,
      field: "tipo"
    },
    deliveryDate: {
      type: DataTypes.DATE,
      field: "fecha_entrega"
    },
    deliveryTime: {
      type: DataTypes.TIME,
      field: "hora_entrega"
    },
    subtotal: DataTypes.INTEGER,
    total: DataTypes.INTEGER,
    inputDate: {
      type: DataTypes.DATE,
      field: "fecha_pedido"
    },
    state: {
      type: DataTypes.STRING,
      field: "estado"
    }
  });

  Orden.associate = function(models) {
    // associations go here
    Orden.belongsTo(models.producto, {
      through: "productoxorden",
      as: "productos",
      foreignKey: "id_orden",
      otherKey: "id_producto"
    });
  };

  return Orden;
};
