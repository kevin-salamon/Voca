const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var moment = require('moment');
let today = moment

const jobSchema = new Schema({
    title: {
        type: String
    },
    employer: {
        type: String
    },
    location: {
        type: String
    },
    notes: {
        type: String
    },
    followUp: {
        type: Date,
        default: Date.now()
    }
});

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;