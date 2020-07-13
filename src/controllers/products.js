import jwt from 'jsonwebtoken';
import passport from 'passport';

import db from '../models';
const Product = db.producto;
const Category = db.categoria;

// fetch all products
const findAllProducts = (req, res) => {
  Product.findAll({
    include: [{model: Category, as: 'categories', nested: false}],
  })
    .then(products => {
      res.json({products});
    })
    .catch(err => res.status(500).json({err}));
};

const findById = (req, res) => {
  const id = req.params.productId;

  Product.findOne({
    where: {id},
    include: [{model: Category, as: 'categories', nested: false}],
  })
    .then(product => {
      res.json({product});
    })
    .catch(err => res.status(500).json({err}));
};

const create = (req, res) => {
  let {
    name,
    price,
    description,
    flavor,
    size,
    indications,
    imageUrl,
    categories,
  } = req.body;

  const newProduct = {
    name,
    price,
    description,
    flavor,
    size,
    indications,
    imageUrl,
    categories,
  };

  Product.create(newProduct)
    .then(product => {
      product
        .setCategories(categories)
        .then(rs => res.json(rs))
        .catch(err => res.status(500).json({err}));
      res.json(product);
    })
    .catch(err => res.status(500).json({err}));
};

const update = (req, res) => {
  let {
    name,
    price,
    description,
    flavor,
    size,
    indications,
    imageUrl,
    categories,
  } = req.body;
  const id = req.params.productId;

  Product.update(
    {
      name,
      price,
      description,
      flavor,
      size,
      indications,
      imageUrl,
    },
    {where: {id}},
  )
    .then(product => {
      if (categories && categories.length > 0) {
        product
          .setCategories(categories)
          .then(rs => res.json(rs))
          .catch(err => res.status(500).json({err}));
      } else {
        return res.json(product);
      }
    })
    .catch(err => res.status(500).json({err}));
};

const deleteProduct = (req, res) => {
  const id = req.params.productId;

  Product.destroy({where: {id}})
    .then(() =>
      res.status(200).json({msg: 'Product has been deleted successfully!'}),
    )
    .catch(err => res.status(500).json({msg: 'Failed to delete!'}));
};

export {create, update, deleteProduct, findAllProducts, findById};
