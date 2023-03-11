const {Sequelize, DataTypes} = require('sequelize');
const sequelizeInstance = require('../config/sequelize');

const Comment = sequelizeInstance.define("comments",{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    
    post_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },


});

module.exports = Comment;