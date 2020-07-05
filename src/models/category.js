export default (sequelize, DataTypes) => {
  const Category = sequelize.define("categoria", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: "id_categoria"
    },
    name: {
      type: DataTypes.STRING,
      field: 'nombre'
    },
    description: {
      type: DataTypes.STRING,
      field: 'descripcion'
    }
  });
    
  Category.associate = function(models) {
    // associations go here
    Category.belongsToMany(models.producto, {
      through: 'productoxcategoria',
      as: 'products',
      foreignKey: 'id_categoria',
      otherKey: 'id_producto'
    })
  };

  return Category;
};
