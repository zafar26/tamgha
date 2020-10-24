const connection = require('../services/sequelize.service').connection();
const Sequelize = require('sequelize');


const Transaction = connection.define('transaction', {
    transID: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    invoiceID: {
        type: Sequelize.INTEGER,
        defaultValue: '0000'
    },
    salePrice: {
        type: Sequelize.DOUBLE,
    },
    paymentGateway: {
        type: Sequelize.STRING,
    },
    status: {
        type: Sequelize.STRING,
    },
    isSuccesfull: {
        type: Sequelize.STRING,
    },
    isRefunded: {
        type: Sequelize.STRING,
    },
    collectedAmnt: {
        type: Sequelize.DOUBLE,
    },
    finalAmnt: {
        type: Sequelize.DOUBLE,
    }
}
);
module.exports = Transaction;
