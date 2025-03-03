import React from "react";

const NoteItem = ({ note }) => {
  return <div style={styles.note}>{note.text}</div>;
};

const styles = {
  note: {
    background: "#f4f4f4",
    padding: "10px",
    margin: "5px 0",
    borderRadius: "5px",
  },
};

export default NoteItem;
