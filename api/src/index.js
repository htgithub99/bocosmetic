const express = require("express");
const morgan = require("morgan");
var cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const configs = require("./constants/config");
app.use(morgan("combined"));
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
const connection = require("./db");
app.use(cors());
const port = configs.PORT || 3003;
connection();

require("./routes")(app);
app.get("/api", (req, res) => {
  res.send("Hello word!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
