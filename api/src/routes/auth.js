const auth = require("../controllers/auth.controller");
// const authMiddleware = require("../middlewares/auth.middleware");
const { RoutePath } = require("../constants/constant");
module.exports = (app) => {
  const router = require("express").Router();
  // router.post(RoutePath.LOGIN_PATH, auth.login);
  // router.post(RoutePath.REGISTER_PATH, auth.register);

  /* <- - - Admin - - -> */
  router.post(RoutePath.LOGIN_ADMIN_PATH, auth.login);
  router.post(RoutePath.REGISTER_ADMIN_PATH, auth.register);
  app.use(router);
};
