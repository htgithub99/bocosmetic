module.exports = (app) => {
  require("./auth")(app);
  require("./product")(app);
  require("./order")(app);
  require("./customer")(app);
  require("./upload")(app);
  require("./category")(app);
  require("./resources")(app);
  require("./post")(app);
};
