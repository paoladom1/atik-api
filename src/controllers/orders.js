import db from "../models";
import { calculateOrderPrice } from "../services/orderHelpers";

const Order = db.orden;
const Product = db.producto;
const Promotion = db.promocion;

const findAllOrders = (req, res) => {
    Order.findAll({
        include: [{ model: Product, as: "products", nested: true }],
    })
        .then((orders) => res.json({ orders }))
        .catch((err) => res.status(500).json({ err }));
};

const findById = (req, res) => {
    const id = req.params.orderId;

    Order.findOne({
        where: { id },
    })
        .then((order) => {
            res.json({ order });
        })
        .catch((err) => res.status(500).json({ err }));
};

const update = (req, res) => {
    let {
        type,
        deliveryDate,
        deliveryTime,
        subtotal,
        total,
        inputDate,
        state,
    } = req.body;
    const id = req.params.orderId;

    Order.update(
        {
            type,
            deliveryDate,
            deliveryTime,
            subtotal,
            total,
            inputDate,
            state,
        },
        { where: { id } }
    )
        .then((promotion) => res.status(200).json({ promotion }))
        .catch((err) => res.status(500).json({ err }));
};

const deleteOrder = (req, res) => {
    const id = req.params.orderId;

    Order.destroy({ where: { id } })
        .then(() =>
            res
                .status(200)
                .json({ msg: "Order has been deleted successfully!" })
        )
        .catch((err) => res.status(500).json({ msg: "Failed to delete!" }));
};

const create = (req, res) => {
    const { user } = req;
    const { type, products, deliveryDate, deliveryTime, shipping, inputDate, state, subtotal, total } = req.body;
    

    const newOrder = {
        type,
        products,
        subtotal,
        total,
        deliveryDate,
        deliveryTime,
        shipping,
        inputDate,
        state,
    };

    Order.create(newOrder)
        .then((order) => res.status(200).json({ order }))
        .catch((err) => res.status(500).json({ err }));
};

export { create, update, deleteOrder, findAllOrders, findById };
