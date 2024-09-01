//models/todoModel.js
const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
 name: {
 type:String,
 required: true,
 trim: true
 }
});

module.exports = mongoose.model('Todo', TodoSchema);


