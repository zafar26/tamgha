const Sequelize = require('sequelize');
const Country = require('../models/country.model');
const config = require('../config');
const { getUserDetails } = require('../utils/helperFunc');

exports.add = (req, res) => {
    const _b = req.body;
    const { isAdmin, userId } = getUserDetails(req.user)

    Country.create({
        country: _b.country,
        countryAr: _b.countryAr
    })
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
    let payload = {};
    const { isAdmin, userId } = getUserDetails(req.user)

    if (!_b.countryID) {
        res.status(400).json({ status: false, message: "countryID does not exists" });
        return
    }

    if (_b.country)
        payload.country = _b.country

    if (_b.countryAr)
        payload.countryAr = _b.countryAr

    Country.update(payload,
        {
            where: {
                countryID: _b.countryID
            }
        }
    )
        .then(c => {
            if (!c) throw new Error('No country found!');
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

    if (!_b.countryID) {
        res.status(400).json({ status: false, message: "countryID does not exists" });
        return
    }


    Country.destroy(
        {
            where: {
                countryID: _b.countryID
            }
        }
    )
        .then(c => {
            if (!c) throw new Error('No country found!');
            res.status(200).json({ status: true, category: c });
        })
        .catch(err => {
            console.error(err);
            res.status(400).json({ status: false });
        });
};

exports.getAll = (req, res) => {
    const { isAdmin, userId } = getUserDetails(req.user)


    Country.findAll({})
        .then(c => {
            if (!c) throw new Error('No country found!');
            res.status(200).json({ status: true, data: c });
        })
        .catch(err => {
            console.error(err);
            res.status(400).json({ status: false });
        });
};


exports.getByID = (req, res) => {
    const { isAdmin, userId } = getUserDetails(req.user)

    Country.findOne({
        where: {
            countryID: req.params.countryID
        }
    })
        .then(c => {
            if (!c) throw new Error('No country found!');
            res.status(200).json({ status: true, data: c });
        })
        .catch(err => {
            console.error(err);
            res.status(400).json({ status: false });
        });
};

