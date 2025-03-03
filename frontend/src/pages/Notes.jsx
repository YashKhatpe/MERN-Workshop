import axios from 'axios';
import React, { useState, useEffect } from 'react';

const API_URL = "http://localhost:5000/api/notes";

const Notes =() =>{
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [editingId, setEditingId] = useState(null);

  // Load notes from database on initial render
  useEffect(() => {

    axios.get(API_URL)
    .then(response => setNotes(response.data))
    .catch(error => console.error("Error fetching notes: ",error.message));
  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!title.trim() || !content.trim()) return;

    if (editingId) {
      try {
        const response = await axios.put(`${API_URL}/${editingId}`, {title, content} );
        setNotes(notes.map(note => (note._id === editingId ? response.data : note)));
        setEditingId(null);
      } catch (error) {
        console.error("Error updating note: ", error);
      }
    } else {
        try {
            const response = await axios.post(API_URL, {title, content});
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
    try {
      await axios.delete(`${API_URL}/${id}`);
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
        <p className="app-subtitle">Your notes are automatically saved to the mongo db database</p>
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

      <div className="notes-list">
        {notes.length === 0 ? (
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
                  className="edit-button"
                  onClick={() => handleEdit(note)}
                >
                  Edit
                </button>
                <button
                  className="delete-button"
                  onClick={() => handleDelete(note._id)}
                >
                  Delete
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