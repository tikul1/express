const express = require("express");
const path = require("path");
const app = express();

// for fetching html page

app.get("/about2", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/about.html"));
});

// setting static folder // middleware

app.use(express.static(path.join(__dirname, "public")));

app.get("/about", (req, res) => {
  res.send("about");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server started on ${PORT}`));
