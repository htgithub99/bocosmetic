const category = require("../controllers/category.controller");
const verifyAuth = require("./verifyToken");

module.exports = (app) => {
  const router = require("express").Router();
  // router.delete("/api/category/delete/:id", verifyAuth, product.destroyProduct);
  // router.put("/api/category/update/:id", verifyAuth, product.updateProduct);
  // router.get("/api/category/:id", verifyAuth, product.getByIdProduct);
  router.post("/api/category/create", category.createCategory);
  router.post("/api/category/update", category.updateCategory);
  router.get("/api/category", category.getCategory);
  app.use(router);
};
