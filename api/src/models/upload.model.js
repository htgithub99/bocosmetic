const mongoose = require("mongoose");

const Image = new mongoose.Schema(
  {
    fieldname: { type: String },
    originalname: { type: String },
    encoding: { type: String },
    mimetype: { type: String },
    destination: { type: String },
    filename: { type: String },
    path: { type: String },
    size: { type: Number },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Image", Image);
