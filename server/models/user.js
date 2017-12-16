const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    "firstName": String,
    "lastName": String,
    "username": { type: 'String', unique: true},
    "password": String,
    "currentCompany": { type: mongoose.Schema.Types.ObjectId, ref: 'Company' },
    "photo": String,
    "experience": [
      {
        "jobTitle": String,
        "company": { type: mongoose.Schema.Types.ObjectId, ref: 'Company' },
        "startDate": Date,
        "endDate": Date
      }
    ],
    "education": [
      {
        "institution": String,
        "degree": String,
        "endDate": Date
      }
    ],
    "skills": [String],
  })

const User = mongoose.model('user', userSchema);
module.exports = User;
