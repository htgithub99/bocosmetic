const post = require("../controllers/post.controller");

module.exports = (app) => {
  const router = require("express").Router();
  router.delete("/api/post/delete/:id", post.destroyPost);
  router.put("/api/post/update/:id", post.updatePost);
  router.get("/api/post/:id", post.getByIdPost);
  router.post("/api/post/create", post.createPost);
  router.get("/api/post", post.getPost);
  app.use(router);
};
