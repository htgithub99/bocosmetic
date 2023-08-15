const mongoose = require("mongoose");
const configs = require("./constants/config");
const mongodb_url = configs.DATABASE_URL;

const connection = async () => {
  mongoose
    .connect(mongodb_url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("_______Connected succsess!"))
    .catch((error) => console.log("________error", error));
};

module.exports = connection;
