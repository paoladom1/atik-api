import passport from "passport";
import config from "../config/config";
import { allowOnly } from "../services/routesHelper";
import {
    create,
    update,
    deleteOrder,
    findById,
    findAllOrders,
} from "../controllers/orders";

module.exports = (app) => {
    app.post(
        "/api/orders/create",
        passport.authenticate("jwt", { session: false }),
        allowOnly(config.accessLevels.client, create)
    );

    app.put(
        "/api/orders/:orderId",
        passport.authenticate("jwt", {
            session: false,
        }),
        allowOnly(config.accessLevels.client, update)
    );

    app.delete(
        "/api/orders/:orderId",
        passport.authenticate("jwt", {
            session: false,
        }),
        allowOnly(config.accessLevels.admin, deleteOrder)
    );

    app.get(
        "/api/orders",
        passport.authenticate("jwt", { session: false }),
        findAllOrders
    );

    app.get("/api/orders/:orderId", findById);
};
