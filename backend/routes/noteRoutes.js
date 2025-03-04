const express = require("express");
const Note = require("../models/Note");
const auth = require("../middleware/auth"); // Import auth middleware

const router = express.Router();

// **Create a Note**
router.post("/add", auth, async (req, res) => {
  try {
    const { title, content } = req.body;
    const newNote = new Note({ user: req.user, title, content });
    await newNote.save();
    res.json(newNote);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// **Get All Notes for Logged-in User**
router.get("/", auth, async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user }).sort({ createdAt: -1 });
    res.json(notes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// **Update a Note**
router.put("/:id", auth, async (req, res) => {
  try {
    let note = await Note.findById(req.params.id);
    if (!note) return res.status(404).json({ msg: "Note not found" });

    if (note.user.toString() !== req.user)
      return res.status(403).json({ msg: "Not authorized" });

    note.title = req.body.title || note.title;
    note.content = req.body.content || note.content;

    await note.save();
    res.json(note);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// **Delete a Note**
router.delete("/:id", auth, async (req, res) => {
  try {
    let note = await Note.findById(req.params.id);
    if (!note) return res.status(404).json({ msg: "Note not found" });

    if (note.user.toString() !== req.user)
      return res.status(403).json({ msg: "Not authorized" });

    await note.deleteOne();
    res.json({ msg: "Note deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
