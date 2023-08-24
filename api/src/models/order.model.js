const mongoose = require("mongoose");

const Order = new mongoose.Schema(
  {
    code_order: { type: String, max: 50 },
    customer_name: { type: String, require: true },
    order_status: { type: String, require: true },
    payment_status: { type: String, require: true },
    guest_must_pay: { type: Number, require: true },
    creator_order: { type: String, require: true },
    ordering_branch: { type: String, require: true },
    customer_address: { type: String, require: true },
    product: { type: Array },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", Order);
