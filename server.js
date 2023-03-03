const express = require ('express');
const fs = require('fs');
const notes = require('./db/db.json');
const public = require("./public")
const path = require("path");
const uuid = require("uuid");
const routes = require("./routes")

const app = express();
const PORT = process.env.PORT || 3000;




//middleware//
app.use(express.urlencoded({ extended: true}));
app.use(express.static("public"));
app.use(express.json(public));


app.get('/', (req, res) => {
  res.sendFile( path.join(_dirname, "public", "index.html"))

})

app.get('/', (req, res) => {
  res.sendFile( path.join(_dirname, "public"/ "notes.html"))
})

app.post('/', (req, res) => {
  res.sendFile( path.join(_dirname, "public", "notes.html"))
})


app.use(routes);

app.use(express.static("public"));
app.use(express.json());

app.use(routes);

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});