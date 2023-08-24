const category = require("../controllers/category.controller");
const verifyAuth = require("./verifyToken");
const { RoutePath } = require("../constants/constant");

module.exports = (app) => {
  const router = require("express").Router();
  // router.delete("/api/category/delete/:id", verifyAuth, product.destroyProduct);
  // router.put("/api/category/update/:id", verifyAuth, product.updateProduct);
  // router.get("/api/category/:id", verifyAuth, product.getByIdProduct);
  router.post(RoutePath.CATEGORY_CREATE_PATH, category.createCategory);
  router.post(RoutePath.CATEGORY_UPDATE_PATH, category.updateCategory);
  router.get(RoutePath.CATEGORY_LIST_PATH, category.getCategory);

  /* <- - - Admin - - -> */
  router.get(RoutePath.CATEGORY_LIST_ADMIN_PATH, verifyAuth, category.getCategory);
  app.use(router);
};
