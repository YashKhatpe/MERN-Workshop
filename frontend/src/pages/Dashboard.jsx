import { useState, useEffect, useContext } from "react";
import AuthContext from "../context/AuthContext";
import axios from "axios";

const Dashboard = () => {
  const { token } = useContext(AuthContext);
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState({ title: "", content: "" });

  useEffect(() => {
    if (token) {
      axios
        .get("http://localhost:5000/api/notes", { headers: { Authorization: `Bearer ${token}` } })
        .then((res) => setNotes(res.data))
        .catch((err) => console.error(err));
    }
  }, [token]);

  const addNote = async () => {
    if (!newNote.title || !newNote.content) return;

    const res = await axios.post(
      "http://localhost:5000/api/notes/add",
      newNote,
      { headers: { Authorization: `Bearer ${token}` } }
    );

    setNotes([res.data, ...notes]);
    setNewNote({ title: "", content: "" });
  };

  return (
    <div>
      <h2>Your Notes</h2>

      <input
        type="text"
        placeholder="Title"
        value={newNote.title}
        onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
      />
      <textarea
        placeholder="Content"
        value={newNote.content}
        onChange={(e) => setNewNote({ ...newNote, content: e.target.value })}
      ></textarea>
      <button onClick={addNote}>Add Note</button>

      <ul>
        {notes.map((note) => (
          <li key={note._id}>
            <h3>{note.title}</h3>
            <p>{note.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
