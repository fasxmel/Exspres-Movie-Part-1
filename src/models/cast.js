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