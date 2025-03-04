import axios from 'axios';
import { Edit2, Trash2 } from 'lucide-react';
import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const API_URL = import.meta.env.MODE === 'development' ? 'http://localhost:5000' : import.meta.env.VITE_BACKEND_URL;

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [editingId, setEditingId] = useState(null);

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token")
    axios.get(`${API_URL}/api/notes`,
      { headers: { Authorization: `Bearer ${token}` } }
    )
      .then(response => {
        setNotes(response.data);
        console.log(API_URL);
      })
      .catch(error => console.error("Error fetching notes: ", error.message));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      navigate('/login'); // Redirect to login if not logged in
      return;
    }

    if (!title.trim() || !content.trim()) return;

    const token = localStorage.getItem("token"); // Get JWT token
    console.log("Token: ", token);
    if (editingId) {
      try {
        const response = await axios.put(
          `${API_URL}/api/notes/${editingId}`,
          { title, content },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setNotes(notes.map(note => (note._id === editingId ? response.data : note)));
        setEditingId(null);
      } catch (error) {
        console.error("Error updating note: ", error);
      }
    } else {
      try {
        const response = await axios.post(
          `${API_URL}/api/notes/add`,
          { title, content },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setNotes([response.data, ...notes]);
      } catch (error) {
        console.error("Error adding note: ", error.message);
      }
    }

    setTitle('');
    setContent('');
  };

  const handleEdit = (note) => {
    setTitle(note.title);
    setContent(note.content);
    setEditingId(note._id);
  };

  const handleDelete = async (id) => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate('/login');
      return;
    }

    try {
      await axios.delete(`${API_URL}/api/notes/${id}`, { headers: { Authorization: `Bearer ${token}` } });
      setNotes(notes.filter(note => note._id !== id)); // Remove from UI
    } catch (error) {
      console.error("Error deleting note:", error.message);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">My Notes</h1>
        <p className="app-subtitle">Your notes are automatically saved to the database</p>
      </header>

      <form className="note-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="note-input"
          placeholder="Note Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="note-textarea"
          placeholder="Note Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit" className="submit-button">
          {editingId ? 'Update Note' : 'Add Note'}
        </button>
        {editingId && (
          <button 
            type="button" 
            className="cancel-button"
            onClick={() => {
              setEditingId(null);
              setTitle('');
              setContent('');
            }}
          >
            Cancel
          </button>
        )}
      </form>

      <div className="notes-list container">
        {notes.length === 0 || !user ? (
          <div className="empty-state">
            <p>No notes yet. Start by adding one!</p>
          </div>
        ) : (
          notes.map(note => (
            <div key={note._id} className="note-card">
              <h3 className="note-title">{note.title}</h3>
              <p className="note-content">{note.content}</p>
              {note.createdAt && (
                <p className="note-date">Created: {formatDate(note.createdAt)}</p>
              )}
              <div className="note-actions">
                <button
                  className="note-btn edit"
                  onClick={() => handleEdit(note)}
                >
                  <Edit2 size={18} />
                </button>
                <button 
                  className="note-btn delete" 
                  onClick={() => handleDelete(note._id)}
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Notes;
