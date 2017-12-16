// app imports
const { User } = require('../models');

function readUser(request, response, next) {
  //getting user from username
  User.find({name: request.params.username})
    .then(user => response.status(200).json(formatResponse(user)))
    .catch(err => next(err));
}



function updateUser(request, response, next) {
  const { username } = request.params;
  const correctUser = ensureCorrectUser(
    request.headers.authorization,
    username
  );
  if (correctUser !== 'OK') {
    return next(correctUser);
  }
  const validSchema = validateSchema(
    v.validate(request.body, userUpdateSchema),
    'user'
  );
  if (validSchema !== 'OK') {
    return next(validSchema);
  }
  return User.updateUser(username, request.body.data)
    .then(user => response.json(formatResponse(user)))
    .catch(err => next(err));
}

function deleteUser(request, response, next) {
  const username = request.params.username;
  const correctUser = ensureCorrectUser(
    request.headers.authorization,
    username
  );
  if (correctUser !== 'OK') {
    return next(correctUser);
  }
  return User.deleteUser(username)
    .then(user => response.json(formatResponse(user)))
    .catch(err => next(err));
}

function createUser(request, response, next) {
  const user = new User(request.body);
  user
    .save()
    .then(user => response.status(201).json(user))
    .catch(err => next(err));
}


module.exports = {
  createUser,
  readUser,
  updateUser,
  deleteUser
};
