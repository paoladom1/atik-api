export default (sequelize, DataTypes) => {
    const Promotion = sequelize.define("promocion", {
        name: {
            type: DataTypes.STRING,
            field: "nombre",
        },
        discount: {
            type: DataTypes.INTEGER,
            field: "descuento",
        },
        description: {
            type: DataTypes.STRING,
            field: "descripcion"
        }
    });

    return Promotion;
};
