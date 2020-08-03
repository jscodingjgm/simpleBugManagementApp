const mongoose = require('mongoose');

const bugDetailsSchema = new mongoose.Schema({
    title: String,
    description: String,
    time: Date,
    date: Date,
    assignedTo: String
});

const bugDetailsModel = mongoose.model('bugDetailsModel', bugDetailsSchema);


module.exports = bugDetailsModel;