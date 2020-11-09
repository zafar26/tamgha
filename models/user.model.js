const connection = require('../services/sequelize.service').connection();
const Sequelize = require('sequelize');

const user = connection.define('user', {
    userID: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    email: {
        type: Sequelize.STRING,
        unique: true
    },
    password: {
        type: Sequelize.STRING,
    },
    userName: {
        type: Sequelize.STRING,
    },
    userNameAr: {
        type: Sequelize.STRING,
    },
    profilePhoto: {
        type: Sequelize.STRING,
    },
    firstName: {
        type: Sequelize.STRING,
    },
    firstNameAr: {
        type: Sequelize.STRING,
    },
    lastName: {
        type: Sequelize.STRING,
    },
    lastNameAr: {
        type: Sequelize.STRING,
    },
    phoneNo: {
        type: Sequelize.STRING,
    },
    // country: {
    //     type: Sequelize.STRING,
    // },
    // countryAr: {
    //     type: Sequelize.STRING,
    // },
    idType: {
        type: Sequelize.ENUM,
        values: ['Passport', 'Civil']
    },
    idFront: {
        type: Sequelize.STRING,
    },
    idBack: {
        type: Sequelize.STRING,
    },
    categorySelected: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    isCivilIdUpload: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    emailVerified: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    }
}
);

module.exports = user;
