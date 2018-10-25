//const uniqueValidator = require('mongoose-unique-validator');
const mongoose = require('mongoose');
const { Schema } = mongoose;

const authorSchema = new Schema({
  name: {
    type: String,
    trim: true,
    minlength: [3, 'Task title length must be greater than 3'],
    required: [true, 'Authors name is required'],
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

module.exports = mongoose.model('Author', authorSchema);
