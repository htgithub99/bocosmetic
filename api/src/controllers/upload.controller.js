const Image = require("../models/upload.model");

exports.uploads = async (req, res) => {
  const payload = req.file;
  const image = new Image({ ...payload });
  try {
    await image.save();
    return res.status(200).send({
      data: {
        url: `/${payload.destination}${payload.filename}`,
      },
      message: "Tải ảnh lên thành công!",
    });
  } catch (error) {
    res.status(400).send({
      message: error,
    });
  }
};

exports.uploadsMultiple = async (req, res) => {
  const payload = req.files;
  try {
    await Image.insertMany(payload);
    return res.status(200).send({
      data: {
        urls: payload.map((item) => ({
          path: `/${item.destination}${item.filename}`,
          size: item.size,
        })),
      },
      message: "Tải ảnh lên thành công!",
    });
  } catch (error) {
    res.status(400).send({
      message: error,
    });
  }
};
