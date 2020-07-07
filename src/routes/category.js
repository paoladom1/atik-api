import passport from "passport";
import config from "../config/config";
import { allowOnly } from "../services/routesHelper";
import { create, findById, findAllCategories } from "../controllers/categories";

module.exports = (app) => {
    app.post(
        "/api/category/create",
        passport.authenticate("jwt", { session: false }),
        allowOnly(config.accessLevels.admin, create)
    );

    app.get("/api/categories", findAllCategories);

    app.get("/api/categories/:categoryId", findById);
};
