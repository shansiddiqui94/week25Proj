// this is a blue print
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Employee = new Schema(
  {
    first_name: { type: String, requried: true },
    last_name: { type: String, required: true },
    email: { type: String, requried: true },
    job_title: { type: String, requried: true },
    address: new Schema({
      street: { type: String, requried: true },
      city: { type: String, requried: true },
      state: { type: String, requried: true },
      zip: { type: String, requried: true },
    }),
  },
  { timestamps: true } // records when document added, documents when elements change
);

module.exports = mongoose.model('employee', Employee)
