const express = require("express");
const app = express();

const port = 3000;

app.use(express.json());

app.use("/", (req, res) => {
  res.send("hee");
});

app.listen(port, () => {
  console.log(`Server running on port:`, port);
});
