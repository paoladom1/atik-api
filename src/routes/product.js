import passport from "passport";
import config from "../config/config";
import { allowOnly } from "../services/routesHelper";
import { findById, findAllProducts } from "../controllers/products";

module.exports = app => {
  app.get(
    "/api/products",
    findAllProducts
  );

  app.get(
    "/api/products/:productId",
    findById
  );
};
