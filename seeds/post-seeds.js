const {Post} = require("../models");

const postData = [
    {
        id: 1,
        user_id: 1,
        title: "My Title",
        content: "My First Content",
    },

    {
        id: 2,
        user_id: 2,
        title: "Another Title",
        content: "Content number 2",
    },

    {
        id: 3,
        user_id: 3,
        title: "Billy Jean",
        content: "Great song by Michael Jackson",
    },

    {
        id: 4,
        user_id: 4,
        title: "Playstation 5",
        content: "The most valuable Playstation to Date. Was launched for $500.00 but due to component shortage, owners are selling it for $1000.00.",
    },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;