const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "The setup is required"],
        minlength: [10, "The setup must be at least 10 characters long"]
    },
    punchline: {
        type: String,
        required: [true, "The punchline is required"],
        minlength: [3, "The punchline must be at least 3 characters long"]
    }
});

const Joke = mongoose.model('Joke', JokeSchema);

module.exports = Joke;