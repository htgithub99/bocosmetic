const Resources = require("../models/resources.model");

exports.getResources = async (req, res) => {
  try {
    const response = await Resources.find({});
    res.status(200).send({
      data: response[0],
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.createResources = async (req, res) => {
  const payload = req.body;
  const resources = new Resources({
    ...payload,
  });
  try {
    await resources.save();
    res.status(200).send({
      message: "Tạo tài nguyên thành công!",
    });
  } catch (error) {
    res.status(400).send({
      message: error,
    });
  }
};

exports.updateResources = async (req, res) => {
  const { _id } = req.params;
  try {
    await Resources.updateOne(
      { _id },
      {
        ...req.body,
      }
    );
    res.status(200).send({
      message: "Chỉnh sửa tài nguyên thành công!",
    });
  } catch (error) {
    res.status(400).send({
      message: error,
    });
  }
};
