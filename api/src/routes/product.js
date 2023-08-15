const product = require("../controllers/product.controller");
const verifyAuth = require("./verifyToken");
const { upload__ } = require("../constants");

module.exports = (app) => {
  const router = require("express").Router();
  router.get("/api/product/get-product-top-page", product.getProductTopPage);
  router.get(
    "/api/product/get-product-by-category",
    product.getProductByCategory
  );
  router.get(
    "/api/product/get-filter-by-product",
    product.getFilterByProduct
  );
  router.post("/api/product/create", product.createProduct);
  router.get("/api/product/:_id", product.getByIdProduct);
  router.put("/api/product/update/:_id", product.updateProduct);
  router.delete("/api/product/delete/:_id", verifyAuth, product.destroyProduct);
  router.get("/api/product", verifyAuth, product.getProduct);
  router.post(
    "/api/product/add-products",
    upload__.single("file"),
    verifyAuth,
    product.addProducts
  );
  app.use(router);
};
