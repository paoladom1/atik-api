export default (sequelize, DataTypes) => {
  const Product = sequelize.define("producto", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: "id_producto"
    },
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
      through: "productoxcategoria",
      as: "categories",
      foreignKey: "id_producto",
      otherKey: "id_categoria"
    });

    Product.belongsToMany(models.categoria, {
      through: "productoxorden",
      as: "ordenes",
      foreignKey: "id_producto",
      otherKey: "id_orden"
    });
  };

  return Product;
};
