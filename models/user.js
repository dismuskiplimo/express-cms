const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../config/sequelize');

const User = sequelize.define("users",{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },

    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },

    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = User;