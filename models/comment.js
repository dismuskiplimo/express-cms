const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../config/sequelize');

const Comment = sequelize.define("comments",{
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