const resources = require("../controllers/resources.controller");
const { RoutePath } = require("../constants/constant");

module.exports = (app) => {
  const router = require("express").Router();
  // router.delete("/api/resources/delete/:id", verifyAuth, product.destroyProduct);
  // router.put("/api/resources/update/:id", verifyAuth, product.updateProduct);
  // router.get("/api/resources/:id", verifyAuth, product.getByIdProduct);
  router.get(RoutePath.RESOURCES_LIST_PATH, resources.getResources);
  router.put(RoutePath.RESOURCES_UPDATE_PATH, resources.updateResources);
  router.post(RoutePath.RESOURCES_CREATE_PATH, resources.createResources);
  app.use(router);
};
