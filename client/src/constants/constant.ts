export const RoutePath = {
  HOME_PAGE: "/",
  CONTACT_PAGE: "/contact",
  FLASH_SALE_PAGE: "/flashsale",
  PRODUCT_PAGE: "/product",
  PERFUME_PAGE: "/perfume",
  LIPSTICK_PAGE: "/lipstick",
  SUNSCREEN_PAGE: "/sunscreen",
  FACIAL_MAKEUP_PAGE: "/facial-makeup",
  EYE_MAKEUP_PAGE: "/eye_makeup",
  SKIN_CAKE_PAGE: "/skin_care",
  GIFT_PAGE: "/gift",
  OTHER_PAGE: "/others",
  SHOPPING_CART_PAGE: "/shopping-cart",
  PAYMENT_PAGE: "/payment",
  BLOG_PAGE: "/blog",
};

export const ReactQueryKey = {
  TOGGLE_MENU_KEY: "TOGGLE_MENU_KEY",
  GET_PRODUCT_BY_CATEGORY_KEY: "GET_PRODUCT_BY_CATEGORY_KEY",
  GET_CATEGORY_KEY: "GET_CATEGORY_KEY",
  GET_RESOURCES_KEY: "GET_RESOURCES_KEY",
  GET_PRODUCT_TOP_PAGE_KEY: "GET_PRODUCT_TOP_PAGE_KEY",
  GET_PRODUCT_DETAIL_KEY: "GET_PRODUCT_DETAIL_KEY",
  GET_INFO_PRODUCT_KEY: "GET_INFO_PRODUCT_KEY",
  LOCAL_STRORAGE_KEY: "LOCAL_STRORAGE_KEY",
  GET_POST_KEY: "GET_POST_KEY",
  GET_POST_DETAIL_KEY: "GET_POST_DETAIL_KEY"
};

export const TypeTopPage = {
  PARCENTAGE_DISCOUNT: 1,
  QUANTITY_SOLD: 2,
  NUMBER_OF_REVIEWS: 3,
};

export const TypeCategoryID = {
  lipstick: 1,
  perfume: 2,
  sunscreen: 3,
  facial_makeup: 4,
  eye_makeup: 5,
  skin_care: 6,
  gift: 7,
  others: 8,
  parcentage_discount: 9,
  home: 10,
};

export const CATEGORY_PARENT_TYPE = [
  {
    category_name: "Son môi", //lipstick
    category_id: 1,
  },
  {
    category_name: "Nước hoa", //perfume
    category_id: 2,
  },
  {
    category_name: "Chống nắng", //sunscreen
    category_id: 3,
  },
  {
    category_name: "Trang điểm mặt", //facial_makeup
    category_id: 4,
  },
  {
    category_name: "Trang điểm mắt", //eye_makeup
    category_id: 5,
  },
  {
    category_name: "Chăm sóc da", //skin_care
    category_id: 6,
  },
  {
    category_name: "Quà tặng", //gift
    category_id: 7,
  },
  {
    category_name: "Sản phẩm khác", //others
    category_id: 8,
  },
];

export const NAME_OF_THE_PAGE = {
  promotion: "Khuyến mãi",
  home: "Trang chủ",
};

export const LocalStorageKey = {
  CART_TO_USER_KEY: "cart_to_user",
};
