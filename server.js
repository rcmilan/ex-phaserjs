const express = require("express");
const app = express();

const host = "localhost";
const port = 8080;

app.use(express.static(__dirname + "/public"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.listen(8080, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
