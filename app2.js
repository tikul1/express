const express = require("express");
const path = require("path");
const members = require("./Members");
const moment = require("moment");
const app = express();

//using middleware
const logger = (req, res, next) => {
  console.log(
    `${req.protocol}://${req.get("host")}${
      req.originalUrl
    } :${moment().format()}`
  );
  next();
};
//init middleware
app.use(logger);

app.get("/api/members", (req, res) => res.json(members));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`server started on ${PORT}`));
