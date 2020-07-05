export default (sequelize, DataTypes) => {
  const Role = sequelize.define("rol", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: "id_rol"
    },
    role: {
      type: DataTypes.STRING,
      field: "rol"
    }
  });

  return Role;
};
