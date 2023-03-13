const express = require("express");
const fs = require("fs");
const app = express();
const apiRoutes = require("./routes/apiRoutes");
const path = require("path");
const { dirname } = require("path");

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
});