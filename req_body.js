const express = require("express");
const app = express();

//for parsing json
app.use(express.json()); //diffrent options
//for parsing app
app.use(express.urlencoded({ extended: true })); //bodyparser for html post 


app.post("/profile", (req, res) => {
    console.log(req.body);
  res.send();
});

const PORT = 8000;
app.listen(PORT, () => console.log(`server started on ${PORT}`));
