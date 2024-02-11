const { Schema, model} = require('mongoose');


const castSchema = new Schema({
    name: {
        type: String, 
        required: true,
        minLength: [5, 'Name must be at least 5 characters long'],
        match: [/^[a-zA-Z0-9\s]+$/, 'Name must be only letters'],

    },
    age: {
        type: Number,
        required: true ,
        min: 1,
        max: 120,
    },
    born: {
        type: String, 
        required: true,
        minLength: [10, 'Born must be at least 10 characters long'],
        match: [/^[a-zA-Z0-9\s]+$/, 'Born must be only letters'],

        },
    nameInMovie: {
        type: String, 
        required: true,
        minLength: [5, 'NameInMovie must be at least 5 characters long'],
        match: [/^[a-zA-Z0-9\s]+$/, 'NameInMovie must be only letters'],
    
        },
    castImage: {
        type: String, 
        required: true,
        validate: {
            validator (value)
            {
              return  /^https?:\/\//.test(value);
            }
        },
        message: (props) => `${props.value} is invalid url for this castImage!`

        }, 
    
});

const Cast = model('Cast', castSchema);

module.exports = Cast;