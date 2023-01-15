const express = require("express");
const app = express();
const routes = require("./routes");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3333, function () {
  console.log(
    "Express sport %d in %s mode",
    this.address().port,
    app.settings.env
  );
});
app.get("/", (req, res, next) => {
  res.json("Be the hero works");
});
