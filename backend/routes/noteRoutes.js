const express = require('express');
const Note = require('../models/Note');

const router = express.Router();

// GET all notes
router.get('/', async (req, res) => {
    try {
        const notes = await Note.find();
        res.json(notes);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


// POST a new note
router.post('/', async (req, res) => {
    const { title, content } = req.body;
    try {
        const newNote = new Note({ title, content });
        await newNote.save();
        res.status(201).json(newNote);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// PUT a new note
router.put('/:id', async (req, res) => {
    const { title, content } = req.body;
    try {
        const updatedNote = await Note.findByIdAndUpdate(
            req.params.id, 
            {title, content, updatedAt: new Date()},
            {new : true}
        );

        if(!updatedNote) return res.status(404).json({error: "Note not found"});

        res.status(201).json(updatedNote);

        
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


// GET a note matching to its id
router.get('/:id', async (req, res) => {
    try {
        const note = await Note.findById(req.params.id);
        if(!note) return res.json({message: "No note found"});
        res.json(note);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


// DELETE a note
router.delete('/:id', async (req, res) => {
    try {
        await Note.findByIdAndDelete(req.params.id);
        res.json({ message: "Note deleted" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
