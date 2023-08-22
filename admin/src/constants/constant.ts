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
  SELLING_COUNTER_PATH: "selling-counter",
};

export const QueryKey = {
  LIST_PRODUCT_KEY: "LIST_PRODUCT_KEY",
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
