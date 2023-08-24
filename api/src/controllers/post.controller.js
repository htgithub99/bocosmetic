const Post = require("../models/post.model");
const { postVal } = require("../constants/validate");

exports.getPost = async (req, res) => {
  const params = req.query;
  const pageIndex = parseInt(req.query.pageIndex) - 1 || 0;
  const pageSize = parseInt(req.query.pageSize) || 5;
  const query = {
    $or: [
      {
        title: new RegExp(params.name, "i"),
      },
      {
        content: new RegExp(params.name, "i"),
      },
    ],
  };
  try {
    Post.find(query)
      .sort({
        createdAt: "desc",
      })
      .skip(pageIndex * pageSize)
      .limit(pageSize)
      .exec((error, post) => {
        Post.countDocuments((error, count) => {
          if (error)
            return res.status(400).send({
              message: "Lỗi!",
            });
          res.status(200).send({
            data: post,
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

exports.getByIdPost = async (req, res) => {
  const { _id } = req.params;
  try {
    const response = await Post.findById(_id);
    res.send({
      data: response,
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.createPost = async (req, res) => {
  const { error } = postVal(req.body);
  if (error)
    return res.status(400).send({
      message: error.details[0].message,
    });
  const post = new Post({
    ...req.body,
  });
  try {
    await post.save();
    res.status(200).send({
      message: "Tạo bài viết thành công!",
    });
  } catch (error) {
    res.status(400).send({
      message: error,
    });
  }
};

exports.updatePost = async (req, res) => {
  const { _id } = req.params;
  const { error } = postVal(req.body);
  if (error)
    return res.status(400).send({
      message: error.details[0].message,
    });
  try {
    await Post.updateOne(
      { _id },
      {
        ...req.body,
      }
    );
    res.status(200).send({
      message: "Chỉnh sửa bài viết thành công!",
    });
  } catch (error) {
    res.status(400).send({
      message: error,
    });
  }
};

exports.destroyPost = async (req, res) => {
  const { _id } = req.params;
  try {
    await Post.deleteOne({ _id });
    res.status(200).send({
      message: "Xóa bài viết thành công",
    });
  } catch (error) {
    res.status(400).send({
      message: error,
    });
  }
};
