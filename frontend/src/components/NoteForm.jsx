import React, { useState } from "react";

const NoteForm = ({ addNote }) => {
  const [note, setNote] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!note.trim()) return;
    addNote({ text: note, id: Date.now() });
    setNote("");
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        type="text"
        placeholder="Write a note..."
        value={note}
        onChange={(e) => setNote(e.target.value)}
        style={styles.input}
      />
      <button type="submit" style={styles.button}>Add</button>
    </form>
  );
};

const styles = {
  form: { marginBottom: "10px", display: "flex", gap: "10px" },
  input: { padding: "8px", flex: "1", background: "transparent" },
  button: { padding: "8px 12px", cursor: "pointer" },
};

export default NoteForm;
