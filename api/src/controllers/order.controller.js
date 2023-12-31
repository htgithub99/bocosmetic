const Order = require("../models/order.model");
const { orderVal } = require("../constants/validate");
const xlsx = require("xlsx");

exports.getOrder = async (req, res) => {
  const params = req.query;
  const pageIndex = parseInt(params.pageIndex) - 1 || 0;
  const pageSize = parseInt(params.pageSize) || 5;
  const query = {
    $or: [
      {
        customer_name: new RegExp(params.name, "i"),
      },
      {
        code_order: new RegExp(params.name, "i"),
      },
    ],
  };
  try {
    Order.find(query)
      .sort({
        createdAt: "desc",
      })
      .skip(pageIndex * pageSize)
      .limit(pageSize)
      .exec((error, order) => {
        Order.countDocuments((error, count) => {
          if (error)
            return res.status(400).send({
              message: "Lỗi!",
            });
          res.status(200).send({
            data: order,
            pageIndex: pageIndex + 1,
            totalPages: Math.ceil(count / pageSize),
            pageSize,
            totalItems: Math.ceil(count),
          });
        });
      });
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getByIdOrder = async (req, res) => {
  const { _id } = req.params;
  try {
    const response = await Order.findById(_id);
    res.status(200).send({
      data: response,
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.createOrder = async (req, res) => {
  const { error } = orderVal(req.body);
  if (error)
    return res.status(400).send({
      message: error.details[0].message,
    });
  const order = new Order({
    ...req.body,
  });
  try {
    await order.save();
    res.status(200).send({
      message: "Tạo đơn hàng thành công!",
    });
  } catch (error) {
    res.status(400).send({
      message: error,
    });
  }
};

exports.updateOrder = async (req, res) => {
  const { _id } = req.params;
  const { error } = orderVal(req.body);
  if (error)
    return res.status(400).send({
      message: error.details[0].message,
    });
  try {
    await Order.updateOne(
      { _id },
      {
        ...req.body,
      }
    );
    res.status(200).send({
      message: "Chỉnh sửa đơn hàng thành công!",
    });
  } catch (error) {
    res.status(400).send({
      message: error,
    });
  }
};

exports.addOrders = async (req, res) => {
  try {
    const workbook = xlsx.readFile(req.file.path);
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const jsonData = xlsx.utils.sheet_to_json(worksheet);

    // Save the data to MongoDB
    Order.insertMany(jsonData, (error, docs) => {
      if (error) {
        return res.status(500).json({ message: "Không thể nhập dữ liệu." });
      }
      res.status(200).json({ message: "Dữ liệu đã được nhập thành công." });
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "Tập tin không hợp lệ." });
  }
};
