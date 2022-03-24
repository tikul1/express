const express = require("express");
const path = require("path");
const app = express();

//for fetching html page

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// })

//setting static folder // middleware

app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server started on ${PORT}`));