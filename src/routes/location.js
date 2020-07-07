import passport from "passport";
import config from "../config/config";
import { allowOnly } from "../services/routesHelper";
import { create, findById, findAllLocations } from "../controllers/locations";

module.exports = (app) => {
    app.post(
        "/api/location/create",
        passport.authenticate("jwt", { session: false }),
        allowOnly(config.accessLevels.admin, create)
    );

    app.get("/api/locations", findAllLocations);

    app.get("/api/locations/:locationId", findById);
};
