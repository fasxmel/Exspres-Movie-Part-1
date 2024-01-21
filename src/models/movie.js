const { Schema, model } = require('mongoose');


const movieSchema = new Schema({
    title: {
        type: 'String',
       
    },
    genre: {
        type: 'String',
       
    },
    director: {
        type: 'String',
     
    },
    year: {
        type: 'Number',
       
    },
    imageUrl: {
        type: 'String',
      
    },
    rating: {
        type: 'Number',
       
      
       
    },
    description: {
        type: 'String',
    },

});

const Movie = model('Movie', movieSchema);

module.exports = Movie;