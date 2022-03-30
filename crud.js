const express = require("express");
const res = require("express/lib/response");
app = express();

app.use(express.json());

const accounts = [
  {
    id: 1,
    username: "paulhal",
    role: "admin",
  },
  {
    id: 2,
    username: "johndoe",
    role: "guest",
  },
  {
    id: 3,
    username: "sarahjane",
    role: "guest",
  },
];

//read data from an object
app.get("/accounts", (req, res) => {
  res.json(accounts);
});
//get indiividual data from an object
app.get("/accounts/:id", (req, res) => {
  const found = accounts.some(
    (account) => account.id === parseInt(req.params.id)
  );
  if (found) {
    res.json(
      accounts.filter((account) => account.id === parseInt(req.params.id))
    );
  } else {
    res.status(400).json({ msg: `no account with the id of ${req.params.id}` });
  }
});

// adding new data

app.post("/accounts", (req, res) => {
  const newAccount = {
    id: req.body.id,
    username: req.body.username,
    role: req.body.role,
  };
  if (!newAccount.id || !newAccount.username || !newAccount.role) {
    res.status(400).json({ msg: "Please include id, username and role" });
  }
  accounts.push(newAccount);
  res.json(accounts);
});

//updating data

app.put("/accounts/:id", (req, res) => {
  const found = accounts.some(
    (account) => account.id === parseInt(req.params.id)
  );
  if (found) {
    const updatedAccount = req.body;
    accounts.forEach((account) => {
      if (account.id === parseInt(req.params.id)) {
        account.username = updatedAccount.username
          ? updatedAccount.username
          : accounts.name;
        account.role = updatedAccount.role
          ? updatedAccount.role
          : accounts.name;
        res.json({ msg: `account updated`, accounts });
      }
    });
  } else {
    return res
      .status(400)
      .json({ msg: `no account with the id of ${req.params.id}` });
  }
});

//deleting data
app.delete("/accounts/:id", (req, res) => {
  //.some is used in array to test all the data
  const found = accounts.some(
    (account) => account.id === parseInt(req.params.id)
  );
  if (found) {
    res.json({
      msg: "member deleted",
      account: accounts.filter(
        (account) => account.id !== parseInt(req.params.id)
      ),
    });
  } else {
    res.status(400).json({ msg: `no account with the id of ${req.params.id}` });
  }
});

PORT = 5050;
app.listen(PORT, () => console.log(`server running at : ${PORT}`));
