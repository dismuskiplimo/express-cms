const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../config/sequelize');

const Post = sequelize.define("posts",{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },

    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

    title: {
        type: DataTypes.TEXT,
        allowNull: false,
    },

    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
});

module.exports = Post;