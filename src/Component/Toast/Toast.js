// Toast.js
import React from 'react';

const Toast = ({ id, message, type, onClose }) => {
  return (
    <div className={`toast ${type}`}>
      <span>{message}</span>
      <button onClick={() => onClose(id)}>×</button>
    </div>
  );
};

export default Toast;
