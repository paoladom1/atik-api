import passport from "passport";
import config from "../config/config";
import { allowOnly } from "../services/routesHelper";
import { create, update, deletePromotion, findById, findAllPromotions } from "../controllers/promotions";

module.exports = (app) => {
    app.post(
        "/api/promotions/create",
        passport.authenticate("jwt", { session: false }),
        allowOnly(config.accessLevels.admin, create)
    );

    app.put(
        "/api/promotions/:promotionId",
        passport.authenticate("jwt", {
            session: false,
        }),
        allowOnly(config.accessLevels.admin, update)
    );

    app.delete(
        "/api/promotions/:promotionId",
        passport.authenticate("jwt", {
            session: false,
        }),
        allowOnly(config.accessLevels.admin, deletePromotion)
    );

    app.get("/api/promotions", findAllPromotions);

    app.get("/api/promotions/:promotionId", findById);
};
