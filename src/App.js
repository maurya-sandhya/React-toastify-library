// src/App.js
import React, { useContext } from 'react';
import ToastProvider from './Component/Toast/ToastProvider';
import ToastContext from './Component/Toast/ToastContext';
import './style.css';

const Home = () => {
  const { addToast } = useContext(ToastContext);

  return (
    <div className="button-container">
      {/* Success Button */}
      <button
        onClick={() => addToast('Success! This is a success message.', 'success')}
        className="custom-button success"
      >
        Success Toast
      </button>

      {/* Error Button */}
      <button
        onClick={() => addToast('Error! Something went wrong.', 'error')}
        className="custom-button error"
      >
        Error Toast
      </button>

      {/* Info Button */}
      <button
        onClick={() => addToast('Info! This is an informational message.', 'info')}
        className="custom-button info"
      >
        Info Toast
      </button>

      {/* Warning Button */}
      <button
        onClick={() => addToast('Warning! Be cautious.', 'warning')}
        className="custom-button warning"
      >
        Warning Toast
      </button>
    </div>
    
  );
};

const App = () => (
  <ToastProvider>
    <Home />
  </ToastProvider>
);

export default App;
