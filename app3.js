const express = require("express");
const members = require("./Members");
const app = express();

//get all members
app.get("/api/members", (req, res) => res.json(members));
//get single member
app.get("/api/members/:id", (req, res) => {
  const found = members.some((member) => member.id === parseInt(req.params.id));
  if (found) {
    res.json(members.filter((member) => member.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ msg: `no member with the id of ${req.params.id}` });
  }
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`server started on ${PORT}`));
