const express = require("express");
const path = require("path");
const app = express();

const members = [
  {
    id: 1,
    name: "hardik",
    email: "abc@gmail.com",
    status: "active",
  },
  {
    id: 2,
    name: "def",
    email: "abc2@gmail.com",
    status: "inactive",
  },
  {
    id: 3,
    name: "hardghiik",
    email: "abc3213@gmail.com",
    status: "active",
  },
];

app.get("/api/members", (req, res) => res.json(members));

app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`server started on ${PORT}`));
