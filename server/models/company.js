const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
    name: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    handle: { type: String, required: true },
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
