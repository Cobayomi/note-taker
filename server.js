const express = require ('express')
const app = express()
const PORT = process.env.PORT || 3000;
const routes = require("./routes")
const path = require("path")

console.log(__dirname)

app.get('/', (req, res) => {
  res.sendFile( path.join(_dirname, "public", "index.html"))

})

app.get('/', (req, res) => {
  res.sendFile( path.join(_dirname, "public"/ "notes.html"))
})

app.post('/', (req, res) => {
  res.sendFile( path.join(_dirname, "public", "notes.html"))
})


app.use(express.static("public"));
app.use(express.json());

app.use(routes);

app.use(express.static("public"));
app.use(express.json());

app.use(routes);

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});