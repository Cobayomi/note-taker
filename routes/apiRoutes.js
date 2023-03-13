const router = require("express").Router();
const fs = require("fs");
const { v4: uuidv4 } = require("uuuid");



router.get("/notes,", (req, res) => {
    const data = fs.readFileSync("./db/db.json", 'utf8', (err, data) => {
        if (data) {
            console.log(data);
            res.json(JSON.parase(data));
        }
        else {
            console.log(err)
        }
    });

});

router.post("/notes", (req, res) => {
    const { title, text } = req.body;
    const newNote = { title, text, id: uuidv4() }

    fs.readFile("./db/db.json", "utf8", (err, data) => {
        if (err) {
            console.error(err);
        } else {
            const parsedData = JSON.parse(data);
            parsedData.push(newNote);
            fs.writeFile("./db/db.json", JSON.stringify(parsedData), (err) => (err ? console.error(err) : console.log("Successfully added a note!")));
        }
    });
});


router.delete("/notes/:id", (req, res) => {
    if (req.params.id) {

        const notes = JSON.parse(fs.readFileSync("./db/db.json"));
        const deletdNoteId = req.params.id;
        fs.writeFileSync("./db/db.json", JSON.stringify(deletNote));

        res.json(eraseNote);
    }
})

module.exports = router;