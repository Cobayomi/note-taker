const express = require ('express')
const app = express()
const PORT = process.env.PORT || 3000;
const routes = require("./routes")
const path = require("path")

app.use(express.static("public"));
app.use(express.json());

app.use(routes);

app.use(express.static("public"));
app.use(express.json());

app.use(routes);

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});