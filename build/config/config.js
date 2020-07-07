"use strict";

var config = module.exports;

var userRoles = config.userRoles = {
    admin: 1,
    client: 2
};

config.accessLevels = {
    admin: userRoles.admin | userRoles.client,
    client: userRoles.client
};
//# sourceMappingURL=config.js.map