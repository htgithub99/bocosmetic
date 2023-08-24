const express = require("express");
const morgan = require("morgan");
var cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const configs = require("./constants/config");
app.use(morgan("combined"));
app.use("/public", express.static("public"));
app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
    limit: "25mb",
  })
);
app.use(express.json({ limit: "25mb" }));
const connection = require("./db");
const port = configs.PORT || 3003;
connection();

require("./routes")(app);
app.get("/api", (req, res) => {
  res.send("Hello word!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
