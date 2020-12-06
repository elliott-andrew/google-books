const mongoose = require('mongoose');

const googlebooksSchema = new mongoose.Schema(
    {
        title: { type: String, required: true, unique: true },
        authors: [String],
        description: String,
        image: String,
        link: String
    },
);

module.exports = mongoose.model("googlebooks", googlebooksSchema);