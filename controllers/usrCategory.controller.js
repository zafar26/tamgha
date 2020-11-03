const Sequelize = require('sequelize');
const UsrCategory = require('../models/userCategory.model');
const config = require('../config');
const { insertingData } = require('../utils/helperFunc')
const { isAr } = require('../utils/verify')
// const { getCategorySchema } = require('../utils/schema/schemas');
const Serializer = require('sequelize-to-json');

exports.add = (req, res) => {
    const _b = req.body;
    let payload = {
        usrCatName: _b.usrCatName,
        usrCatNameAr: _b.usrCatNameAr,
    }

    UsrCategory.create(payload)
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

    if (!_b.usrCatID) {
        res.status(400).json({
            status: false, message: "usrCatID does not exists"
        });
        return
    }

    let payload = insertingData(_b, _b.usrCatID);

    UsrCategory.update(payload,
        {
            where: {
                usrCatID: _b.usrCatID
            }
        }
    )
        .then(c => {
            if (!c) throw new Error('No Categories found!');
            res.status(200).json({ status: true, category: c });
        })
        .catch(err => {
            console.error(err);
            res.status(400).json({ status: false });
        });
};


exports.delete = (req, res) => {
    const _b = req.body;

    if (!_b.usrCatID) {
        res.status(400).json({
            status: false, message: "usrCatID does not exists"
        });
        return
    }


    UsrCategory.destroy(
        {
            where: {
                usrCatID: _b.usrCatID
            }
        }
    )
        .then(c => {
            if (!c) throw new Error('No UsrCategory found!');
            res.status(200).json({ status: true, category: c });
        })
        .catch(err => {
            console.error(err);
            res.status(400).json({ status: false });
        });
};

exports.getAll = (req, res) => {
    const _b = req.body
    UsrCategory.findAll()
        .then(c => {

            if (!c) throw new Error('No UsrCategory found!');

            // let schema = getCategorySchema(_b.languageID)

            // let data = Serializer.serializeMany(c, UsrCategory, schema);
            res.status(200).json({ status: true, data: c });

        })
        .catch(err => {
            console.error(err);
            res.status(400).json({ status: false });
        });
};


exports.getByID = (req, res) => {
    UsrCategory.findOne({
        where: {
            usrCatID: req.params.usrCatID
        }
    })
        .then(c => {
            if (!c) throw new Error('No UsrCategory found!');
            res.status(200).json({ status: true, data: c });
        })
        .catch(err => {
            console.error(err);
            res.status(400).json({ status: false });
        });
};