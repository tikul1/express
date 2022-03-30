const express = require("express");
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


  const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`server started on ${PORT}`));
