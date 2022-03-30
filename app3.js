const express = require("express");
// const members = require("./Members");
// const bodyparser = require("body-parser");
const app = express();

//bodyparser middleware
app.use(express.json());
//false means object in the form of string or arraay //otherwise true if it is nested object
app.use(express.urlencoded({ extended: false }));

// //get all members
// app.get("/api/members", (req, res) => res.json(members));
// //get single member
// app.get("/api/members/:id", (req, res) => {
//   const found = members.some((member) => member.id === parseInt(req.params.id));
//   if (found) {
//     res.json(members.filter((member) => member.id === parseInt(req.params.id)));
//   } else {
//     res.status(400).json({ msg: `no member with the id of ${req.params.id}` });
//   }
// });
app.use("/api/members", require("./routes/api/members"));

const PORT = 8000;
app.listen(PORT, () => console.log(`server started on ${PORT}`));
