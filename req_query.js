const express = require("express");
const res = require("express/lib/response");
const app = express();

app.get("/profile", (req, res) => {
  console.log("name:", req.query.name);
  console.log("age:", req.query.age);
  res.send();
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`server started on ${PORT}`));
