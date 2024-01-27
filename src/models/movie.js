const { Schema, model} = require('mongoose');

const movieSchema = new Schema({
    title: {
        type: String, 
        required: true,

    },
    genre: {
        type: String,
        required: true },

    year: {
        type: Number, 
        required: true,
        min: 1900,
        max: 2030,
    
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
    imageUrl: {
        type: String, 
        required: true,
        match: /^https?/,
        },
    
});

const Movie = model('Movie', movieSchema);

module.exports = Movie;