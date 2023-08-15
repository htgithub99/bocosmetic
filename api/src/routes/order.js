const order = require("../controllers/order.controller");
const verifyAuth = require("./verifyToken");
const { upload__ } = require("../constants");

module.exports = (app) => {
  const router = require("express").Router();
  // router.delete("/api/order/delete/:id", verifyAuth, product.destroyProduct);
  router.put("/api/order/update/:id", verifyAuth, order.updateOrder);
  router.get("/api/order/:id", verifyAuth, order.getByIdOrder);
  router.post("/api/order/create", verifyAuth, order.createOrder);
  router.get("/api/order", verifyAuth, order.getOrder);
  router.post(
    "/api/order/add-orders",
    upload__.single("file"),
    verifyAuth,
    order.addOrders
  );
  app.use(router);
};
