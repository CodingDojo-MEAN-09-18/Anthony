//const uniqueValidator = require('mongoose-unique-validator');
const mongoose = require('mongoose');
const { Schema } = mongoose;

const authorSchema = new Schema({
  Name: {
    type: String,
    trim: true,
    required: [true, 'Authors name is required'],
    minlength: [3, 'Task title length must be greater than 5'],
    unique: true
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

module.exports = mongoose.model('Author', taskSchema);
