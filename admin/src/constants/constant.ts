export const RoutePath = {
  HOME_PATH: "/",
  LOGIN_PATH: "/login",
  PRODUCT_PATH: "/product",
  PRODUCT_LIST_PATH: "/product/list",
  PRODUCT_VARIANTS_PATH: "/product/variants",
  PRODUCT_ORDER_PATH: "/product/order",
  PRODUCT_PURCHASE_ORDERS_PATH: "/product/purchase-orders",
  PRODUCT_CHECK_GOODS_PATH: "/product/check-goods",
  PRODUCT_SHIPPING_PATH: "/product/shipping",
  PRODUCT_SUPPLIER_PATH: "/product/supplier",
  PRODUCT_CAPPITAL_PRICE_ADJUSTMENT_PATH: "/product/capital-price-adjustment",
  ORDER_PATH: "/order",
  ORDER_CREATE_PATH: "/order/create",
  ORDER_LIST_PATH: "/order/list",
  ORDER_CUSTOMER_PAYS_PATH: "/order/customer-pays",
  CLIENT_PATH: "/client",
  CLIENT_LIST_PATH: "/client/list",
  CLIENT_CUSTOMER_GROUP_PATH: "/client/customer-group",
  SELLING_COUNTER_PATH: "/selling-counter",
  MANAGE_POST_LIST_PATH: "/post/list",
};

export const RoutePathApi = {
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
  ORDER_GET_BY_ID_ADMIN_PATH: "/api/admin/order/:id",
  ORDER_UPDATE_ADMIN_PATH: "/api/admin/order/update/:id",
  ORDER_CREATE_ADMIN_PATH: "/api/admin/order/create",
  ORDER_LIST_ADMIN_PATH: "/api/admin/order",
  ORDER_ADD_PATH: "/api/order/add-orders",
  /* <- - - POST - - -> */
  POST_DELETE_PATH: "/api/post/delete/:id",
  POST_UPDATE_PATH: "/api/post/update/:id",
  POST_GET_BY_ID_PATH: "/api/post/:id",
  POST_CREATE_PATH: "/api/post/create",
  POST_LIST_PATH: "/api/post",
  /* <- - - PRODUCT - - -> */
  PRODUCT_DELETE_ADMIN_PATH: "/product/delete",
  PRODUCT_CREATE_ADMIN_PATH: "/product/create",
  PRODUCT_UPDATE_ADMIN_PATH: "/product/update",
  PRODUCT_GET_BY_ID_ADMIN_PATH: "/product",
  PRODUCT_LIST_ADMIN_PATH: "/product",
  PRODUCT_ADD_ADMIN_PATH: "/product/add-products",
  /* <- - - RESOURCES - - -> */
  RESOURCES_LIST_PATH: "/api/resources",
  RESOURCES_UPDATE_PATH: "/api/resources/update/:_id",
  RESOURCES_CREATE_PATH: "/api/resources/create",
  /* <- - - UPLOAD - - -> */
  UPLOAD_PATH: "/api/upload",
  UPLOAD_ADMIN_PATH: "/upload",
  UPLOAD_ADMIN_MULTIPLE_PATH: "/upload-multiple"
};

export const QueryKey = {
  LIST_PRODUCT_KEY: "LIST_PRODUCT_KEY",
  LIST_POST_KEY: "LIST_POST_KEY",
  GET_CATEGORY_KEY: "GET_CATEGORY_KEY",
  LIST_PRODUCT_CREATE_KEY: "LIST_PRODUCT_CREATE_KEY",
  GET_BY_ID_PRODUCT: "GET_BY_ID_PRODUCT",
  LIST_ORDER_KEY: "LIST_ORDER_KEY",
  GET_BY_ID_ORDER: "GET_BY_ID_ORDER",
  TOGGLE_MENU_KEY: "TOGGLE_MENU_KEY",
};

export const TypeButton = {
  DELETE: "delete",
  EDIT: "edit",
};

export const OPTIONS_BRANCH = [
  {
    value: "Cơ sở 1",
    label: "Cơ sở 1",
  },
  {
    value: "Cơ sở 2",
    label: "Cơ sở 2",
  },
];

export const OPTIONS_STATUS_ORDER = [
  {
    value: "Đặt hàng",
    label: "Đặt hàng",
  },
  {
    value: "Đang giao dịch",
    label: "Đang giao dịch",
  },
  {
    value: "Hoàn thành",
    label: "Hoàn thành",
  },
  {
    value: "Đã hủy",
    label: "Đã hủy",
  },
];

export const OPTIONS_STATUS_PAYMENT_ORDER = [
  {
    value: "Chưa thanh toán",
    label: "Chưa thanh toán",
  },
  {
    value: "Thanh toán một phần",
    label: "Thanh toán một phần",
  },
  {
    value: "Thanh toán toàn bộ",
    label: "Thanh toán toàn bộ",
  },
];

export const HIEGHT_TABLE_SCROLL = 400
