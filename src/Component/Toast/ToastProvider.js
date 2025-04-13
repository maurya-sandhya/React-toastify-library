// src/components/Toast/ToastProvider.js
import React, { useState, useCallback } from 'react';
import ToastContext from './ToastContext';
import ToastContainer from './ToastContainer';

let toastId = 0;

const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((message, type = 'success', duration = 3000) => {
    const id = toastId++;
    setToasts(prev => [...prev, { id, message, type }]);

    // Auto-dismiss after duration
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, duration);
  }, []);

  const removeToast = id => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <ToastContainer toasts={toasts} onClose={removeToast} />
    </ToastContext.Provider>
  );
};

export default ToastProvider;
