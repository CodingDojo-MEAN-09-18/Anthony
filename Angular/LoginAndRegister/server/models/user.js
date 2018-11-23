const uniqueValidator = require('mongoose-unique-validator');
const validator = require('validator');

const mongoose = require('mongoose');
const  { Schema } = mongoose;

const UserSchema = new Schema({

    name: {
        type: String,
        trim: true,
        minlength: [3, "Name must be at least 3 characters long."],
        required: [true, 'Name is required.'],
        unique: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        validate: {
            validate(email) {
                return validator.isEmail(email);
            }
        }
    },
    password: {
        type: String,
        required: true,
    },
}, { timestamps: true }
);
UserSchema.plugin(uniqueValidator, { message: '{PATH} must be unique'});
// before saving password
UserSchema.pre('save', function (next) {
    if (!this.isModified('password')) {
        return next();
    }
    // Hash it
    bcrypt
        .hash(this.password, 10)
        .then(hashedPassword => {
            this.password = hashedPassword;
            next();
        })
        .catch(next);
});
// To compare
UserSchema,statics.validatePassword = function(candidatePassword, hashedPassword) {
    return bcrypt.compare(candidatePassword, hashedPassword);
}
module.exports = mongoose.model('User', UserSchema);