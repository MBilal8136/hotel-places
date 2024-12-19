const mongoose = require("mongoose"); // Corrected 'mongooes' to 'mongoose'
const Schema = mongoose.Schema;

const ListingSchema = new Schema({
  title: {
    type: String,
    required: true, // Changed 'require' to 'required'
  },
  description: String,
  image: {
    type: String,
    default:
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    set: (v) =>
      v === " "
        ? "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
        : v,
  },
  price: Number,
  location: String,
  country: String,
});

const listing = mongoose.model("listing", ListingSchema);

module.exports = listing; // Corrected 'module.export' to 'module.exports'
