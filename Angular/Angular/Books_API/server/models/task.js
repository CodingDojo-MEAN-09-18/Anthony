//const uniqueValidator = require('mongoose-unique-validator');
const mongoose = require('mongoose');
const { Schema } = mongoose;

const autherSchema = new Schema({
  first_name: {
    type: String,
    trim: true,
    required: [true, 'First Name is required'],
    minlength: [2, 'First Name length must be greater than 2'],
    unique: true
  },
  last_name: {
    type: String,
    trim: true,
    required: [true, 'First Name is required'],
    minlength: [2, 'First Name length must be greater than 2'],
    unique: true
  },
  country: {
    type: String,
    trim: true,
    required: [true, 'First Name is required'],
    minlength: [3, 'Country of Origin must be greater than 3'],
    unique: true
  },
  birthday: {
    day:{type: Number,required:[true,"A birth day is required for registration"],min:1,max:31},
    month:{type: Number, required:[true,"A birth month is required for registration"],min:1,max:12},
    year:{type: Number, required:[true,"A birth year is required for registration"],min:1900,max:2018}
  },
  completed: {
    type: Boolean,
    required: true,
    default: false
  },
}, {
  timestamps: true
});

//taskSchema.plugin(uniqueValidator, { message: '{PATH} must be unique.' });

module.exports = mongoose.model('Task', taskSchema);
