const mongoose = require("mongoose");

const Resources = new mongoose.Schema(
  {
    banners: { type: Array },
    introduce: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Resources", Resources);
