const mongoose = require("mongoose");

const Post = new mongoose.Schema(
  {
    title: { type: String },
    image: { type: String },
    content: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", Post);
