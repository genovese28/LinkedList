const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    currentCompany: { type: mongoose.Schema.Types.ObjectId, ref: "company" },
    photo: String,
    experience: [
      {
        jobTitle: String,
        company: { type: mongoose.Schema.Types.ObjectId, ref: "company" },
        startDate: Date,
        endDate: Date
      }
    ],
    education: [
      {
        institution: String,
        degree: String,
        endDate: Date
      }
    ],
    skills: [String]
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("User", userSchema);
