const connection = require('../services/sequelize.service').connection();
const Sequelize = require('sequelize');


const media = connection.define('prod_media', {
    medID: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    medType: {
        type: Sequelize.ENUM,
        values: ['Image', 'Video']
    },
    medValue: {
        type: Sequelize.STRING,
    }
}
);
module.exports = media;