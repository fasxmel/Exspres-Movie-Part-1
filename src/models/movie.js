const { Schema, model, default: mongoose } = require('mongoose');

const movieSchema = new Schema({
    title: {
        type: String, 
        required: true,
        minLength: [5, 'Title must be at least 5 characters long'],
        match: [/^[a-zA-Z0-9\s]+$/, 'Title must be only letters'],

    },
    genre: {
        type: String,
        required: true,
        minLength: [5, 'Genres must be at least 5 characters long'],
        match: [/^[a-zA-Z0-9\s]+$/, 'Genres must be only letters'],
    },
    director: {
        type: String, 
        required: true,
        minLength: [5, 'Director must be at least 5 characters long'],
        match: [/^[a-zA-Z0-9\s]+$/, 'Director must be only letters'],
    
    },
    year: {
        type: Number, 
        required: true,
        min: 1900,
        max: 2024,
    
        },
    rating: {
        type: Number, 
        required: true,
        min: 1,
        max: 5,
    
        },
    description: {
        type: String, 
        required: true,
        minLength: 20,
        maxLength: 1000,
        match: [/^[a-zA-Z0-9\s]+$/, 'Description must be only letters'],
    
        },
    imageUrl: {
        type: String, 
        required: true,
        match: /^https?:\/\//,
        },
    casts: [{
        type: mongoose.Types.ObjectId,
        ref:'Cast',
    }],
    owner: [{
        type: mongoose.Types.ObjectId,
        ref:'User',
    }],
});

const Movie = model('Movie', movieSchema);

module.exports = Movie;