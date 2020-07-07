import db from "../models";
const Promotions = db.promocion;

const create = (req, res) => {
    let { name, discount } = req.body;

    const newPromotion = {
        name,
        discount,
    };

    Promotions.create(newPromotion)
        .then((promotion) => res.json(promotion))
        .catch((err) => res.status(500).json({ err }));
};

const update = (req, res) => {
    let { name, discount } = req.body;
    const id = req.params.promotionId;

    Promotions.update(
        {
            name,
            discount,
        },
        { where: { id } }
    )
        .then((promotion) => res.status(200).json({ promotion }))
        .catch((err) => res.status(500).json({ err }));
};

const deletePromotion = (req, res) => {
    const id = req.params.promotionId;

    Promotions.destroy({ where: { id } })
        .then(() =>
            res.status.json({ msg: "Promotion has been deleted successfully!" })
        )
        .catch((err) => res.status(500).json({ msg: "Failed to delete!" }));
};

const findAllPromotions = (req, res) => {
    Promotions.findAll()
        .then((promotions) => {
            res.json({ promotions });
        })
        .catch((err) => res.status(500).json({ err }));
};

const findById = (req, res) => {
    const id = req.params.promotionId;

    Promotions.findOne({
        where: { id },
    })
        .then((promotion) => {
            res.json({ promotion });
        })
        .catch((err) => res.status(500).json({ err }));
};

export { create, update, deletePromotion, findAllPromotions, findById };
