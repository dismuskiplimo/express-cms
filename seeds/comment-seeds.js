const {Comment} = require("../models");

const commentData = [
    {
        id: 1,
        post_id: 1,
        user_id: 1,
        content: "My First Comment",
    },

    {
        id: 2,
        post_id: 2,
        user_id: 2,
        content: "My Other Comment",
    },

    {
        id: 3,
        post_id: 3,
        user_id: 3,
        content: "Great Stuff!!!",
    },

    {
        id: 4,
        post_id: 4,
        user_id: 4,
        content: "I'll wait for PS6 to launch so that I can afford the PS5 :-D",
    },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;