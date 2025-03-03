import React, { useState, useEffect } from 'react';

const Home =() =>{
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [editingId, setEditingId] = useState(null);

  // Load notes from localStorage on initial render
  useEffect(() => {
    const savedNotes = localStorage.getItem('notes');
    if (savedNotes) {
      try {
        setNotes(JSON.parse(savedNotes));
      } catch (error) {
        console.error('Error parsing saved notes:', error);
        localStorage.removeItem('notes');
      }
    }
  }, []);

  // Save notes to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!title.trim() || !content.trim()) return;

    if (editingId) {
      setNotes(notes.map(note => 
        note.id === editingId 
          ? { ...note, title, content }
          : note
      ));
      setEditingId(null);
    } else {
      const newNote = {
        id: Date.now().toString(),
        title,
        content,
        createdAt: new Date().toISOString()
      };
      setNotes([newNote, ...notes]);
    }

    setTitle('');
    setContent('');
  };

  const handleEdit = (note) => {
    setTitle(note.title);
    setContent(note.content);
    setEditingId(note.id);
  };

  const handleDelete = (id) => {
    setNotes(notes.filter(note => note.id !== id));
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
        <p className="app-subtitle">Your notes are automatically saved to local storage</p>
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
            <div key={note.id} className="note-card">
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
                  onClick={() => handleDelete(note.id)}
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

export default Home;