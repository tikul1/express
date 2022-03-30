const express = require("express");
const app = express();

//for parsing json
app.use(express.json()); //diffrent options
// app.use(express.json({limit : 1})); 

//another way of using parameters
app.use(express.json({
    extended: true,             //qs(true) or querystring(false)
    inflate: true,              //controls compressed/deflected bodies if it is false it will reject 
    limit: '100kb',             //maximum body size 
    parameterLimit: 1000,       //controls maximum numbers of fields that we'll attempt to parse from the url
    type: 'application/x-www-form-urlencoded',  //control content-type. value can be string array functions 
    verify: undefined           //it is an optional fn which can be used to abort parsing by throwing an error
  }))

//for parsing app
app.use(express.urlencoded({ extended: true })); //bodyparser for html post

app.post("/profile", (req, res) => {
  console.log(req.body);
  res.send();
});

const PORT = 8000;
app.listen(PORT, () => console.log(`server started on ${PORT}`));
