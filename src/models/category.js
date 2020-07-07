export default (sequelize, DataTypes) => {
  const Category = sequelize.define("categoria", {
    name: {
      type: DataTypes.STRING,
      field: 'nombre'
    },
    description: {
      type: DataTypes.STRING,
      field: 'descripcion'
    },
    imageUrl: {
      type: DataTypes.STRING,
      field: "imagen"
    }
  });
    
  Category.associate = function(models) {
    // associations go here
    Category.belongsToMany(models.producto, {
      through: 'productocategoria',
      as: 'products',
    })
  };

  return Category;
};
