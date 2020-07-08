import passport from "passport";
import config from "../config/config";
import { allowOnly } from "../services/routesHelper";
import {
    update,
    updateAll,
    create,
    findById,
    findAllCategories,
} from "../controllers/categories";

module.exports = (app) => {
    app.post(
        "/api/category/create",
        passport.authenticate("jwt", { session: false }),
        allowOnly(config.accessLevels.admin, create)
    );

    app.put(
        "/api/categories/:categoryId/",
        passport.authenticate("jwt", { session: false }),
        allowOnly(config.accessLevels.admin, update)
    );

    app.put(
        "/api/categories/",
        passport.authenticate("jwt", { session: false }),
        allowOnly(config.accessLevels.admin, updateAll)
    );

    app.get("/api/categories", findAllCategories);

    app.get("/api/categories/:categoryId", findById);
};
