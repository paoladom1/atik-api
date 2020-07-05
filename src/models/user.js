export default (sequelize, DataTypes) => {
  const User = sequelize.define("usuario", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: "id_usuario"
    },
    username: {
      type: DataTypes.STRING,
      field: "nombre_usuario"
    },
    firstName: {
      type: DataTypes.STRING,
      field: "nombre"
    },
    lastName: {
      type: DataTypes.STRING,
      field: "apellido"
    },
    phone: {
      type: DataTypes.STRING,
      field: "telefono"
    },
    email: {
      type: DataTypes.STRING,
      field: "correo"
    },
    password: {
      type: DataTypes.STRING,
      field: "contrasenia"
    },
    role: {
      type: DataTypes.INTEGER,
      field: "id_rol"
    }
  });

  User.associate = function(models) {
    // associations go here
  };

  return User;
};
