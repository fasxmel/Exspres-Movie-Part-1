const { Schema, model } = require('mongoose');


const movieSchema = new Schema({
    title: 'String',
    genre: 'String',
    director: 'String',
    year: 'Number',
    imageUrl: 'String',
    rating: 'Number',
    description: 'String',
    
});

const Movie = model('Movie', movieSchema);

module.exports = Movie;