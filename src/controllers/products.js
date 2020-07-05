import jwt from "jsonwebtoken";
import passport from "passport";

import db from "../models";
const Product = db.producto;
const Category = db.categoria;

// fetch all products
const findAllProducts = (req, res) => {
  Product.findAll({
    include: [{ model: Category, as: "categories", nested: false }]
  })
    .then(products => {
      res.json({ products });
    })
    .catch(err => res.status(500).json({ err }));
};

const findById = (req, res) => {
  const id = req.params.productId;

  Product.findOne({
    where: { id },
    include: [{ model: Category, as: "categories", nested: false }]
  })
    .then(product => {
      res.json({ product });
    })
    .catch(err => res.status(500).json({ err }));
};

export { findAllProducts, findById };
