import { useState, useEffect, useContext } from 'react';
import './Dashboard.css';
import {MyContext} from '../context/ContextApi'

function Dashboard() {

  const {handleLoggedIn, isDashboard, userData, handleSignOut, handleDeleteNote, handleCreateNote, notes, showCreateForm, setShowCreateForm, newNote, setNewNote, handleshowAllTask} = useContext(MyContext);


  useEffect(()=>{
      handleLoggedIn();
      handleshowAllTask();
  },[])


  if(isDashboard){
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <h2 className="loading-text">Loading...</h2>
      </div>
    )
  }

  return (
    <div className="dashboard">
      <div className="dashboard-container">
        {/* Header */}
        <header className="dashboard-header">
          <h1 className="dashboard-title">Dashboard</h1>
          <button className="signout-btn" onClick={handleSignOut}>
            Sign Out
          </button>
        </header>

        {/* User Info */}
        <div className="user-info">
          <h2 className="welcome-text">Welcome, {userData?.name} !</h2>
          <p className="user-email">Email: {userData?.email.replace(/(.{2})(.*)(@.*)/, '$1****$3')}</p>
        </div>

        {/* Create Note Button */}
        <button 
          className="create-note-btn"
          onClick={() => setShowCreateForm(!showCreateForm)}
        >
          Create Note
        </button>

        {/* Create Note Form */}
        {showCreateForm && (
          <div className="create-form">
           
            <textarea
              placeholder="Note content"
              value={newNote.content}
              onChange={(e) => setNewNote({ ...newNote, content: e.target.value })}
              className="note-textarea"
              rows="3"
            />
            <div className="form-buttons">
              <button onClick={handleCreateNote} className="save-btn">
                Save Note
              </button>
              <button onClick={() => setShowCreateForm(false)} className="cancel-btn">
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* Notes Section */}
        <div className="notes-section">
          <h3 className="notes-title">Notes</h3>
          <div className="notes-list">
            {notes?.length === 0 ? (
              <p className="no-notes">No notes yet. Create your first note!</p>
            ) : (
              notes?.map(note => (
                <div key={note._id} className="note-item">
                  <div className="note-content">
                    <p className="note-text">{note.task}</p>
                  </div>
                  <button 
                    className="delete-btn"
                    onClick={() => handleDeleteNote(note._id)}
                    title="Delete note"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" fill="currentColor"/>
                    </svg>
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;