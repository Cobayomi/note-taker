const router = require('express').Router()
const path = require("path");
const fs = require("fs");

const uniqid = require("uniqid");

const dbPath = path.join(__dirname, "..", "db", "db.json");

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "index.html"))
})

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "notes.html"))
    fs.readFile(dbPath, "utf-8", function (err, data) {
        if (err) {
            res.status(500).json(err);
            return;
        }
        const json = JSON.parse(data);
        res.json(json);
    });
});

router.post('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "notes.html"))
    fs.readFile(dbPath, "utf-8", function (err, data) {
        if (err) {
            res.status(500).json(err);
            return;
        }
        const notes = JSON.parse(data);

        //res.json(json);
        const newNote = {
            title: req.body.title,
            text: req.body.text,
            id: uniqid(),
        };
        notes.push(newNote);

        fs.writeFile(dbPath, JSON.stringify(notes), function (err) {
            if (err) {
                res.status(500).json(err);
                return;
            }
            res.status(200).json(notes);
        });
    });
    });

const notes = JSON.parse(data);

module.exports = router;