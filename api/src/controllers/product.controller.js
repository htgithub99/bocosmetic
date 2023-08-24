const Product = require("../models/product.model");
const xlsx = require("xlsx");
const { productVal } = require("../constants/validate");
const { percentageDiscount, getCountByCategory } = require("../constants");
const {
  TypeTopPage,
  SortOrder,
  TypeCategoryID,
  FieldByProduct,
  FieldResultQueryProduct,
  FieldResultQueryProductAdmin,
  FieldResultQueryProductByIdAdmin,
} = require("../constants/constant");

exports.getProduct = async (req, res) => {
  const params = req.query;
  const pageIndex = parseInt(params.pageIndex) - 1 || 0;
  const pageSize = parseInt(params.pageSize) || 5;
  const query = {
    $or: [
      {
        product_name: new RegExp(params.name, "i"),
      },
      {
        barcode: new RegExp(params.name, "i"),
      },
    ],
  };
  try {
    Product.find(query, FieldResultQueryProduct)
      .sort({
        createdAt: "desc",
      })
      .skip(pageIndex * pageSize)
      .limit(pageSize)
      .exec((error, products) => {
        Product.countDocuments((error, count) => {
          if (error)
            return res.status(400).send({
              message: "Lỗi!",
            });
          res.status(200).send({
            data: products,
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

exports.getProductByCategory = async (req, res) => {
  const params = req.query || {};
  params.filter = JSON.parse(params.filter);
  const pageIndex = parseInt(params.pageIndex) - 1 || 0;
  const pageSize = parseInt(params.pageSize) || 5;
  const sort = {};
  const query = { product_name: new RegExp(params.name, "i") };
  if (params.filter.field) {
    const field = FieldByProduct.find(
      (f) => f.title === params.filter.field
    ).field;
    query[field] = params.filter.value;
  } else {
    delete query.filter;
  }
  if (+params.categoryId === TypeCategoryID.parcentage_discount) {
    sort.percentage_discount = SortOrder.DESC;
    delete query.category_id;
  } else {
    sort.createdAt = SortOrder.DESC;
    query.category_id = +params.categoryId;
  }
  try {
    Product.find(query, FieldResultQueryProduct)
      .sort(sort)
      .skip(pageIndex * pageSize)
      .limit(pageSize)
      .exec((error, products) => {
        Product.countDocuments(
          { category_id: +params.categoryId },
          (error, count) => {
            if (error)
              return res.status(400).send({
                message: "Không lấy được dữ liệu!",
              });
            res.status(200).send({
              data: products,
              pageIndex: pageIndex + 1,
              totalPages: Math.ceil(count / pageSize),
              pageSize,
              totalItems: Math.ceil(count),
            });
          }
        );
      });
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getFilterByProduct = async (req, res) => {
  const params = req.query;
  const query = {};
  if (+params.categoryId === TypeCategoryID.parcentage_discount) {
    delete query.category_id;
  } else {
    query.category_id = +params.categoryId;
  }
  const customData = [
    {
      title: "Xuất xứ",
      item: [],
    },
    {
      title: "Thương hiệu",
      item: [],
    },
    {
      title: "Màu sắc",
      item: [],
    },
    {
      title: "Dung tích",
      item: [],
    },
  ];
  try {
    const response = await Product.find(query, {
      made_in: 1,
      trade_mark: 1,
      color: 1,
      size: 1,
    });
    response.forEach((item) => {
      if (item.made_in) customData[0].item.push(item.made_in);
      if (item.trade_mark) customData[1].item.push(item.trade_mark);
      if (item.color) customData[2].item.push(item.color);
      if (item.size) customData[3].item.push(item.size);
    });
    res.status(200).send({
      data: customData
        .map((item) => ({
          ...item,
          item: getCountByCategory(item.item),
        }))
        .filter((del) => Boolean(del.item.length)),
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getProductTopPage = async (req, res) => {
  const params = req.query;
  const pageIndex = parseInt(params.pageIndex) - 1 || 0;
  const pageSize = parseInt(params.pageSize) || 20;
  const sort = {};
  switch (+params.type) {
    case TypeTopPage.PARCENTAGE_DISCOUNT:
      sort.percentage_discount = SortOrder.DESC;
      break;
    case TypeTopPage.QUANTITY_SOLD:
      sort.quantity_sold = SortOrder.DESC;
      break;
    case TypeTopPage.NUMBER_OF_REVIEWS:
      sort.number_of_reviews = SortOrder.DESC;
      break;
  }
  try {
    Product.find(
      {
        product_name: new RegExp(params.name, "i"),
      },
      FieldResultQueryProduct
    )
      .sort(sort)
      .skip(pageIndex * pageSize)
      .limit(pageSize)
      .exec((error, products) => {
        Product.countDocuments((error, count) => {
          if (error)
            return res.status(400).send({
              message: "Không lấy được dữ liệu!",
            });
          res.status(200).send({
            data: products,
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

exports.getByIdProduct = async (req, res) => {
  const { _id } = req.params;
  try {
    const response = await Product.findById(_id, FieldResultQueryProduct);
    res.status(200).send({
      data: response,
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.createProduct = async (req, res) => {
  const payload = req.body;
  const { price, sale_price = 0, product_name } = payload;
  if (!payload.percentage_discount) {
    payload.percentage_discount = percentageDiscount(price, sale_price);
  }
  const { error } = productVal(payload);
  if (error)
    return res.status(400).send({
      message: error.details[0].message,
    });
  const productNameExist = await Product.findOne({ product_name });
  if (productNameExist)
    return res.status(400).send({
      message: "Sản phẩm này đã tồn tại!",
    });
  const product = new Product({
    ...payload,
  });
  try {
    await product.save();
    res.status(200).send({
      message: "Tạo sản phẩm thành công!",
    });
  } catch (error) {
    res.status(400).send({
      message: error,
    });
  }
};

exports.updateProduct = async (req, res) => {
  const { _id } = req.params;
  const { error } = productVal(req.body);
  if (error)
    return res.status(400).send({
      message: error.details[0].message,
    });
  try {
    await Product.updateOne(
      { _id },
      {
        ...req.body,
      }
    );
    res.status(200).send({
      message: "Chỉnh sửa sản phẩm thành công!",
    });
  } catch (error) {
    res.status(400).send({
      message: error,
    });
  }
};

exports.destroyProduct = async (req, res) => {
  const { _id } = req.params;
  try {
    await Product.deleteOne({ _id });
    res.send({
      message: "Xóa sản phẩm thành công",
    });
  } catch (error) {
    res.status(400).send({
      message: error,
    });
  }
};

exports.addProducts = async (req, res) => {
  try {
    const workbook = xlsx.readFile(req.file.path);
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const jsonData = xlsx.utils.sheet_to_json(worksheet);

    // Save the data to MongoDB
    Product.insertMany(jsonData, (error, docs) => {
      if (error) {
        return res.status(500).json({ message: "Không thể nhập dữ liệu." });
      }
      res.status(200).json({ message: "Dữ liệu đã được nhập thành công." });
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Tập tin không hợp lệ." });
  }
};

/* <- - - Admin - - -> */
exports.getProductAdmin = async (req, res) => {
  const params = req.query;
  const pageIndex = parseInt(params.pageIndex) - 1 || 0;
  const pageSize = parseInt(params.pageSize) || 5;
  const query = {
    $or: [
      {
        product_name: new RegExp(params.name, "i"),
      },
      {
        barcode: new RegExp(params.name, "i"),
      },
    ],
  };

  try {
    Product.find(query, FieldResultQueryProductAdmin)
      .sort({
        createdAt: "desc",
      })
      .skip(pageIndex * pageSize)
      .limit(pageSize)
      .exec((error, products) => {
        Product.countDocuments((error, count) => {
          if (error)
            return res.status(400).send({
              message: "Lỗi!",
            });
          res.send({
            data: products,
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

exports.getByIdProductAdmin = async (req, res) => {
  const { _id } = req.params;
  try {
    const response = await Product.findById(
      _id,
      FieldResultQueryProductByIdAdmin
    );
    res.send({
      data: response,
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.updateProductAdmin = async (req, res) => {
  const { _id } = req.params;
  const { error } = productVal(req.body);
  if (error)
    return res.status(400).send({
      message: error.details[0].message,
    });
  try {
    await Product.updateOne(
      { _id },
      {
        ...req.body,
      }
    );
    res.send({
      message: "Chỉnh sửa sản phẩm thành công!",
    });
  } catch (error) {
    res.status(400).send({
      message: error,
    });
  }
};
