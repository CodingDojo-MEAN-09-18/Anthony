const mongoose = require('mongoose');
const { Schema } = mongoose;

const DogSchema = new mongoose.Schema({
    name: {type:String, required: [true, "Name is required"]},
    weight: {type: Number, required: [true, "Weight required"]},
    color: {type: String, required: [true, "Color required"]}
});

module.exports = mongoose.model('Dog', DogSchema);
