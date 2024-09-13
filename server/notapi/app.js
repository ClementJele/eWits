const express = require("express");
const app = express();

// GLOBAL VARIABLES
const PORT = process.env.PORT || 3000;

// MIDDLEWARE
app.use(express.json());
app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
});

// REQUESTS

app.get('/notapi', (req, res) => {
  res.send({message: "Notifications API"});
});

module.exports = app;