import blogImg from "assets/images/blog-img.jpg";
import { RoutePath, TypeCategoryID } from "./constant";
import { IListBlogCard, IFilterProduct } from "./interface";

export const DATA_FAKE_LIST_PRODUCT_TYPE = [
  {
    category: "Tẩy da chết",
    id: 1,
    background: "#dcffd2",
  },
  {
    category: "Tẩy trang",
    id: 2,
    background: "rgb(255, 237, 180)",
  },
  {
    category: "Sữa rửa mặt",
    id: 3,
    background: "rgb(223, 228, 255)",
  },
  {
    category: "Toner",
    id: 4,
    background: "rgb(255, 234, 204)",
  },
  {
    category: "Kem dưỡng",
    id: 5,
    background: "rgb(255, 218, 224)",
  },
  {
    category: "Kem chống nắng",
    id: 6,
    background: "rgb(255, 243, 218)",
  },
  {
    category: "Kem dưỡng body",
    id: 7,
    background: "rgb(255, 243, 218)",
  },
  {
    category: "Dầu gội",
    id: 8,
    background: "rgb(255, 243, 218)",
  },
  {
    category: "Sữa tắm",
    id: 9,
    background: "rgb(255, 243, 218)",
  },
  {
    category: "Thực phẩm chức năng",
    id: 10,
    background: "rgb(255, 243, 218)",
  },
];

export const BACKGROUND_LIST_PRODUCT_TYPE = [
  "#dcffd2",
  "rgb(255, 237, 180)",
  "rgb(223, 228, 255)",
  "rgb(255, 234, 204)",
  "rgb(255, 218, 224)",
  "rgb(255, 243, 218)",
  "rgb(255, 237, 180)",
  "rgb(223, 228, 255)",
  "rgb(255, 234, 204)",
  "#dcffd2",
  "rgb(255, 237, 180)",
  "#dcffd2",
  "rgb(255, 237, 180)",
  "rgb(223, 228, 255)",
  "rgb(255, 234, 204)",
  "rgb(255, 218, 224)",
  "rgb(255, 243, 218)",
  "rgb(255, 237, 180)",
  "rgb(223, 228, 255)",
  "rgb(255, 234, 204)",
  "#dcffd2",
  "rgb(255, 237, 180)",
  "#dcffd2",
  "rgb(255, 237, 180)",
  "rgb(223, 228, 255)",
  "rgb(255, 234, 204)",
  "rgb(255, 218, 224)",
  "rgb(255, 243, 218)",
  "rgb(255, 237, 180)",
  "rgb(223, 228, 255)",
  "rgb(255, 234, 204)",
  "#dcffd2",
  "rgb(255, 237, 180)",
  "#dcffd2",
  "rgb(255, 237, 180)",
  "rgb(223, 228, 255)",
  "rgb(255, 234, 204)",
  "rgb(255, 218, 224)",
  "rgb(255, 243, 218)",
  "rgb(255, 237, 180)",
  "rgb(223, 228, 255)",
  "rgb(255, 234, 204)",
  "#dcffd2",
  "rgb(255, 237, 180)",
  "#dcffd2",
  "rgb(255, 237, 180)",
  "rgb(223, 228, 255)",
  "rgb(255, 234, 204)",
  "rgb(255, 218, 224)",
  "rgb(255, 243, 218)",
  "rgb(255, 237, 180)",
  "rgb(223, 228, 255)",
  "rgb(255, 234, 204)",
  "#dcffd2",
  "rgb(255, 237, 180)",
  "#dcffd2",
  "rgb(255, 237, 180)",
  "rgb(223, 228, 255)",
  "rgb(255, 234, 204)",
  "rgb(255, 218, 224)",
  "rgb(255, 243, 218)",
  "rgb(255, 237, 180)",
  "rgb(223, 228, 255)",
  "rgb(255, 234, 204)",
  "#dcffd2",
  "rgb(255, 237, 180)",
];

