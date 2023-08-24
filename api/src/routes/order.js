const order = require("../controllers/order.controller");
const verifyAuth = require("./verifyToken");
const { upload__ } = require("../constants");
const { RoutePath } = require("../constants/constant");

module.exports = (app) => {
  const router = require("express").Router();
  // router.delete("/api/order/delete/:id", verifyAuth, product.destroyProduct);
  // router.put("/api/order/update/:id", verifyAuth, order.updateOrder);
  // router.get("/api/order/:id", verifyAuth, order.getByIdOrder);
  // router.post("/api/order/create", verifyAuth, order.createOrder);
  /* <- - - Admin - - -> */
  router.get(
    RoutePath.ORDER_GET_BY_ID_ADMIN_PATH,
    verifyAuth,
    order.getByIdOrder
  );
  router.put(RoutePath.ORDER_UPDATE_ADMIN_PATH, verifyAuth, order.updateOrder);
  router.post(RoutePath.ORDER_CREATE_ADMIN_PATH, verifyAuth, order.createOrder);
  router.get(RoutePath.ORDER_LIST_ADMIN_PATH, verifyAuth, order.getOrder);
  router.post(
    RoutePath.ORDER_ADD_PATH,
    upload__.single("file"),
    verifyAuth,
    order.addOrders
  );
  app.use(router);
};
