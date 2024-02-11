const { Schema, model, MongooseError } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
     email: {
     type: String,
     required: true,
     lowercase: true,
     unique: true,
     match: [/@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/, 'Invalid email address'],
     minLength: [10, 'Email must be at least 10 characters long'],
    },
     password: { 
        type: String,
        match: [/^[a-zA-Z0-9]+$/, 'Password must be alphanumeric characters only'],
        minLength: [6, 'Password must be at least 6 characters long'],
        required: true,
    },
    

});

userSchema.pre('save', async function () {
     
    const hash = await bcrypt.hash(this.password, 12);
    this.password = hash;
});

userSchema.virtual('repeatPassword')
    .set(function (value) {
        if (value !== this.password) {
            throw new MongooseError('Password confirmation does not match password');
        }

        //this._repeatPassword = value;
    });


const User = model('User', userSchema);

module.exports = User;