//const uniqueValidator = require('mongoose-unique-validator');
const mongoose = require('mongoose');
const { Schema } = mongoose;

const noteSchema = new Schema({
  note: {
    type: String,
    trim: true,
    minlength: [3, 'Note length must be greater than 3'],
    required: [true, 'A Note is required'],
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

module.exports = mongoose.model('Note', noteSchema);
