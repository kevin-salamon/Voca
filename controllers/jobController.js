const db = require("../models");

module.exports = {
  getSavedJobs: function(req, res) {
    db.Job.find({}).then(jobData => res.json(jobData)).catch(err => {
      console.log(err);
      res.json(err);
    });
  },
  saveJob: function(req, res) {
    db.Job.create(req.body).then(jobData => res.json(jobData)).catch(err => {
      console.log(err);
      res.json(err);
    });
  },
  removeJob: function(req, res) {
    db.Job.remove({
      _id: req.params.id
    }).then(jobData => res.json(jobData)).catch(err => {
      console.log(err);
      res.json(err);
    });
  },
  updateJob: function(req, res) {
    db.Job.findOneAndUpdate({ _id: req.params.id }, req.body)
    .then(jobData => res.json(jobData)).catch(err => {
      console.log(err);
      res.json(err);
    });
  }
};
