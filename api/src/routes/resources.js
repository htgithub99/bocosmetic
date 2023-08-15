const resources = require("../controllers/resources.controller");

module.exports = (app) => {
  const router = require("express").Router();
  router.get("/api/resources", resources.getResources);
  // router.delete("/api/resources/delete/:id", verifyAuth, product.destroyProduct);
  // router.put("/api/resources/update/:id", verifyAuth, product.updateProduct);
  // router.get("/api/resources/:id", verifyAuth, product.getByIdProduct);
  router.put("/api/resources/update/:_id", resources.updateResources);
  router.post("/api/resources/create", resources.createResources);
  app.use(router);
};
