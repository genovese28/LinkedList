const { Job } = require("../models");

function readJobs(req, res, next) {
  Job.find()
    .then(jobs => res.status(200).json({ data: jobs }))
    .catch(err => next(err));
}

function createJob(req, res, next) {
  const newJob = new Job(req.body.data);
  newJob
    .save()
    .then(job => res.status(201).json({ data: job }))
    .catch(err => next(err));
}

function readJob(req, res, next) {
  Job.findOne({ _id: req.params.id })
    .then(job => res.status(200).json({ data: job }))
    .catch(err => next(err));
}

function updateJob(req, res, next) {
  Job.findOneAndUpdate({ _id: req.params.id }, req.body.data, {
    runValidators: true
  })
    .then(job => res.status(200).json({ data: job }))
    .catch(err => next(err));
}

function deleteJob(req, res, next) {
  Job.findOneAndRemove({ _id: req.params.id })
    .then(job => res.status(200).json({ data: job }))
    .catch(err => next(err));
}

module.exports = {
  readJobs,
  createJob,
  readJob,
  updateJob,
  deleteJob
};
