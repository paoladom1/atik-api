export default (sequelize, DataTypes) => {
  const Product = sequelize.define("producto", {
    name: {
      type: DataTypes.STRING,
      field: "nombre"
    },
    price: {
      type: DataTypes.INTEGER,
      field: "precio"
    },
    description: {
      type: DataTypes.STRING,
      field: "descripcion"
    },
    flavor: {
      type: DataTypes.STRING,
      field: "sabor"
    },
    size: {
      type: DataTypes.INTEGER,
      field: "tamanio"
    },
    indications: {
      type: DataTypes.STRING,
      field: "indicaciones"
    },
    imageUrl: {
      type: DataTypes.STRING,
      field: "imagen"
    }
  });

  Product.associate = function(models) {
    // associations go here
    Product.belongsToMany(models.categoria, {
      through: 'productocategoria',
      as: 'categories'
    });

    Product.belongsToMany(models.orden, {
      through: 'productoorden',
      as: "orders",
    });
  };

  return Product;
};
