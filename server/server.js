const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use(morgan("short")); //short or combines
/* app.use(express.static('./public/')); */

app.use(bodyParser.urlencoded({ extended: false }));
/* app.use(bodyParser.json()); */

app.listen(PORT, () => {
  console.log("Server is up and running on 5000");
});

app.get("/", (req, res) => {
  res.send("Main folder");
});

app.get("/webpage", (req, res) => {
  res.send("This will fetch webpage");
});
