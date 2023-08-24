const post = require("../controllers/post.controller");
const { RoutePath } = require("../constants/constant");

module.exports = (app) => {
  const router = require("express").Router();
  // router.delete(RoutePath.POST_DELETE_PATH, post.destroyPost);
  // router.put(RoutePath.POST_UPDATE_PATH, post.updatePost);
  // router.post(RoutePath.POST_CREATE_PATH, post.createPost);
  router.get(RoutePath.POST_GET_BY_ID_PATH, post.getByIdPost);
  router.get(RoutePath.POST_LIST_PATH, post.getPost);

  /* <- - - Admin - - -> */
  router.delete(RoutePath.POST_DELETE_ADMIN_PATH, post.destroyPost);
  router.put(RoutePath.POST_UPDATE_ADMIN_PATH, post.updatePost);
  router.post(RoutePath.POST_CREATE_ADMIN_PATH, post.createPost);
  router.get(RoutePath.POST_GET_BY_ID_ADMIN_PATH, post.getByIdPost);
  router.get(RoutePath.POST_LIST_ADMIN_PATH, post.getPost);
  app.use(router);
};
