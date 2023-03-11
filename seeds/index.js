const seedUsers = require("./user-seeds");
const seedPosts = require("./post-seeds");
const seedComments = require("./comment-seeds");

const sequelize = require("../config/sequelize");

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log("\n-- DATABASE CREATED -n");

    await seedUsers();
    console.log("\n-- USER TABLE SEEDED --\n");

    await seedPosts();
    console.log("\n-- POSTS TABLE SEEDED --\n");

    await seedComments();
    console.log("\n-- COMMENTS TABLE SEEDED --\n");

    console.log("-- SUCCESSFULLY SEEDED ALL THE TABLES --");

    process.exit(0);
}

seedAll();