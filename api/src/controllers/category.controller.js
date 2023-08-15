const Category = require("../models/category.model");
const { categoryVal } = require("../constants/validate");
const { SortOrder, TypeCategoryID } = require("../constants/constant");

exports.getCategory = async (req, res) => {
  const params = req.query;
  const pageIndex = parseInt(params.pageIndex) - 1 || 0;
  const pageSize = parseInt(params.pageSize) || 5;
  const query = {
    category_name: new RegExp(params.name, "i"),
  };
  if (+params.parentId !== TypeCategoryID.parcentage_discount) {
    query.parent_id = params.parentId;
  } else {
    delete query.parent_id;
  }

  try {
    Category.find(query)
      .sort({
        createdAt: SortOrder.DESC,
      })
      .skip(pageIndex * pageSize)
      .limit(pageSize)
      .exec((error, categorys) => {
        Category.countDocuments((error, count) => {
          if (error)
            return res.status(400).send({
              message: "Không lấy được dữ liệu!",
            });
          res.send({
            data: categorys,
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

exports.createCategory = async (req, res) => {
  const { error } = categoryVal(req.body);
  if (error)
    return res.status(400).send({
      message: error.details[0].message,
    });
  const categoryNameExist = await Category.findOne({
    category_name: req.body.category_name,
  });
  if (categoryNameExist)
    return res.status(400).send({
      message: "Danh mục này đã tồn tại!",
    });
  const category = new Category({
    ...req.body,
  });
  try {
    await category.save();
    res.send({
      message: "Tạo danh mục thành công!",
    });
  } catch (error) {
    res.status(400).send({
      message: error,
    });
  }
};

exports.updateCategory = async (req, res) => {
  const { id } = req.params;
  const { error } = categoryVal(req.body);
  if (error)
    return res.status(400).send({
      message: error.details[0].message,
    });
  try {
    await Category.updateOne(
      { _id: id },
      {
        ...req.body,
      }
    );
    res.send({
      message: "Chỉnh sửa danh mục thành công!",
    });
  } catch (error) {
    res.status(400).send({
      message: error,
    });
  }
};
