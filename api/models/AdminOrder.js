const mongoose = require("mongoose");

const AdminOrderSchema = new mongoose.Schema(
  {
    productId: {type: String},
    adminid: {type: String},
    userId: {type: String},
    quantity: {type: Number},
    address: {type: Object},
    orderid: {type: String},
  },
);

module.exports = mongoose.model("AdminOrder", AdminOrderSchema);
