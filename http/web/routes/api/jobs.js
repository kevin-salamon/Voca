const router = require("express").Router();
const jobController = require("../../controllers/jobController");

router.route("/")
    .get(jobController.getSavedJobs)
    .post(jobController.saveJob);

router.route("/:id")
    .delete(jobController.removeJob)
    .put(jobController.updateJob);

module.exports = router;