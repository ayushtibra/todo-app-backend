const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    text: {
        type: 'string',
        require: true
    }
})

module.exports = mongoose.model('ToDo', todoSchema); //Mongoose automatically looks for the plural, lowercased version of your model name.