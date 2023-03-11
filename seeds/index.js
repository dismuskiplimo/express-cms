const seedUsers = require("./user-seeds");
const seedPosts = require("./post-seeds");
const seedComments = require("./comment-seeds");

const serialize = require("../config/sequelize");

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log("-- DATABASE CREATED --");

    await seedUsers();
    console.log("-- USER TABLE SEEDED --");

    await seedPosts();
    console.log("-- POSTS TABLE SEEDED --");

    await seedComments();
    console.log("-- COMMENTS TABLE SEEDED --");
}

seedAll();