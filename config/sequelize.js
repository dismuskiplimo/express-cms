require('dotenv').config(); // import the dotenv values
const Sequelize = require("sequelize"); // import the sequelize package

const sequelize = new Sequelize(
    process.env.DB_DATABASE,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        dialect: process.env.DB_DIALECT,
        host: process.env.DB_HOST,
    }
);

module.exports = sequelize;