export const DATA_FAKE_LIST_PRODUCT = [
  {
    url: "https://htmldemo.net/brancy/brancy/assets/images/shop/1.webp",
    id: 1,
    star: 4,
    name: "Sữa Rửa Mặt Cosrx Low pH Good Morning Gel Cleanser 150ml",
    price: 400,
    slot: 997,
    pro_price: 275,
    off_sale: 70,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius velit corporis quo voluptate culpa soluta, esse accusamus, sunt quia omnis amet temporibus sapiente harum quam itaque libero tempore. Ipsum, ducimus. lorem",
  },
  {
    url: "https://htmldemo.net/brancy/brancy/assets/images/shop/2.webp",
    id: 2,
    star: 4,
    name: "Modern Eye Brush",
    price: 900,
    slot: 807,
    pro_price: 799,
    off_sale: 70,
  },
  {
    url: "https://htmldemo.net/brancy/brancy/assets/images/shop/3.webp",
    id: 3,
    star: 4,
    name: "Modern Eye Brush",
    price: 500,
    slot: 907,
    pro_price: 395,
    off_sale: 70,
  },
  {
    url: "https://htmldemo.net/brancy/brancy/assets/images/shop/4.webp",
    id: 4,
    star: 4,
    name: "Modern Eye Brush",
    price: 500,
    slot: 997,
    pro_price: 275,
    off_sale: 70,
  },
  {
    url: "https://htmldemo.net/brancy/brancy/assets/images/shop/5.webp",
    id: 5,
    star: 4,
    name: "Modern Eye Brush",
    price: 500,
    slot: 997,
    pro_price: 275,
    off_sale: 70,
  },
  {
    url: "https://htmldemo.net/brancy/brancy/assets/images/shop/6.webp",
    id: 6,
    star: 4,
    name: "Sữa Rửa Mặt Cosrx Low pH Good Morning Gel Cleanser 150ml",
    price: 500,
    slot: 997,
    pro_price: 275,
    off_sale: 70,
  },
];

export const DATA_FAKE_LIST_BANNER = [
  {
    url: "https://htmldemo.net/brancy/brancy/assets/images/slider/slider2.webp",
    id: 1,
  },
  {
    url: "https://htmldemo.net/brancy/brancy/assets/images/slider/slider1.webp",
    id: 2,
  },
  {
    url: "https://htmldemo.net/brancy/brancy/assets/images/slider/slider2.webp",
    id: 3,
  },
];

export const LIST_MENU = [
  {
    id: 10,
    link_name: "Trang chủ",
    href: RoutePath.HOME_PAGE,
  },
  {
    id: TypeCategoryID.parcentage_discount,
    link_name: "Khuyến mãi",
    href: `${RoutePath.FLASH_SALE_PAGE}/${TypeCategoryID.parcentage_discount}`,
  },
  {
    id: TypeCategoryID.lipstick,
    link_name: "Son môi",
    href: `${RoutePath.LIPSTICK_PAGE}/${TypeCategoryID.lipstick}`,
  },
  {
    id: TypeCategoryID.perfume,
    link_name: "Nước hoa",
    href: `${RoutePath.PERFUME_PAGE}/${TypeCategoryID.perfume}`,
  },
  {
    id: TypeCategoryID.sunscreen,
    link_name: "Chống nắng",
    href: `${RoutePath.SUNSCREEN_PAGE}/${TypeCategoryID.sunscreen}`,
  },
  {
    id: TypeCategoryID.facial_makeup,
    link_name: "Trang điểm mặt",
    href: `${RoutePath.FACIAL_MAKEUP_PAGE}/${TypeCategoryID.facial_makeup}`,
  },
  {
    id: TypeCategoryID.eye_makeup,
    link_name: "Trang điểm mắt",
    href: `${RoutePath.EYE_MAKEUP_PAGE}/${TypeCategoryID.eye_makeup}`,
  },
  {
    id: TypeCategoryID.skin_care,
    link_name: "Chăm sóc da",
    href: `${RoutePath.SKIN_CAKE_PAGE}/${TypeCategoryID.skin_care}`,
  },
  {
    id: TypeCategoryID.gift,
    link_name: "Quà tặng",
    href: `${RoutePath.GIFT_PAGE}/${TypeCategoryID.gift}`,
  },
  {
    id: TypeCategoryID.others,
    link_name: "Sản phẩm khác",
    href: `${RoutePath.OTHER_PAGE}/${TypeCategoryID.others}`,
  },
];

