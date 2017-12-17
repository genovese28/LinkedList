const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
    name: String,
    password: String,
    email: String,
    handle: String,
    logo: String,
    employees: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user"
        }
    ],
    jobs: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "job"
        }
    ]
});

module.exports = mongoose.model("Company", companySchema);
