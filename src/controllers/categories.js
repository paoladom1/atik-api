import db from "../models";
const Product = db.producto;
const Category = db.categoria;

const findAllCategories = (req, res) => {
    Category.findAll({
        include: [{ model: Product, as: "products", nested: false }],
    })
        .then((categories) => {
            res.json({ categories });
        })
        .catch((err) => res.status(500).json({ err }));
};

const findById = (req, res) => {
    const id = req.params.categoryId;

    Category.findOne({
        where: { id },
        include: [{ model: Product, as: "products", nested: false }],
    })
        .then((category) => {
            res.json({ category });
        })
        .catch((err) => res.status(500).json({ err }));
};

const create = (req, res) => {
    let { name, description } = req.body;

    const newCategory = {
        name,
        description,
    };

    Category.create(newCategory)
        .then((category) => res.json(category))
        .catch((err) => res.status(500).json({ err }));
};

export { create, findAllCategories, findById };
