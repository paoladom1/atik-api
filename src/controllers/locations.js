import db from "../models";
const Locations = db.ubicacion;

const findAllLocations = (req, res) => {
    Locations.findAll()
        .then((locations) => {
            res.json({ locations });
        })
        .catch((err) => res.status(500).json({ err }));
};

const findById = (req, res) => {
    const id = req.params.locationId;

    Locations.findOne({
        where: { id }
    })
        .then((location) => {
            res.json({ location });
        })
        .catch((err) => res.status(500).json({ err }));
};

const create = (req, res) => {
    let { name, address } = req.body;

    const newLocation = {
        name,
        address,
    };

    Locations.create(newLocation)
        .then((location) => res.json(location))
        .catch((err) => res.status(500).json({ err }));
};

export { create, findAllLocations, findById };
