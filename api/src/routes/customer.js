const customer = require("../controllers/customer.controller");
const verifyAuth = require("./verifyToken");
const { upload__ } = require("../constants");

module.exports = (app) => {
  const router = require("express").Router();
  //   router.delete("/api/customer/delete/:_id", verifyAuth, product.destroyProduct);
  //   router.put("/api/customer/update/:_id", verifyAuth, product.updateProduct);
  //   router.get("/api/customer/:_id", verifyAuth, product.getByIdProduct);
  //   router.post("/api/customer/create", verifyAuth, product.createProduct);
  //   router.get("/api/customer", verifyAuth, product.getProduct);
  router.post(
    "/api/customer/add-customers",
    upload__.single("file"),
    verifyAuth,
    customer.addCustomers
  );
  app.use(router);
};
