const { Schema, model, MongooseError } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
     email: {
     type: String,
     required: true,
     lowercase: true,
    },
     password: { 
        type: String,
        required: true,
    },
    //  repetPassword: { 
    //     type: String,
    //     required: true,
    // },

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