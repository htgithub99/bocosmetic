const upload = require("../controllers/upload.controller");
const verifyAuth = require("./verifyToken");
const { upload__ } = require("../constants");
const { RoutePath } = require("../constants/constant");

module.exports = (app) => {
  const router = require("express").Router();
  router.post(
    RoutePath.UPLOAD_PATH,
    upload__.single("file"),
    verifyAuth,
    upload.uploads
  );

  /* <- - - Admin - - -> */
  router.post(
    RoutePath.UPLOAD_ADMIN_PATH,
    upload__.single("file"),
    verifyAuth,
    upload.uploads
  );
  
  router.post(
    RoutePath.UPLOAD_ADMIN_MULTIPLE_PATH,
    upload__.array("file", 5),
    verifyAuth,
    upload.uploadsMultiple
  );
  app.use(router);
};
