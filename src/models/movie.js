const { Schema, model} = require('mongoose');

const movieSchema = new Schema({
    title: {
        type: String, 
        required: true,

    },
    genre: {
        type: String,
        required: true },

    yaer: {
        type: Number, 
        required: true,
        max: 2035,
        min: 1900,
    
        },
    rating: {
        type: Number, 
        required: true,
        min: 1,
        max: 10,
    
        },
    description: {
        type: String, 
        required: true,
        maxLength: 1000,
    
        },
    imageUR: {
        type: String, 
        required: true,
        match: /^https?/,
        },
    
});

const Movie = model('Movie', movieSchema);

module.exports = Movie;