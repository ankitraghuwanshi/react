import React from 'react'

function Modal({ title, isOpen, hide }) {
    if(!isOpen) {
        return null
    }
  
    return (
    <div className="modal-overlay">
          <div className="modal">
            <h2>{title || "Modal Title"}</h2>
            <p>This is a modal.</p>
            <button onClick={hide}>Close</button>
          </div>
    </div>
    );
}

export default Modal
