const { Schema, model} = require('mongoose');


const castSchema = new Schema({
    name: {
        type: String, 
        required: true,

    },
    age: {
        type: Number,
        required: true ,
        max: 120,
        min: 14,
    },
    born: {
        type: String, 
        required: true,
        },
    nameInMovie: {
        type: String, 
        required: true,
        min: 1,
        max: 10,
    
        },
    image: {
        type: String, 
        required: true,
        match: /^https?:\/\//,
        }, 
    
});

const Cast = model('Cast', castSchema);

module.exports = Cast;