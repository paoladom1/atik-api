export default (sequelize, DataTypes) => {
  const ProductCategory = sequelize.define("productoxcategoria", {
    productId: {
      type: DataTypes.INTEGER,
      field: "id_producto"
    },
    categoryId: {
      type: DataTypes.INTEGER,
      field: "id_categoria"
    }
  });

  ProductCategory.associate = function(models) {
    // associations go here
  };

  return ProductCategory;
};
