const express = require("express");
app = express();

app.get("/about/:id/:name", (req, res) => {
  console.log("id: ", req.params.id);
  console.log("name: ", req.params["name"]); //it can be defines as [""] also
  res.send(`id: ${req.params.id} and name: ${req.params.name}`);
});

const PORT = 8080;
app.listen(PORT, () => console.log(`server started on ${PORT}`));
