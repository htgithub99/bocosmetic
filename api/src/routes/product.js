const product = require("../controllers/product.controller");
const verifyAuth = require("./verifyToken");
const { upload__ } = require("../constants");
const { RoutePath } = require("../constants/constant");

module.exports = (app) => {
  const router = require("express").Router();
  router.get(RoutePath.PRODUCT_GET_TOP_PAGE_PATH, product.getProductTopPage);
  router.get(
    RoutePath.PRODUCT_GET_BY_CATEGORY_PATH,
    product.getProductByCategory
  );
  router.get(RoutePath.PRODUCT_GET_BY_FILTER_PATH, product.getFilterByProduct);
  router.get(RoutePath.PRODUCT_GET_BY_ID_PATH, product.getByIdProduct);
  // router.post("/api/product/create", product.createProduct);
  // router.put("/api/product/update/:_id", product.updateProduct);
  // router.delete("/api/product/delete/:_id", verifyAuth, product.destroyProduct);
  // router.get("/api/product", verifyAuth, product.getProduct);

  /* <- - - Admin - - -> */
  router.delete(
    RoutePath.PRODUCT_DELETE_ADMIN_PATH,
    verifyAuth,
    product.destroyProduct
  );
  router.post(RoutePath.PRODUCT_CREATE_ADMIN_PATH, product.createProduct);
  router.put(
    RoutePath.PRODUCT_UPDATE_ADMIN_PATH,
    verifyAuth,
    product.updateProductAdmin
  );
  router.get(
    RoutePath.PRODUCT_GET_BY_ID_ADMIN_PATH,
    verifyAuth,
    product.getByIdProductAdmin
  );
  router.get(
    RoutePath.PRODUCT_LIST_ADMIN_PATH,
    verifyAuth,
    product.getProductAdmin
  );
  router.post(
    RoutePath.PRODUCT_ADD_ADMIN_PATH,
    upload__.single("file"),
    verifyAuth,
    product.addProducts
  );
  app.use(router);
};
