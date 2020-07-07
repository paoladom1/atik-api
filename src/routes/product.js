import passport from "passport";
import config from "../config/config";
import { allowOnly } from "../services/routesHelper";
import { create, update, deleteProduct, findById, findAllProducts } from "../controllers/products";

module.exports = app => {
  app.post(
      "/api/products/create",
      passport.authenticate("jwt", { session: false }),
      allowOnly(config.accessLevels.admin, create)
  );

  app.put(
      "/api/products/:productId",
      passport.authenticate("jwt", {
          session: false,
      }),
      allowOnly(config.accessLevels.admin, update)
  );

  app.delete(
      "/api/products/:productId",
      passport.authenticate("jwt", {
          session: false,
      }),
      allowOnly(config.accessLevels.admin, deleteProduct)
  );

  app.get(
    "/api/products",
    findAllProducts
  );

  app.get(
    "/api/products/:productId",
    findById
  );
};
