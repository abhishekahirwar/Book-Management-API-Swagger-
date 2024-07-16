const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Please Enter The Title."],
        },
        author: {
            type: String,
            required: [true, "Please Enter The Author Name."],
        },
        publishedYear: {
            type: Number,
            required: [true, "Please Enter The Publish Year"],
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Book", bookSchema);
