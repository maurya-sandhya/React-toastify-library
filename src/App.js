import React, { useContext } from 'react';
import ToastProvider from './Component/Toast/ToastProvider';
import ToastContext from './Component/Toast/ToastContext';
import Header from './Header';
import Footer from './Footer';
import './index.css';
import './style.css';

const Home = () => {
  const { addToast } = useContext(ToastContext);

  return (
    <div className="main-content">
      <div className="overlay">
        <h1>Welcome to My Toast Website</h1>
        <p>Click a button to trigger a toast!</p>

        <div className="button-container">
          <button
            onClick={() => addToast('Success! This is a success message.', 'success')}
            className="custom-button success"
          >
            Success Toast
          </button>
          <button
            onClick={() => addToast('Error! Something went wrong.', 'error')}
            className="custom-button error"
          >
            Error Toast
          </button>
          <button
            onClick={() => addToast('Info! Just FYI.', 'info')}
            className="custom-button info"
          >
            Info Toast
          </button>
          <button
            onClick={() => addToast('Warning! Heads up.', 'warning')}
            className="custom-button warning"
          >
            Warning Toast
          </button>
        </div>
      </div>
    </div>
  );
};

const App = () => (
  <ToastProvider>
    <div className="app-container" style={{
        backgroundImage: "url('/background.jpg')", // ✅ Direct URL from public
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
      <Header />
      <Home />
      <Footer />
    </div>
  </ToastProvider>
);

export default App;
