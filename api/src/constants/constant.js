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
  description: 1
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
  intial_price: 1,
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
  images: 1,
};

const RoutePath = {
  /* <- - - LOGIN - - -> */
  LOGIN_PATH: "/api/client-auth/login",
  LOGIN_ADMIN_PATH: "/api/admin/client-auth/login",
  REGISTER_PATH: "/api/client-auth/register",
  REGISTER_ADMIN_PATH: "/api/admin/client-auth/register",
  /* <- - - CATEGORY - - -> */
  CATEGORY_CREATE_PATH: "/api/category/create",
  CATEGORY_UPDATE_PATH: "/api/category/update",
  CATEGORY_LIST_PATH: "/api/category",
  CATEGORY_LIST_ADMIN_PATH: "/api/admin/category",
  /* <- - - CUSTOMERS - - -> */
  CUSTOMERS_ADD_PATH: "/api/customer/add-customers",
  /* <- - - ORDER - - -> */
  ORDER_GET_BY_ID_ADMIN_PATH: "/api/admin/order/:_id",
  ORDER_UPDATE_ADMIN_PATH: "/api/admin/order/update/:_id",
  ORDER_CREATE_ADMIN_PATH: "/api/admin/order/create",
  ORDER_LIST_ADMIN_PATH: "/api/admin/order",
  ORDER_ADD_PATH: "/api/order/add-orders",
  /* <- - - POST - - -> */
  POST_DELETE_PATH: "/api/post/delete/:_id",
  POST_UPDATE_PATH: "/api/post/update/:_id",
  POST_GET_BY_ID_PATH: "/api/post/:_id",
  POST_CREATE_PATH: "/api/post/create",
  POST_LIST_PATH: "/api/post",
  POST_DELETE_ADMIN_PATH: "/api/admin/post/delete/:_id",
  POST_UPDATE_ADMIN_PATH: "/api/admin/post/update/:_id",
  POST_GET_BY_ID_ADMIN_PATH: "/api/admin/post/:_id",
  POST_CREATE_ADMIN_PATH: "/api/admin/post/create",
  POST_LIST_ADMIN_PATH: "/api/admin/post",
  /* <- - - PRODUCT - - -> */
  PRODUCT_GET_TOP_PAGE_PATH: "/api/product/get-product-top-page",
  PRODUCT_GET_BY_CATEGORY_PATH: "/api/product/get-product-by-category",
  PRODUCT_GET_BY_FILTER_PATH: "/api/product/get-filter-by-product",
  PRODUCT_GET_BY_ID_PATH: "/api/product/:_id",
  PRODUCT_DELETE_ADMIN_PATH: "/api/admin/product/delete/:_id",
  PRODUCT_CREATE_ADMIN_PATH: "/api/admin/product/create",
  PRODUCT_UPDATE_ADMIN_PATH: "/api/admin/product/update/:_id",
  PRODUCT_GET_BY_ID_ADMIN_PATH: "/api/admin/product/:_id",
  PRODUCT_LIST_ADMIN_PATH: "/api/admin/product",
  PRODUCT_ADD_ADMIN_PATH: "/api/admin/product/add-products",
  /* <- - - RESOURCES - - -> */
  RESOURCES_LIST_PATH: "/api/resources",
  RESOURCES_UPDATE_PATH: "/api/resources/update/:_id",
  RESOURCES_CREATE_PATH: "/api/resources/create",
  /* <- - - UPLOAD - - -> */
  UPLOAD_PATH: "/api/upload",
  UPLOAD_ADMIN_PATH: "/api/admin/upload",
  UPLOAD_ADMIN_MULTIPLE_PATH: "/api/admin/upload-multiple",
};

module.exports = {
  SortOrder,
  TypeTopPage,
  TypeCategoryID,
  FieldByProduct,
  FieldResultQueryProduct,
  FieldResultQueryProductAdmin,
  FieldResultQueryProductByIdAdmin,
  RoutePath,
};
