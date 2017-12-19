const { User } = require("../models");

function readUsers(req, res, next) {
  User.find()
    .then(users => res.status(200).json({ data: users }))
    .catch(err => next(err));
}

function createUser(req, res, next) {
  const newUser = new User(req.body.data);
  newUser
    .save()
    .then(user => res.status(201).json({ data: newUser }))
    .catch(err => next(err));
}

function readUser(req, res, next) {
  User.findOne({ username: req.params.username })
    .then(user => res.status(200).json({ data: user }))
    .catch(err => next(err));
}

//is updating the user, but does not send updated user in json
function updateUser(req, res, next) {
  User.findOneAndUpdate({ username: req.params.username }, req.body.data, {
    runValidators: true
  })
    .then(user => res.status(200).json({ data: user }))
    .catch(err => next(err));
}

function deleteUser(req, res, next) {
  User.findOneAndRemove({ username: req.params.username })
    .then(user => res.status(200).json({ data: user }))
    .catch(err => next(err));
}

module.exports = {
  readUsers,
  createUser,
  readUser,
  updateUser,
  deleteUser
};
