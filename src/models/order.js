export default (sequelize, DataTypes) => {
    const Orden = sequelize.define("orden", {
        type: {
            type: DataTypes.STRING,
            field: "tipo",
        },
        deliveryDate: {
            type: DataTypes.DATE,
            field: "fecha_entrega",
        },
        deliveryTime: {
            type: DataTypes.TIME,
            field: "hora_entrega",
        },
        subtotal: DataTypes.INTEGER,
        total: DataTypes.INTEGER,
        shipping: {
            type: DataTypes.INTEGER,
            field: "envio",
        },
        inputDate: {
            type: DataTypes.DATE,
            field: "fecha_pedido",
        },
        state: {
            type: DataTypes.STRING,
            field: "estado",
        },
    });

    Orden.associate = function (models) {
        // associations go here
        Orden.belongsToMany(models.producto, {
            through: "productoorden",
            as: "products",
        });

        Orden.belongsTo(models.usuario, {
            foreignKey: "cliente",
        });

    };

    return Orden;
};
