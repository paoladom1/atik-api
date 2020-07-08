import db from "../models";
import category from "../models/category";
const Product = db.producto;
const Category = db.categoria;

const findAllCategories = (req, res) => {
    Category.findAll({
        include: [{ model: Product, as: "products", nested: false }],
    })
        .then((categories) => {
            res.json(categories);
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
    let { name, imageUrl } = req.body;

    const newCategory = {
        name,
        imageUrl,
    };

    Category.create(newCategory)
        .then((category) => res.json(category))
        .catch((err) => res.status(500).json({ err }));
};

const update = (req, res) => {
    const { imageUrl } = req.body;

    const id = req.params.categoryId;

    Category.update(
        {
            imageUrl,
        },
        { where: { id } }
    )
        .then((category) => res.json(category))
        .catch((err) => res.status(500).json({ err }));
};

const updateAll = (req, res) => {
    const { imageUrl } = req.body;

    Category.update(
        {
            imageUrl,
        },
        {
            where: { imageUrl: null },
        }
    )
        .then((categories) => res.json(categories))
        .catch((err) => res.status(500).json({ err }));
};

export { updateAll, update, create, findAllCategories, findById };
