const Customer = require("../models/customer.model");
const xlsx = require("xlsx");

exports.addCustomers = async (req, res) => {
  try {
    const workbook = xlsx.readFile(req.file.path);
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const jsonData = xlsx.utils.sheet_to_json(worksheet);

    // Save the data to MongoDB
    Customer.insertMany(jsonData, (error, docs) => {
      if (error) {
        console.error(error);
        res.status(500).json({ error: "Không thể nhập dữ liệu." });
      } else {
        res.json({ message: "Dữ liệu đã được nhập thành công." });
      }
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "Tập tin không hợp lệ." });
  }
};
