const order = require("../controllers/order.controller");
const verifyAuth = require("./verifyToken");
const { upload__ } = require("../constants");

module.exports = (app) => {
  const router = require("express").Router();
  // router.delete("/api/order/delete/:id", verifyAuth, product.destroyProduct);
  // router.put("/api/order/update/:id", verifyAuth, order.updateOrder);
  // router.get("/api/order/:id", verifyAuth, order.getByIdOrder);
  // router.post("/api/order/create", verifyAuth, order.createOrder);
  /* <- - - Admin - - -> */
  router.get("/api/admin/order/:id", verifyAuth, order.getByIdOrder);
  router.put("/api/admin/order/update/:id", verifyAuth, order.updateOrder);
  router.post("/api/admin/order/create", verifyAuth, order.createOrder);
  router.get("/api/admin/order", verifyAuth, order.getOrder);
  router.post(
    "/api/order/add-orders",
    upload__.single("file"),
    verifyAuth,
    order.addOrders
  );
  app.use(router);
};
