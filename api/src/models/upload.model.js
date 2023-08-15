const mongoose = require("mongoose");

const Image = new mongoose.Schema(
  {
    url: { type: String },
    product_id: { type: String, require: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Image", Image);
