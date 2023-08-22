const mongoose = require("mongoose");

const Customer = new mongoose.Schema(
  {
    phone: { type: String },
    customer_name: { type: String }, //Tên khách hàng
    score: { type: Number }, //Điểm tích lũy
    total_price: { type: Number }, //Tổng tiền đã mua
    birthday: { type: String }, // Ngày sinh
    address: { type: String }, //Địa chị nhận hàng
    debt_price: { type: Number }, // Công nợ
    number_order: { type: Number }, //Số lượng đơn hàng
  },
  { timestamps: true }
);

module.exports = mongoose.model("Customer", Customer);
