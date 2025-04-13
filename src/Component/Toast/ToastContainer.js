// src/components/Toast/ToastContainer.js
import React from 'react';
import Toast from './Toast';
import '../../style.css';


const ToastContainer = ({ toasts, onClose }) => {
  return (
    <div className="custom-margin">
      {toasts.map(toast => (
        <Toast key={toast.id} {...toast} onClose={onClose} />
      ))}
    </div>
  );
};

export default ToastContainer;
