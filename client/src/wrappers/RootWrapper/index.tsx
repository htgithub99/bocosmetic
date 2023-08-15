import { FloatButton } from "antd";
import { RoutePath } from "constants/constant";
import { lazy, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import AuthWrapper from "wrappers/AuthWrapper";

const PageFooter = lazy(() => import("components/PageFooter"));
const PageHeader = lazy(() => import("components/PageHeader"));
const ProductDetail = lazy(() => import("pages/ProductDetail"));
const Home = lazy(() => import("pages/Home"));
const MainPage = lazy(() => import("pages/MainPage"));
const Contact = lazy(() => import("pages/Contact"));
const Blog = lazy(() => import("pages/Blog"));
const ShoppingCart = lazy(() => import("pages/ShoppingCart"));
const Payment = lazy(() => import("pages/Payment"));

const ListRoute = [
  RoutePath.FLASH_SALE_PAGE,
  RoutePath.PERFUME_PAGE,
  RoutePath.LIPSTICK_PAGE,
  RoutePath.SUNSCREEN_PAGE,
  RoutePath.FACIAL_MAKEUP_PAGE,
  RoutePath.EYE_MAKEUP_PAGE,
  RoutePath.SKIN_CAKE_PAGE,
  RoutePath.GIFT_PAGE,
  RoutePath.OTHER_PAGE,
];

export default function AppWrapper() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <div className="root-wrapper">
      <PageHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path={`${RoutePath.PRODUCT_PAGE}/:id`}
          element={<ProductDetail />}
        />
        {ListRoute.map((item) => (
          <Route path={`${item}/:categoryId`} element={<MainPage />} />
        ))}
        <Route path={RoutePath.CONTACT_PAGE} element={<Contact />} />
        <Route path={`${RoutePath.BLOG_PAGE}/:blogId`} element={<Blog />} />
        <Route path={RoutePath.SHOPPING_CART_PAGE} element={<ShoppingCart />} />
        <Route path={RoutePath.PAYMENT_PAGE} element={<Payment />} />
        <Route path="/*" element={<AuthWrapper />}></Route>
      </Routes>
      <PageFooter />
      <FloatButton.BackTop />
    </div>
  );
}
