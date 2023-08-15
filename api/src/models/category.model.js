const mongoose = require("mongoose");

const Category = new mongoose.Schema(
  {
    category_name: { type: String }, // Tên danh mục
    category_id: { type: Number }, // Thứ tự danh mục
    parent_id: { type: Number },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", Category);
