const express = require("express");
const res = require("express/lib/response");
const app = express();

//localhost:8000/profile?name=hardik&age=13
app.get("/profile", (req, res) => {
  console.log("name:", req.query.name);
  console.log("age:", req.query.age);
  res.send();
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`server started on ${PORT}`));
