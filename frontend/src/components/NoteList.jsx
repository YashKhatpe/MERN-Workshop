import React from "react";
import NoteItem from "./NoteItem";

const NotesList = ({ notes }) => {
  return (
    <div>
      {notes.length === 0 ? (
        <p>No notes yet.</p>
      ) : (
        notes.map((note) => <NoteItem key={note.id} note={note} />)
      )}
    </div>
  );
};

export default NotesList;
