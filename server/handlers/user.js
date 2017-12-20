const { User, Company } = require("../models");

function readUsers(req, res, next) {
  User.find()
    .then(users => res.status(200).json({ data: users }))
    .catch(err => next(err));
}

async function createUser(req, res, next) {
  try {
    const newUser = new User(req.body.data);
    await newUser.save();
    if (newUser.currentCompany) {
      await Company.findByIdAndUpdate(newUser.currentCompany, {
        $addToSet: { employees: newUser._id }
      });
    }
    res.status(201).json({ data: newUser });
  } catch (e) {
    console.log("error createUser");
    next(e);
  }
}

function readUser(req, res, next) {
  User.findOne({ username: req.params.username })
    .then(user => res.status(200).json({ data: user }))
    .catch(err => next(err));
}

//is updating the user, but does not send updated user in json
async function updateUser(req, res, next) {
  try {
    const user = await User.findOne({ username: req.params.username });
    if (user.currentCompany !== req.body.data.currentCompany) {
      eval(require("locus"));
      if (user.currentCompany) {
        await Company.findByIdAndUpdate(user.currentCompany, {
          $pull: { employees: user._id }
        });
      }
      if (req.body.data.currentCompany) {
        await Company.findByIdAndUpdate(req.body.data.currentCompany, {
          $addToSet: { employees: user._id }
        });
      }
    }
    const updatedUser = await User.findOneAndUpdate(
      { username: req.params.username },
      req.body.data,
      { runValidators: true }
    );
    res.status(200).json({ data: updatedUser });
  } catch (e) {
    console.log("error updateUser");
    next(e);
  }
}

async function deleteUser(req, res, next) {
  try {
    const user = await User.findOne({ username: req.params.username });
    if (user.currentCompany) {
      await Company.findByIdAndUpdate(user.currentCompany, {
        $pull: { employees: user._id }
      });
    }
    await User.findOneAndRemove({ username: req.params.username });
    res.status(200).json({ data: user });
  } catch (e) {
    console.log("error deleteUser");
    next(e);
  }
}

module.exports = {
  readUsers,
  createUser,
  readUser,
  updateUser,
  deleteUser
};
