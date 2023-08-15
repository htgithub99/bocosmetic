const mongoose = require("mongoose");

const Product = new mongoose.Schema(
  {
    product_name: { type: String },
    trade_mark: { type: String }, //thương hiệu
    quantity: { type: Number }, //tổng số lượng
    quantity_sold: { type: Number }, //số lượng đã bán
    percentage_discount: { type: Number }, //Sale với giá đã bán
    number_of_reviews: { type: Number }, //Số lượng đánh giá
    product_type: { type: String }, // tên danh mục sp
    color: { type: String },
    size: { type: String },
    category_id: { type: Number }, //danh mục sp
    price: { type: Number }, // Giá bán lẻ
    inventory: { type: Number }, // sl hàng tồn kho
    vendor_price: { type: Number }, //giá buôn
    intial_price: { type: Number }, //giá nhập
    sale_price: { type: Number }, // giá bán sale
    images: { type: Array },
    branch: { type: String }, //chi nhánh
    barcode: { type: Number },
    description: { type: String }, // mô tả sp
    made_in: { type: String }, //xuất xứ
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", Product);
