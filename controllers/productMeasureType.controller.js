const Sequelize = require('sequelize');
const ProductMeasureType = require('../models/prodMeasureType.model');
const config = require('../config');
const { insertingData } = require('../utils/helperFunc')
const { isAr } = require('../utils/verify')
// const { getProductMeasureTypeSchema } = require('../utils/schema/schemas');
const Serializer = require('sequelize-to-json');

exports.add = (req, res) => {
    const { isAdmin, userId } = getUserDetails(req.user)
    const _b = req.body;
    let payload = {
        type: _b.type,
        typeAr: _b.typeAr,
        product_id: _b.product_id
    }

    ProductMeasureType.create(payload)
        .then(r => {
            res.status(200).json({ status: true, result: r });
        })
        .catch(err => {
            console.error(err);
            res.status(400).json({
                status: false,
                error: err
            });
        });
};

exports.update = (req, res) => {
    const _b = req.body;
    const { isAdmin, userId } = getUserDetails(req.user)

    if (!_b.typeID) {
        res.status(400).json({ status: false, message: "typeID does not exists" });
        return
    }

    let payload = insertingData(_b, _b.typeID);

    ProductMeasureType.update(payload,
        {
            where: {
                typeID: _b.typeID
            }
        }
    )
        .then(c => {
            if (!c) throw new Error('No MeasurementTypes found!');
            res.status(200).json({ status: true, category: c });
        })
        .catch(err => {
            console.error(err);
            res.status(400).json({ status: false });
        });
};


exports.delete = (req, res) => {
    const _b = req.body;
    const { isAdmin, userId } = getUserDetails(req.user)

    if (!_b.typeID) {
        res.status(400).json({ status: false, message: "typeID does not exists" });
        return
    }


    ProductMeasureType.destroy(
        {
            where: {
                typeID: _b.typeID
            }
        }
    )
        .then(c => {
            if (!c) throw new Error('No ProductMeasurementType found!');
            res.status(200).json({ status: true, category: c });
        })
        .catch(err => {
            console.error(err);
            res.status(400).json({ status: false });
        });
};

exports.getAll = (req, res) => {
    const _b = req.body
    const { isAdmin, userId } = getUserDetails(req.user)

    ProductMeasureType.findAll()
        .then(c => {

            if (!c) throw new Error('No ProductMeasurementType found!');

            // let schema = getProductMeasureTypeSchema(_b.languageID)

            // let data = Serializer.serializeMany(c, ProductMeasureType, schema);
            res.status(200).json({ status: true, data: c });

        })
        .catch(err => {
            console.error(err);
            res.status(400).json({ status: false });
        });
};


exports.getByID = (req, res) => {
    const { isAdmin, userId } = getUserDetails(req.user)

    ProductMeasureType.findOne({
        where: {
            typeID: req.params.typeID
        }
    })
        .then(c => {
            if (!c) throw new Error('No ProductMeasurementType found!');
            res.status(200).json({ status: true, data: c });
        })
        .catch(err => {
            console.error(err);
            res.status(400).json({ status: false });
        });
};
