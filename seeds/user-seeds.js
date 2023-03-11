const {User} = require("../models");

const user_data = [
    {
        id: 1,
        username: "JohnDoe",
        password: "$2b$10$slLXw83Ly1uatthzZQev8utmuN21JVYMSuatUIWjBG5bHonjeD4v2" // plaintext password is @Welcome123
    },

    {
        id: 2,
        username: "JaneDoe",
        password: "$2b$10$slLXw83Ly1uatthzZQev8utmuN21JVYMSuatUIWjBG5bHonjeD4v2" // plaintext password is @Welcome123
    },

    {
        id: 3,
        username: "User1",
        password: "$2b$10$slLXw83Ly1uatthzZQev8utmuN21JVYMSuatUIWjBG5bHonjeD4v2" // plaintext password is @Welcome123
    },

    {
        id: 4,
        username: "User2",
        password: "$2b$10$slLXw83Ly1uatthzZQev8utmuN21JVYMSuatUIWjBG5bHonjeD4v2" // plaintext password is @Welcome123
    },



];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;