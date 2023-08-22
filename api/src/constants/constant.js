const TypeTopPage = {
  PARCENTAGE_DISCOUNT: 1,
  QUANTITY_SOLD: 2,
  NUMBER_OF_REVIEWS: 3,
};

const SortOrder = {
  DESC: "desc",
  ASC: "asc",
};

const TypeCategoryID = {
  lipstick: 1,
  perfume: 2,
  sunscreen: 3,
  facial_makeup: 4,
  eye_makeup: 5,
  skin_care: 6,
  gift: 7,
  others: 8,
  parcentage_discount: 9,
};

const FieldByProduct = [
  {
    title: "Xuất xứ",
    field: "made_in",
  },
  {
    title: "Thương hiệu",
    field: "trade_mark",
  },
  {
    title: "Màu sắc",
    field: "color",
  },
  {
    title: "Dung tích",
    field: "size",
  },
];

const FieldResultQueryProduct = {
  product_name: 1,
  trade_mark: 1,
  quantity: 1,
  quantity_sold: 1,
  percentage_discount: 1,
  number_of_reviews: 1,
  category_id: 1,
  price: 1,
  sale_price: 1,
  images: 1,
  made_in: 1,
};

const FieldResultQueryProductAdmin = {
  product_name: 1,
  trade_mark: 1,
  quantity: 1,
  quantity_sold: 1,
  percentage_discount: 1,
  number_of_reviews: 1,
  category_id: 1,
  price: 1,
  sale_price: 1,
  images: 1,
  made_in: 1,
  barcode: 1,
};

const FieldResultQueryProductByIdAdmin = {
  product_name: 1,
  intial_price: 1,
  category_id: 1,
  barcode: 1,
  vendor_price: 1,
  price: 1,
  quantity: 1,
  branch: 1,
};

module.exports = {
  SortOrder,
  TypeTopPage,
  TypeCategoryID,
  FieldByProduct,
  FieldResultQueryProduct,
  FieldResultQueryProductAdmin,
  FieldResultQueryProductByIdAdmin,
};
