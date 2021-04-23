const express = require("express")
const router = express.Router()
const { readFile, writeFile } = require("../utils")

// (GET) returns all notes  ||  (POST) creates and returns a new note
// localhost:3000/api/notes/
router.get('/', async (req, res) => {
    let data = await readFile()
    res.json(data)
}).post('/', async (req, res) => {
    const newNote = req.body;
    let notes = await readFile()
    await writeFile([...notes, newNote])
    res.json(newNote);
});

// return a single note
// localhost:3000/api/notes/:note
router.get(`/:id`, async (req, res) => {
    const clicked = req.params.id;
    let notes = await readFile()
    let [matchedNote] = notes.filter(note => note.id === clicked)
    if (matchedNote) {
        return res.json(matchedNote);
    }
    return res.json(false);
});

module.exports = router;