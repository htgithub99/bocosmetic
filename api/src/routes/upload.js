const upload = require("../controllers/upload.controller");
const verifyAuth = require("./verifyToken");
const { upload__ } = require("../constants");

module.exports = (app) => {
  const router = require("express").Router();
  router.post(
    "/api/upload",
    upload__.single("image"),
    verifyAuth,
    upload.uploads
  );
  app.use(router);
};
