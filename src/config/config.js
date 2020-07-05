var config = module.exports;

const userRoles = (config.userRoles = {
    admin: 1,
    client: 2
});

config.accessLevels = {
    admin: userRoles.admin | userRoles.client,
    client: userRoles.client,
};
