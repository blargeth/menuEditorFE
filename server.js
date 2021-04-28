const express = require("express");
const path = require("path");

const app = express();

//CONSTANTS AND SUCH:
const {SAMPLE_DATA} = require('./sampledata')
const PORT = 3000;

app.use("/", express.static(path.join(__dirname, "public")));
app.use(express.json());

// respond with "hello world" when a GET request is made to the homepage
app.get("/", function (req, res) {
  res.send("hello worlddd");
});

app.get("/menuTest", function (req, res) {
  res.json(SAMPLE_DATA);
});

app.listen(PORT, () => {
  console.log(`My app listening at http://localhost:${PORT}`);
});
