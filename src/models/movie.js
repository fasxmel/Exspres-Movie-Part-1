const { Schema, model } = require('mongoose');


const movieSchema = new Schema({
    title: {
        type: 'String',
        required: true,
    },
    genre: {
        type: 'String',
        required: true,
    },
    director: {
        type: 'String',
        required: true,
    },
    year: {
        type: 'Number',
        required: true,
    },
    imageUrl: {
        type: 'String',
        required: true,
    },
    rating: {
        type: 'Number',
        required: true,
        max: 10,
        min: 1,
    },
    description: {
        type: 'String',
        required: true,
        maxlength: 100,
    },

});

const Movie = model('Movie', movieSchema);

module.exports = Movie;