const mongoose = require('mongoose');

const sleepEntrySchema = new mongoose.Schema({
    userId : String,
    sleepStart : Date,
    sleepEnd : Date,
    duration : Number,
    Quality : Number,
});

module.exports = mongoose.model('SleepEntry', sleepEntrySchema);