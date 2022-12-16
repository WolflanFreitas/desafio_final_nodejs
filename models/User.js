const Sequelize = require('sequelize');
const database = require('../config/config.js');

const User = database.define('User', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    email: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    password: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    phone: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    adders: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    role: {
        type: Sequelize.ENUM('admin','client'),
        allowNull: false
    }
});