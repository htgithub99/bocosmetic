const Joi = require("@hapi/joi");

//VALIDATE AUTH
const registerVal = (data) => {
  const schema = Joi.object({
    name: Joi.string().max(50),
    address: Joi.string().max(50),
    phone: Joi.string().max(50),
    email: Joi.string().required().email().max(50),
    password: Joi.string().required().min(10).max(11),
  });
  return schema.validate(data);
};

const loginVal = (data) => {
  const schema = Joi.object({
    email: Joi.string().required().email().max(50),
    password: Joi.string().required().min(10).max(11),
  });
  return schema.validate(data);
};

//VALIDATE PRODUCT
const productVal = (data) => {
  const schema = Joi.object({
    product_name: Joi.string(),
    images: Joi.array(),
    price: Joi.number(),
    quantity: Joi.number(),
    quantity: Joi.number(),
    quantity_sold: Joi.number(),
    percentage_discount: Joi.number(),
    number_of_reviews: Joi.number(),
    branch: Joi.string(),
    barcode: Joi.number(),
    made_in: Joi.string(),
    description: Joi.string(),
    sale_price: Joi.number(),
    intial_price: Joi.number(),
    vendor_price: Joi.number(),
    category_id: Joi.number(),
    size: Joi.string(),
    color: Joi.string(),
    trade_mark: Joi.string(),
  });
  return schema.validate(data);
};

//VALIDATE ORDER
const orderVal = (data) => {
  const schema = Joi.object({
    code_order: Joi.string(),
    customer_id: Joi.string(),
    address: Joi.string(),
    order_status: Joi.string().required(),
    payment_status: Joi.string().required(),
    creator_order: Joi.string().required(),
    ordering_branch: Joi.string().required(),
    guest_must_pay: Joi.number().required(),
    product: Joi.array(),
  });
  return schema.validate(data);
};

//VALIDATE CUSTOMER
const customerVal = (data) => {
  const schema = Joi.object({
    phone: Joi.string(),
    customer_name: Joi.string(),
    score: Joi.number().required(),
    total_price: Joi.number().required(),
    birthday: Joi.string().required(),
    address: Joi.string().required(),
    debt_price: Joi.number().required(),
    number_order: Joi.number().required(),
  });
  return schema.validate(data);
};

//VALIDATE CATEGORY
const categoryVal = (data) => {
  const schema = Joi.object({
    category_name: Joi.string(),
    category_id: Joi.number(),
    parent_id: Joi.number(),
  });
  return schema.validate(data);
};

//VALIDATE POST
const postVal = (data) => {
  const schema = Joi.object({
    title: Joi.string(),
    image: Joi.string(),
    content: Joi.string(),
  });
  return schema.validate(data);
};

module.exports = {
  registerVal,
  loginVal,
  productVal,
  categoryVal,
  orderVal,
  customerVal,
  postVal,
};
