const mongoose = require('mongoose');
const { Schema } = mongoose;
var UserSchema = new mongoose.Schema({
   name: {type: String},
   quote: {type: String},
   { timestamps: true })
};
module.exports = mongoose.model('User',UserSchema);
