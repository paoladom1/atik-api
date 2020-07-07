export default (sequelize, DataTypes) => {
    const Role = sequelize.define("rol", {
        role: {
            type: DataTypes.STRING,
            field: "rol",
        },
    });

    Role.associate = function (models) {
        Role.hasMany(models.usuario, {
            foreignKey: "role",
        });
    };

    return Role;
};
