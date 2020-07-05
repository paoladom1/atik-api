export default (sequelize, DataTypes) => {
  const ProductOrder = sequelize.define("productoxorden", {
    productId: {
      type: DataTypes.INTEGER,
      field: "id_producto"
    },
    orderId: {
      type: DataTypes.INTEGER,
      field: "id_orden"
    },
    quantity: {
      type: DataTypes.INTEGER,
      field: "cantidad"
    }
  });

  ProductOrder.associate = function(models) {
    // associations go here
  };

  return ProductOrder;
};
