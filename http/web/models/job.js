const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
        type: Date
    }
});

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;