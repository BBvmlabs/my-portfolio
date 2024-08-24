import React from 'react';
import './Modal.css'; // Import CSS for the modal

const Modal = ({ isOpen, onClose, src, alt }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={src} alt={alt} className="modal-image" />
        <button className="modal-close" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;