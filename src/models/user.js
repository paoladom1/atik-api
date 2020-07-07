export default (sequelize, DataTypes) => {
    const User = sequelize.define("usuario", {
        username: {
            type: DataTypes.STRING,
            field: "nombre_usuario",
        },
        firstName: {
            type: DataTypes.STRING,
            field: "nombre",
        },
        lastName: {
            type: DataTypes.STRING,
            field: "apellido",
        },
        phone: {
            type: DataTypes.STRING,
            field: "telefono",
        },
        email: {
            type: DataTypes.STRING,
            field: "correo",
        },
        password: {
            type: DataTypes.STRING,
            field: "contrasenia",
        },
    });

    User.associate = function (models) {
        // associations go here
        User.belongsTo(models.rol, { foreignKey: "role" });

        User.hasMany(models.orden, { foreignKey: "cliente"});
    };

    return User;
};
