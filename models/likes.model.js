const connection = require('../services/sequelize.service').connection();
const Sequelize = require('sequelize');


const likes = connection.define('likes', {
    likeID: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    }
}
);
module.exports = likes;