export const LIST_FOOTER_MENU_ONE = [
  {
    id: 1,
    link_name: "Trang chủ",
    href: RoutePath.HOME_PAGE,
  },
  {
    id: 2,
    link_name: "Khuyến mãi",
    href: `${RoutePath.FLASH_SALE_PAGE}/${TypeCategoryID.parcentage_discount}`,
  },
  {
    id: 3,
    link_name: "Nước hoa",
    href: `${RoutePath.PERFUME_PAGE}/${TypeCategoryID.perfume}`,
  },
  {
    id: 4,
    link_name: "Son môi",
    href: `${RoutePath.PERFUME_PAGE}/${TypeCategoryID.lipstick}`,
  },
  {
    id: 5,
    link_name: "Chống nắng",
    href: `${RoutePath.PERFUME_PAGE}/${TypeCategoryID.sunscreen}`,
  },
];

export const LIST_FOOTER_MENU_TWO = [
  {
    id: 1,
    link_name: "Giới thiệu",
    href: RoutePath.CONTACT_PAGE,
  },
  {
    id: 2,
    link_name: "Liên hệ",
    href: "#",
  },
  {
    id: 3,
    link_name: "Hướng dẫn mua hàng",
    href: "#",
  },
  {
    id: 4,
    link_name: "Theo dõi đơn hàng",
    href: "#",
  },
  {
    id: 5,
    link_name: "Chính sách vận chuyển",
    href: "#",
  },
];

export const LIST_CATEGORY_SIDE_NAV: IFilterProduct[] = [
  {
    title: "Xuất xứ",
    item: [
      {
        category: "Ba Lan",
        count: 20,
      },
      {
        category: "Hàn Quốc",
        count: 20,
      },
      {
        category: "Mỹ",
        count: 20,
      },
      {
        category: "Nhật",
        count: 20,
      },
    ],
  },
  {
    title: "Thương hiệu",
    item: [
      {
        category: "Armaf",
        count: 20,
      },
    ],
  },
];

export const DATA_FAKE_LIST_BLOG: IListBlogCard[] = [
  {
    _id: 1,
    title: "Top 5 Chai Nước Hoa Nữ Dịu Nhẹ Cho Dân Công Sở",
    image: 'https://images.pexels.com/photos/2113855/pexels-photo-2113855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    _id: 2,
    title: "Những Mùi Hương Nước Hoa Nam Đạt Điểm Số 10",
    image: 'https://images.pexels.com/photos/3750640/pexels-photo-3750640.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    _id: 3,
    title: "Nước Hoa Cao Cấp: Khi Sắc Hương Trở Thành Nghệ Thuật",
    image: blogImg,
  },
  {
    _id: 4,
    title: "Top 5 Chai Body Mist Thơm Lâu Được Yêu Thích Nhất",
    image: 'https://images.pexels.com/photos/3685523/pexels-photo-3685523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    _id: 5,
    title: "Top 5 Thỏi Son Dưỡng Dior Được Yêu Thích Nhất Hiện Nay",
    image: 'https://images.pexels.com/photos/7281709/pexels-photo-7281709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    _id: 6,
    title: "Son Dưỡng YSL: Sự Sang Trọng Và Chất Lượng Đỉnh Cao",
    image: 'https://images.pexels.com/photos/11309261/pexels-photo-11309261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];

export const LIST_CONTACT_INFO = [
  {
    id: 1,
    title: "Thông tin liên hệ:",
    content: [
      {
        sub_title: "CS1:",
        sub_content: "Thái nguyên",
      },
      {
        sub_title: "Email:",
        sub_content: "bocosmetic@gmail.com",
      },
      {
        sub_title: "DT:",
        sub_content: "0123456789",
      },
      {
        sub_title: "Website:",
        sub_content: "www.bocosmetic.vn",
      },
    ],
  },
  {
    id: 2,
    title: "Thông tin thanh toán:",
    content: [
      {
        sub_title: "CS1:",
        sub_content: "Thái nguyên",
      },
      {
        sub_title: "Email:",
        sub_content: "bocosmetic@gmail.com",
      },
      {
        sub_title: "DT:",
        sub_content: "0123456789",
      },
      {
        sub_title: "Website:",
        sub_content: "www.bocosmetic.vn",
      },
    ],
  },
];
